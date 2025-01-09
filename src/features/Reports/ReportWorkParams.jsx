import { Accordion, Box, Icon, GaugeChart, Loader } from '../../ui';
import { calcBarChartSettings } from './utils';
import { ResponsiveBar } from '@nivo/bar';
import Filter from './Filter';
import { useNavigate } from 'react-router-dom';

function ReportWorkParams({ reportData, isRefetching }) {
  const { filters, data } = reportData;

  const gaugeCharts = data.filter((item) => item.type === 'scalar');
  const barChart = data.find((item) => item.type === 'barChart');
  const navigate = useNavigate();

  barChart.lines.sort((a, b) => {
    return a.data[0].value - b.data[0].value;
  });

  const renderGaugeChart = (data) => {
    const { asLinkFor } = data;
    const chartClasses = asLinkFor ? 'cursor-pointer' : '';
    return (
      <GaugeChart
        className={chartClasses}
        key={data.id}
        onClick={() => (asLinkFor ? navigate(`/reports/${asLinkFor}`) : null)}
        data={data}
      />
    );
  };

  return (
    <div className='grid grid-cols-12 gap-5'>
      <Accordion active='filter' className='col-span-12'>
        <Accordion.Header
          accordionId='filter'
          className='flex items-center gap-2.5'
        >
          <Icon id='gear-solid' className='h-4 w-4 fill-slate-400' />
          <span>Фильтры</span>
        </Accordion.Header>
        <Accordion.Body accordionId='filter'>
          <Filter
            data={filters}
            isLoading={isRefetching}
            className='col-span-9'
          />
        </Accordion.Body>
      </Accordion>

      <Box
        className='relative col-span-7 min-h-[640px]'
        label='Закрито в поточному місяці'
      >
        {isRefetching && (
          <Loader className='absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-slate-950/70' />
        )}
        <ResponsiveBar
          {...calcBarChartSettings(barChart.lines, {
            margin: { top: 20, right: 10, bottom: 0, left: 100 },
          })}
          maxValue={'auto'}
          className='h-full'
        />
      </Box>
      <Box className='col-span-5' label='Параметри роботи'>
        <div className='grid grid-cols-3 gap-x-10 gap-y-9 p-4'>
          {gaugeCharts.map(renderGaugeChart)}
        </div>
      </Box>
    </div>
  );
}

export default ReportWorkParams;
