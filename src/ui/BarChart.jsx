import { ResponsiveBar } from '@nivo/bar';
import { defaultSettings } from '../utils/barChartSettings';

function BarChart({ className = '', settings }) {
  const chartSettings = {
    ...defaultSettings,
    ...settings,
  };

  return (
    <div className={className}>
      <ResponsiveBar {...chartSettings} />
    </div>
  );
}

export default BarChart;
