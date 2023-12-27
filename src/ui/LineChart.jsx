import { linearGradientDef } from '@nivo/core';
import { ResponsiveLine } from '@nivo/line';

import { theme } from '../utils/lineChartTheme';
import { hex2rgb } from '../utils/helpers';

function LineChart({ data, className = '', isLoading = false }) {
  console.log(data);

  const valuesY = data.lines.flatMap((d) => d.data.map((i) => i.y));
  const minY = 0;
  const maxY = Math.max(...valuesY);

  const settings = {
    theme,
    data: data.lines,
    margin: { top: 27, right: 27, bottom: 45, left: 54 },
    xScale: { type: 'point' },
    yScale: {
      type: 'linear',
      min: minY,
      max: maxY,
      reverse: false,
    },
    curve: 'linear',
    axisTop: null,
    axisRight: null,
    axisBottom: {
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: data.xAxisLabel,
      legendOffset: 36,
      legendPosition: 'middle',
    },
    axisLeft: {
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: data.yAxisLabel,
      legendOffset: -49,
      legendPosition: 'middle',
    },
    colors: ({ color }) => color,
    pointSize: 1,
    pointColor: { theme: 'background' },
    pointBorderWidth: 6,
    pointBorderColor: { from: 'serieColor' },
    enablePointLabel: true,
    pointLabelYOffset: -12,
    useMesh: true,
    legends: [],
    enableArea: true,
    enableSlices: 'x',
    defs: data.lines.map((item, index) => {
      const { r, g, b } = hex2rgb(item.color);
      const color = `rgb(${r},${g}, ${b})`;
      return linearGradientDef(`gradient${index}`, [
        { offset: 0, color, opacity: 10 },
        { offset: 100, color, opacity: 0 },
      ]);
    }),
    fill: data.lines.map((line, index) => ({
      match: (bar) => bar.id === line.id,
      id: `gradient${index}`,
    })),
  };

  return (
    <div className={`${className}`}>
      <ResponsiveLine {...settings} />
    </div>
  );
}

export default LineChart;
