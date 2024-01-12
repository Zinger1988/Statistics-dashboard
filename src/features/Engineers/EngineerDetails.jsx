import { Box, GaugeChart, Table, Tabs } from '../../ui';
import EngineerInfo from './EngineerInfo';

function EngineerDetails({ engineer }) {
  const { name, stats, chart, details, statsRelative } = engineer.data;

  console.log(engineer.data);

  return (
    <div className='grid grid-cols-1 items-start gap-5'>
      <Box label='Флаги сотрудника'>
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
          {details.map((item, i) => (
            <Tabs.TabsContent key={i} tabId={i}>
              <Table head={item.head} rows={item.rows} />
            </Tabs.TabsContent>
          ))}
        </Tabs>
      </Box>
    </div>
  );
}

export default EngineerDetails;
