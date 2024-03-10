import { linearGradientDef } from '@nivo/core';
import { hex2rgb } from '../../utils/helpers';

export const theme = {
  fontFamily: 'inherit',
  textColor: '#ffffff',
  fontSize: 13,
  dots: {
    text: {
      fontFamily: 'inherit',
      fill: '#ffffff',
      fontSize: 12,
    },
  },
  axis: {
    domain: {
      line: {
        stroke: '#484F57',
      },
    },
    legend: {
      text: {
        fontFamily: 'inherit',
        fontSize: 13,
        fontWeight: 500,
        fill: '#ffffff',
      },
    },
    ticks: {
      line: {
        stroke: '#ffffff',
      },
      text: {
        fontFamily: 'inherit',
        fontSize: 12,
        fill: '#718085',
      },
    },
  },
  grid: {
    line: {
      stroke: '#484F57',
    },
  },
  tooltip: {
    container: {
      background: '#20262B',
      color: '#ffffff',
      fontSize: 13,
      boxShadow: '0 4px 12px rgba(0,0,0,.15)',
      borderRadius: 4,
    },
  },
};

export const defaultSettings = {
  theme,
  margin: { top: 27, right: 27, bottom: 45, left: 54 },
  xScale: { type: 'point' },
  yScale: {
    type: 'linear',
    min: 0,
    max: 'auto',
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
    legendOffset: 36,
    legendPosition: 'middle',
  },
  axisLeft: {
    orient: 'left',
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legendOffset: -49,
    legendPosition: 'middle',
  },
  colors: ({ color }) => color,
  pointSize: 0,
  pointColor: { theme: 'background' },
  pointBorderWidth: 6,
  pointBorderColor: { from: 'serieColor' },
  enablePointLabel: true,
  pointLabelYOffset: -12,
  useMesh: true,
  legends: [],
  enableArea: true,
  enableSlices: 'x',
};

export const calcLineChartSettings = (data, options = {}) => {
  const valuesY = data.lines.flatMap((d) => d.data.map((i) => i.y));
  const minY = 0;
  const maxY = Math.max(...valuesY);

  return {
    ...defaultSettings,
    ...options,
    data: data.lines,
    minY,
    maxY,
    axisBottom: {
      ...defaultSettings.axisBottom,
      legend: data.xAxisLabel,
    },
    axisLeft: {
      ...defaultSettings.axisLeft,
      tickValues: 6,
      legend: data.yAxisLabel,
    },
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
};
