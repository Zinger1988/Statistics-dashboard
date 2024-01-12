import { linearGradientDef } from '@nivo/core';
import { ResponsiveLine } from '@nivo/line';

import { defaultSettings } from '../utils/lineChartSettings';
import { hex2rgb } from '../utils/helpers';

function LineChart({ data, settings, className = '' }) {
  const chartSettings = {
    ...settings,
  };

  return (
    <div className={className}>
      <ResponsiveLine {...chartSettings} />
    </div>
  );
}

export default LineChart;
