import { hex2rgb } from '../../utils/helpers';

export const data = [
  {
    id: 'ГО F1 Center',
    label: 'goF1Center',
    value: 4355,
    color: '#3F90DB',
  },
  {
    id: 'ЦОК 112',
    label: '112',
    value: 445,
    color: '#34cead',
  },
  {
    id: 'ЦОК 2',
    label: '2',
    value: 1311,
    color: '#FA7EC8',
  },
  {
    id: 'ЦОК 21',
    label: '21',
    value: 1445,
    color: '#FC6767',
  },
  {
    id: 'ЦОК 3',
    label: '3',
    value: 883,
    color: '#61d637',
  },
  {
    id: 'ЦОК 33',
    label: '33',
    value: 515,
    color: '#9279F8',
  },
  {
    id: 'ЦОК 48',
    label: '48',
    value: 252,
    color: '#dab636',
  },
];

const defaultSettings = {
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
};

export const calcPieChartSettings = (data, options) => {
  const updatedData = data.map((item) => {
    const updatedItem = { ...item };
    const { r, g, b } = hex2rgb(item.color);
    updatedItem.color = `rgba(${r},${g}, ${b}, .4)`;
    return updatedItem;
  });

  return {
    ...defaultSettings,
    ...options,
    data: updatedData,
  };
};
