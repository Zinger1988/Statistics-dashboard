import { ResponsiveBar } from '@nivo/bar';

import { Button, StatsTable } from '../../ui';

import { calcBarChartSettings } from './barChartSettings';

function EngineerInfo({
  name,
  id,
  stats,
  chartSettings,
  maxChartValue = 'auto',
  className = '',
}) {
  return (
    <article className={`grid grid-cols-12 gap-4 ${className}`}>
      <div className='col-span-5 grid grid-cols-[1fr_auto] items-center gap-4'>
        <h3 className='col-span-1 grow text-xl font-medium'>{name}</h3>
        {id && (
          <Button
            to={`${id}`}
            appearance='outline'
            size='sm'
            className='col-start-2'
          >
            Подробнее
          </Button>
        )}
        <StatsTable stats={stats} className='col-span-full' />
      </div>
      <div className='col-span-7'>
        <ResponsiveBar
          {...calcBarChartSettings(chartSettings)}
          maxValue={maxChartValue}
          className='h-full'
        />
      </div>
    </article>
  );
}

export default EngineerInfo;
