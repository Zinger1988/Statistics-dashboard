import { ResponsiveLine } from '@nivo/line';

function LineChart({ settings, className = '' }) {
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
