import { hex2rgb } from '../../utils/helpers';
import { linearGradientDef } from '@nivo/core';

export function getLegend(chartData) {
  return chartData.map(({ id, color }) => ({ id, color }));
}

export const calcBarChartSettings = (data, settings = {}) => {
  const mappedData = data.map(({ label, data }) => {
    const mapped = data.reduce((acc, cur) => {
      acc[cur.subLabel] = cur.value;
      acc[`${cur.subLabel} color`] = cur.color;
      return acc;
    }, {});

    return {
      label,
      ...mapped,
    };
  });

  const keys = Object.keys(Object.assign({}, ...mappedData)).reduce(
    (acc, item) => {
      item !== 'label' && !item.includes(' color') && acc.push(item);
      return acc;
    },
    [],
  );

  return {
    theme: {
      fontFamily: 'inherit',
      textColor: '#20262B',
      fontSize: 14,
      axis: {
        domain: {
          line: {
            stroke: '#484F57',
          },
        },
        ticks: {
          line: {
            stroke: '#ffffff',
          },
          text: {
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
    },
    maxValue: 'auto',
    minValue: 0,
    indexBy: 'label',
    padding: 0.3,
    innerPadding: 4,
    layout: 'horizontal',
    valueScale: { type: 'linear' },
    indexScale: {
      type: 'band',
      round: true,
    },
    colors: (bar) => bar.data[`${bar.id} color`],
    borderRadius: 4,
    borderColor: {
      from: 'color',
      modifiers: [['darker', 1.6]],
    },
    axisTop: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
    },
    axisRight: null,
    axisBottom: null,
    axisLeft: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendPosition: 'middle',
      legendOffset: -40,
    },
    enableGridX: true,
    labelSkipWidth: 12,
    labelSkipHeight: 12,
    role: 'application',
    margin: { top: 20, right: 10, bottom: 0, left: 80 },
    data: mappedData,
    keys,
    ...settings,
  };
};

export const calcPieChartSettings = (data, options) => {
  const updatedData = data.map((item) => {
    const updatedItem = { ...item };
    const { r, g, b } = hex2rgb(item.color);
    updatedItem.color = `rgba(${r},${g}, ${b}, .4)`;
    return updatedItem;
  });

  return {
    margin: { top: 30, right: 30, bottom: 30, left: 30 },
    innerRadius: 0.5,
    padAngle: 2,
    cornerRadius: 0,
    activeOuterRadiusOffset: 16,
    enableArcLinkLabels: false,
    arcLinkLabelsSkipAngle: 10,
    arcLinkLabelsTextColor: '#333333',
    arcLinkLabelsThickness: 2,
    arcLinkLabelsColor: { from: 'color' },
    arcLabelsSkipAngle: 10,
    borderWidth: 2,
    borderColor: {
      from: 'color',
      modifiers: [['opacity', 1]],
    },
    arcLabelsTextColor: {
      from: 'color',
      modifiers: [
        ['brighter', 7],
        ['opacity', 1],
      ],
    },
    colors: { datum: 'data.color' },
    theme: {
      tooltip: {
        container: {
          background: '#20262B',
          color: '#ffffff',
          fontSize: 13,
          boxShadow: '0 4px 12px rgba(0,0,0,.15)',
          borderRadius: 4,
        },
      },
      labels: {
        text: {
          fontFamily: 'inherit',
          fontSize: 14,
          fontWeight: 500,
        },
      },
    },
    ...options,
    data: updatedData,
  };
};

export const calcLineChartSettings = (data, options = {}) => {
  const valuesY = data.lines.flatMap((d) => d.data.map((i) => i.y));
  const minY = 0;
  const maxY = Math.max(...valuesY);

  return {
    theme: {
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
    },
    margin: { top: 27, right: 27, bottom: 45, left: 54 },
    xScale: { type: 'point' },
    yScale: {
      type: 'linear',
      min: 0,
      max: 'auto',
      reverse: false,
    },
    curve: 'linear',
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
    data: data.lines,
    minY,
    maxY,
    axisRight: null,
    axisTop: null,
    axisBottom: {
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legendOffset: 36,
      legendPosition: 'middle',
      legend: data.xAxisLabel,
    },
    axisLeft: {
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legendOffset: -49,
      legendPosition: 'middle',
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
    ...options,
  };
};
