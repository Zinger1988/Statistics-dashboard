export const theme = {
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
};

export const defaultSettings = {
  theme,
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
};

export const calcBarChartSettings = (data) => {
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

  return { ...defaultSettings, data: mappedData, keys };
};
