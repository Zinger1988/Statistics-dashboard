import { useState } from 'react';
import { ResponsiveLine } from '@nivo/line';

import { Loader, Box, Legend } from '../../ui';

import { calcLineChartSettings, getLegend } from './utils';

function LineChartList({
  data,
  isLoading,
  className = '',
  chartSettingsOverride = {},
}) {
  const [hiddenLines, setHiddenLines] = useState({});
  const cssClass = `relative overflow-hidden ${className}`;

  const handleHideLine = (chartId, lineId) => {
    if (!hiddenLines[chartId]) {
      setHiddenLines((lines) => ({ ...lines, [chartId]: [lineId] }));
      return;
    }

    if (hiddenLines[chartId].includes(lineId)) {
      setHiddenLines((lines) => ({
        ...lines,
        [chartId]: lines[chartId].filter((line) => line !== lineId),
      }));
    } else {
      setHiddenLines((lines) => ({
        ...lines,
        [chartId]: [...lines[chartId], lineId],
      }));
    }
  };

  const content = data.map((item) => {
    const visibleLines = item.lines.filter(
      (line) => !hiddenLines[item.id]?.includes(line.id),
    );

    return (
      <Box className={cssClass} label={item.title} key={item.id}>
        {isLoading && (
          <Loader className='absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-slate-950/70' />
        )}
        <Legend
          data={getLegend(item.lines)}
          className='mb-3'
          onClick={handleHideLine.bind(null, item.id)}
          hiddenLegends={hiddenLines[item.id]}
        />
        <div className='h-96'>
          <ResponsiveLine
            {...calcLineChartSettings({ ...data, lines: visibleLines })}
            {...chartSettingsOverride}
          />
        </div>
      </Box>
    );
  });

  return content;
}

export default LineChartList;
