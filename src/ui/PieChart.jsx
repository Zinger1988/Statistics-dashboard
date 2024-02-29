import { ResponsivePie } from '@nivo/pie';
import { defaultSettings } from '../utils/barChartSettings';

function PieChart({ className = '', settings }) {
  const chartSettings = {
    ...defaultSettings,
    ...settings,
  };

  return (
    <div className={className}>
      <ResponsivePie {...chartSettings} />
    </div>
  );
}

export default PieChart;
