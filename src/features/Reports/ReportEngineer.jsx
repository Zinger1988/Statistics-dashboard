import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import EngineerCard from './EngineerCard';
import { Box, GaugeChart, Table, Tabs, Icon, Legend } from '../../ui';

function ReportEngineer({ engineer }) {
  const { id, name, stats, chart, details, statsRelative } = engineer.data;
  const { hash } = useLocation();
  const [anchor, setAnchor] = useState(decodeURI(hash).slice(1));
  const isValidAnchor = details.some((item) => item.label === anchor);

  useEffect(() => {
    let timeoutId = null;
    setAnchor(decodeURI(hash).slice(1));

    if (isValidAnchor) {
      timeoutId = setTimeout(() => {
        document
          .getElementById('hashTarget')
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }

    return () => clearTimeout(timeoutId);
  }, [hash, isValidAnchor]);

  const getLegend = (data) => {
    return data
      .map(({ data }) =>
        data.map(({ subLabel, color, value }) => ({
          id: subLabel,
          color,
          value,
        })),
      )
      .flat();
  };

  return (
    <div className='grid grid-cols-1 items-start gap-5'>
      <Box>
        <Legend data={getLegend(engineer.data.chart.lines)} className='mb-8' />
        <EngineerCard
          id={id}
          name={name}
          stats={stats}
          chartSettings={chart.lines}
          className='mb-6 border-b border-slate-600 pb-6 last:border-none last:pb-0'
        />
        {statsRelative.length > 0 && (
          <div className='mb-2 flex gap-12'>
            {statsRelative.map((item) => (
              <GaugeChart key={item.id} data={item} className='w-44' />
            ))}
          </div>
        )}
      </Box>
      <Box>
        <Tabs active={isValidAnchor ? anchor : details[0].label}>
          <Tabs.TabsHead id='hashTarget'>
            {details.map((item, i) => (
              <Tabs.TabsToggler key={i} tabId={item.label}>
                {item.label}
              </Tabs.TabsToggler>
            ))}
          </Tabs.TabsHead>
          {details.map((tab, i) => (
            <Tabs.TabsContent key={i} tabId={tab.label}>
              <Table>
                <Table.Heading
                  data={tab.head}
                  render={(cell, i, arr, onClick, sortByColumn, sortOrder) => {
                    return (
                      <Table.Cell
                        className='cursor-pointer p-3 text-xs'
                        key={i}
                        onClick={onClick}
                        sortByColumn={sortByColumn === i}
                        sortOrder={sortOrder}
                      >
                        {cell}
                      </Table.Cell>
                    );
                  }}
                />
                <Table.Body
                  data={tab.rows}
                  render={(row, i) => (
                    <Table.Row
                      data={row}
                      key={i}
                      render={(cell, i) => (
                        <Table.Cell key={i}>
                          {typeof cell === 'boolean' ? (
                            <Icon
                              id={cell ? 'check-circled' : 'cancel-circled'}
                              className={
                                cell
                                  ? 'h-5 w-5 fill-green-500'
                                  : 'h-5 w-5 fill-red-500'
                              }
                            />
                          ) : (
                            cell
                          )}
                        </Table.Cell>
                      )}
                    />
                  )}
                />
              </Table>
            </Tabs.TabsContent>
          ))}
        </Tabs>
      </Box>
    </div>
  );
}

export default ReportEngineer;
