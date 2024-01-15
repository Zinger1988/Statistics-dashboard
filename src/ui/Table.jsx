import { createContext, useContext } from 'react';

const TableContext = createContext();

function Table({ columns, children, className = '' }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        className={`overflow-hidden rounded-md border border-slate-600 ${className}`}
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Heading({ data, render, className = '' }) {
  const { columns } = useContext(TableContext);
  const CSSClass = `grid ${columns}`;
  return (
    <header
      className={`bg-slate-800/60 text-xs font-medium ${CSSClass} ${className}`}
    >
      {data.map(render)}
    </header>
  );
}

function Body({ data, render, className }) {
  return <section className={className}>{data.map(render)}</section>;
}

function Row({ data, render, className = '' }) {
  const { columns } = useContext(TableContext);
  const CSSClass = `grid ${columns}`;
  return (
    <div
      className={`group/wrapper even:bg-slate-800/50 group-last/wrapper:shadow-[inset_-1px_0_0_0_theme(colors.slate.600)] ${CSSClass} ${className}`}
    >
      {data.map(render)}
    </div>
  );
}

function Cell({ children, className = '' }) {
  return (
    <div
      className={`px-3 py-1.5 text-sm shadow-[inset_-1px_-1px_0_0_theme(colors.slate.600)] last:shadow-[inset_0_-1px_0_0_theme(colors.slate.600)] group-last/wrapper:shadow-[inset_-1px_0_0_0_theme(colors.slate.600)] ${className}`}
    >
      {children}
    </div>
  );
}

Table.Heading = Heading;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

export default Table;
