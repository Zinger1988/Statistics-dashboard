import { ResponsiveLine } from '@nivo/line';

import CommonReportFilter from './CommonReportFilter';
import { Box, GaugeChart, Legend, Loader } from '../../ui';

import { useEditCommonReport } from './useEditCommonReport';
import { calcLineChartSettings } from '../../utils/lineChartSettings';

function CommonReport({ report }) {
  const { editCommonReport, isEditing } = useEditCommonReport();
  const { filters, data } = report;

  const incomeDynamics = data.find((item) => item.id === 'graph-1');
  const completeDynamics = data.find((item) => item.id === 'graph-2');
  const monthShipments = data.filter((item) => item.id.includes('scalar'));

  const getLegend = (chartData) =>
    chartData.map(({ id, color }) => ({ id, color }));

  return (
    <div className='grid grid-cols-12 items-start gap-5'>
      <div className='col-span-9'>
        <CommonReportFilter
          filters={filters}
          isEditing={isEditing}
          onFilterSubmit={editCommonReport}
        />
      </div>
      <Box
        className='relative col-span-9 overflow-hidden'
        label={incomeDynamics.title}
      >
        {isEditing && (
          <Loader className='absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-slate-900/70' />
        )}
        <Legend data={getLegend(incomeDynamics.lines)} className='mb-3' />
        <div className='h-96'>
          <ResponsiveLine {...calcLineChartSettings(incomeDynamics)} />
        </div>
      </Box>
      <Box
        className='relative col-span-9 overflow-hidden'
        label={completeDynamics.title}
      >
        {isEditing && (
          <Loader className='absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-slate-900/70' />
        )}
        <Legend data={getLegend(completeDynamics.lines)} className='mb-3' />
        <div className='h-64'>
          <ResponsiveLine {...calcLineChartSettings(completeDynamics)} />
        </div>
      </Box>
      <Box
        className='col-span-3 col-start-10 row-span-3 row-start-1'
        label='Отгрузки за текущий месяц'
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

export default CommonReport;
