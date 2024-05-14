import { ResponsiveLine } from '@nivo/line';

import { Loader, Legend, Box } from '../../ui';

import { getLegend } from './utils';
import { calcLineChartSettings } from './lineChartSettings';

function LineChartList({ data, isLoading, className = '' }) {
  const cssClass = `relative overflow-hidden ${className}`;
  const content = data.map((item) => (
    <Box className={cssClass} label={item.title} key={item.id}>
      {isLoading && (
        <Loader className='absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-slate-950/70' />
      )}
      <Legend data={getLegend(item.lines)} className='mb-3' />
      <div className='h-96'>
          <ResponsiveLine {...calcLineChartSettings(item)} />
      </div>
    </Box>
  ));

  return content;
}

export default LineChartList;
