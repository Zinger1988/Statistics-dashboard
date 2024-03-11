import LineChartList from './LineChartList';
import GaugeChartList from './GaugeChartList';
import PieChartList from './PieChartList';
import Filter from './Filter';
import { Accordion, Icon } from '../../ui';

function Report({ reportData, isRefetching }) {
  const { filters, data } = reportData;

  const lineCharts = data.filter((item) => item.type === 'graph');
  const gaugeCharts = data.filter((item) => item.type === 'scalar');
  const pieCharts = data.filter((item) => item.type === 'pieChart');

  return (
    <div className='grid grid-cols-12 items-start gap-5'>
      <Accordion active='filter' className='col-span-9'>
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

      <LineChartList
        data={lineCharts}
        isLoading={isRefetching}
        className='col-span-9'
      />
      <div className='col-span-3 col-start-10 row-span-3 row-start-1 grid gap-5'>
        <PieChartList data={pieCharts} isLoading={isRefetching} />
        <GaugeChartList data={gaugeCharts} className='py-3' />
      </div>
    </div>
  );
}

export default Report;
