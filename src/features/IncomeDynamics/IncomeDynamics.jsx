import { ResponsiveLine } from '@nivo/line';

import IncomeDynamicsFilter from './IncomeDynamicsFilter';
import { Box, GaugeChart, Legend } from '../../ui';
import { calcLineChartSettings } from '../../utils/lineChartSettings';

function IncomeDynamics({ report }) {
  const { filters, data } = report;
  const incomeDynamics = data.find((item) => item.id === 'graph-1');
  const monthShipments = data.filter((item) => item.id.includes('scalar'));

  const getLegend = (chartData) =>
    chartData.map(({ id, color }) => ({ id, color }));

  return (
    <div className='grid grid-cols-12 items-start gap-5'>
      <div className='col-span-9'>
        <IncomeDynamicsFilter filters={filters} />
      </div>
      <Box className='col-span-9' label={incomeDynamics.title}>
        <Legend data={getLegend(incomeDynamics.lines)} className='mb-3' />
        <div className='h-96'>
          <ResponsiveLine {...calcLineChartSettings(incomeDynamics)} />
        </div>
      </Box>
      <Box
        className='col-span-3 col-start-10 row-span-3 row-start-1'
        label='Обращения за текущую неделю'
      >
        {monthShipments.map((data) => (
          <GaugeChart
            key={data.id}
            data={data}
            className='mx-auto mb-8 last:mb-0'
          />
        ))}
      </Box>
    </div>
  );
}

export default IncomeDynamics;
