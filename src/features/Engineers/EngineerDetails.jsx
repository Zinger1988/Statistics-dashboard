import EngineerInfo from './EngineerInfo';
import { Box, GaugeChart, Table, Tabs, Icon, Legend } from '../../ui';

function EngineerDetails({ engineer }) {
  const { name, stats, chart, details, statsRelative } = engineer.data;

  const getLegend = (data) => {
    return data
      .map(({ data }) =>
        data.map(({ subLabel, color }) => ({ id: subLabel, color })),
      )
      .flat();
  };

  return (
    <div className='grid grid-cols-1 items-start gap-5'>
      <Box label='Флаги сотрудника'>
        <Legend data={getLegend(engineer.data.chart.lines)} className='mb-8' />
        <EngineerInfo
          name={name}
          stats={stats}
          chartSettings={chart.lines}
          className='mb-6 border-b border-slate-600 pb-6'
        />
        <div className='mb-2 flex gap-12'>
          {statsRelative.map((item) => (
            <GaugeChart key={item.id} data={item} className='w-44' />
          ))}
        </div>
      </Box>
      <Box label='Детализация по сотруднику и флагу'>
        <Tabs active={0}>
          <Tabs.TabsHead>
            {details.map((item, i) => (
              <Tabs.TabsToggler key={i} tabId={i}>
                {item.label}
              </Tabs.TabsToggler>
            ))}
          </Tabs.TabsHead>
          {details.map((tab, i) => (
            <Tabs.TabsContent key={i} tabId={i}>
              <Table columns='grid-cols-[1.1fr_1.5fr_3fr_1.3fr_1.5fr_1.5fr_1.5fr_1.6fr_1.16fr_1.5fr]'>
                <Table.Heading
                  data={tab.head}
                  render={(cell, i) => (
                    <Table.Cell className='p-3 text-xs' key={i}>
                      {cell}
                    </Table.Cell>
                  )}
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

export default EngineerDetails;
