import { createContext, useCallback, useContext, useState } from 'react';
import moment from 'moment';

const TableContext = createContext();

function TableProvider({ children }) {
  const [sortByColumn, setSortByColumn] = useState(0);
  const [sortOrder, setSortOrder] = useState(1);

  const hanldeSort = useCallback((index) => setSortByColumn(index), []);
  const hanldeOrder = useCallback((order) => setSortOrder(order), []);

  return (
    <TableContext.Provider
      value={{ sortByColumn, hanldeSort, sortOrder, hanldeOrder }}
    >
      {children}
    </TableContext.Provider>
  );
}

function Table({ columns, children, className = '' }) {
  return (
    <TableProvider>
      <div
        className={`table w-full overflow-hidden rounded-md border border-slate-600 ${className}`}
      >
        {children}
      </div>
    </TableProvider>
  );
}

function Heading({ data, render, className = '', ...props }) {
  const { sortByColumn, hanldeSort, sortOrder, hanldeOrder } =
    useTableContext();

  return (
    <div
      {...props}
      className={`table-row bg-slate-800/60 text-xs font-medium ${className}`}
    >
      {data.map((cell, index, arr) => {
        const onClick = () => {
          hanldeSort(index);
          if (sortByColumn === index) {
            hanldeOrder(sortOrder * -1);
          } else {
            hanldeOrder(sortOrder);
          }
        };
        return render(cell, index, arr, onClick, sortByColumn, sortOrder);
      })}
    </div>
  );
}

function Body({ data, render, className }) {
  const { sortByColumn, sortOrder } = useTableContext();

  const sortedData = data.sort((a, b) => {
    if (a[sortByColumn] === b[sortByColumn]) {
      return 0;
    }

    function checkForDate(a, b) {
      const format = 'DD.MM.YYYY';
      const date1 = isValidDate(a, format);
      const date2 = isValidDate(b, format);

      function isValidDate(dateString, format) {
        return moment(dateString, format, true).isValid();
      }

      return date1 && date2;
    }

    if (checkForDate(a[sortByColumn], b[sortByColumn])) {
      const date1 = moment(a[sortByColumn], 'DD.MM.YYYY');
      const date2 = moment(b[sortByColumn], 'DD.MM.YYYY');
      const diff = date1.diff(date2);

      return diff * sortOrder;
    }

    return (a[sortByColumn] > b[sortByColumn] ? 1 : -1) * sortOrder;
  });

  return <>{sortedData.map(render)}</>;
}

function Row({ data, render, className = '' }) {
  return (
    <div
      className={`group/wrapper table-row even:bg-slate-800/50 group-last/wrapper:shadow-[inset_-1px_0_0_0_theme(colors.slate.600)] ${className}`}
    >
      {data.map(render)}
    </div>
  );
}

function Cell({
  children,
  className = '',
  onClick = null,
  sortByColumn,
  sortOrder,
}) {
  const inicatorClasses = `
      absolute right-2 top-1/2 -translate-y-1/2 border-4 border-transparent
      border-t-white ${sortOrder > 0 ? 'rotate-180 -mt-0.5' : 'mt-0.5'}`;
  const cellClasses = `
      table-cell relative pl-3 pr-6 py-1.5 text-sm shadow-[inset_-1px_-1px_0_0_theme(colors.slate.600)]
      last:shadow-[inset_0_-1px_0_0_theme(colors.slate.600)]
      group-last/wrapper:shadow-[inset_-1px_0_0_0_theme(colors.slate.600)] ${className}
      ${sortByColumn ? 'bg-blue-500 bg-opacity-50' : ''}
    `;

  return (
    <div onClick={onClick} className={cellClasses}>
      {children}
      {sortOrder && sortByColumn && <i className={inicatorClasses}></i>}
    </div>
  );
}

export function useTableContext() {
  const context = useContext(TableContext);

  if (context === undefined) {
    throw new Error('Looks like you use Table Context outside Table Provider');
  }

  return context;
}

Table.Heading = Heading;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

export default Table;
