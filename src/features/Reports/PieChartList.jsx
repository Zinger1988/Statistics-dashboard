import { useState } from 'react';
import { ResponsivePie } from '@nivo/pie';

import { Loader, Legend, Box } from '../../ui';

import { getLegend } from './utils';
import { calcPieChartSettings } from './utils';

function PieChartList({ data, isLoading, className = '' }) {
  const [hiddenSlices, setHiddenSlices] = useState({});
  const cssClass = `relative overflow-hidden ${className}`;

  const handleHideSlice = (chartId, sliceId) => {
    if (!hiddenSlices[chartId]) {
      setHiddenSlices((slices) => ({ ...slices, [chartId]: [sliceId] }));
      return;
    }

    if (hiddenSlices[chartId].includes(sliceId)) {
      setHiddenSlices((slices) => ({
        ...slices,
        [chartId]: slices[chartId].filter((slice) => slice !== sliceId),
      }));
    } else {
      setHiddenSlices((slices) => ({
        ...slices,
        [chartId]: [...slices[chartId], sliceId],
      }));
    }
  };

  const content =
    data.length > 0 ? (
      <Box
        className={cssClass}
        label='Долі підрозділів в зареєстрованих надходженнях'
      >
        {isLoading && (
          <Loader className='absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-slate-950/70' />
        )}

        {data.map((item) => {
          const visibleSlices = item.slices.filter(
            (slice) => !hiddenSlices[item.id]?.includes(slice.id),
          );

          return (
            <div key={item.id}>
              <div className='mb-3 h-96'>
                <ResponsivePie {...calcPieChartSettings(visibleSlices)} />
              </div>
              <Legend
                data={getLegend(item.slices)}
                onClick={handleHideSlice.bind(null, item.id)}
                hiddenLegends={hiddenSlices[item.id]}
              />
            </div>
          );
        })}
      </Box>
    ) : null;

  return content;
}

export default PieChartList;
