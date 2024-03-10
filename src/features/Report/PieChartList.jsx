import { ResponsivePie } from '@nivo/pie';

import { Loader, Legend, Box } from '../../ui';

import { getLegend } from './utils';
import { calcPieChartSettings } from './pieChartSettings';

function PieChartList({ data, isLoading, className = '' }) {
  const cssClass = `relative overflow-hidden ${className}`;
  const content =
    data.length > 0 ? (
      <Box
        className={cssClass}
        label='Долі підрозділів в зареєстрованих надходженнях'
      >
        {isLoading && (
          <Loader className='absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-slate-950/70' />
        )}

        {data.map((item) => (
          <div key={item.id}>
            <div className='mb-3 h-96'>
              <ResponsivePie {...calcPieChartSettings(item.slices)} />
            </div>
            <Legend data={getLegend(item.slices)} />
          </div>
        ))}
      </Box>
    ) : null;

  return content;
}

export default PieChartList;
