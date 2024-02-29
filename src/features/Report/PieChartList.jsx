import { ResponsivePie } from '@nivo/pie';

import { Loader, Legend, Box } from '../../ui';

import { getLegend } from './utils';
import { calcPieChartSettings } from './pieChartSettings';

function LineChartList({ data, isLoading, className = '' }) {
  const cssClass = `relative overflow-hidden ${className}`;
  const content = (
    <Box
      className={cssClass}
      label='Долі підрозділів в зареєстрованих надходженнях'
    >
      {isLoading && (
        <Loader className='absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-slate-950/70' />
      )}
      <div className='mb-3 h-96'>
        <ResponsivePie {...calcPieChartSettings(data)} />
      </div>
      <Legend data={getLegend(data)} />
    </Box>
  );

  return content;
}

export default LineChartList;
