export const incomeDynamicsMock = [
  {
    id: 'producers',
    type: 'header',
    title: 'Общий отчет',
    subtitle: 'за период с 01.2023 по 12.2023, по всем производителям',
  },
  {
    id: 'producers',
    type: 'select',
    multi: false,
    title: 'Производители',
    subtitle: '',
    values: [
      {
        value: '0',
        label: 'Все производители',
        selected: true,
      },
      {
        value: '280',
        label: 'Acer',
        selected: false,
      },
      {
        value: '480',
        label: 'Alldocube',
        selected: false,
      },
      {
        value: '384',
        label: 'AORUS (Gigabyte)',
        selected: false,
      },
      {
        value: '228',
        label: 'Apple',
        selected: false,
      },
      {
        value: '368',
        label: 'Archos',
        selected: false,
      },
      {
        value: '114',
        label: 'ASUS',
        selected: false,
      },
      {
        value: '468',
        label: 'Blackview',
        selected: false,
      },
      {
        value: '482',
        label: 'Blackview TS',
        selected: false,
      },
      {
        value: '473',
        label: 'Chuwi',
        selected: false,
      },
      {
        value: '180',
        label: 'Dell',
        selected: false,
      },
      {
        value: '458',
        label: 'Denon',
        selected: false,
      },
      {
        value: '463',
        label: 'Doogee',
        selected: false,
      },
      {
        value: '163',
        label: 'Dynabook (Toshiba)',
        selected: false,
      },
      {
        value: '472',
        label: 'Epson',
        selected: false,
      },
      {
        value: '332',
        label: 'Fujitsu',
        selected: false,
      },
      {
        value: '433',
        label: 'G-Style',
        selected: false,
      },
      {
        value: '18',
        label: 'HP',
        selected: false,
      },
      {
        value: '234',
        label: 'HTC',
        selected: false,
      },
      {
        value: '313',
        label: 'Huawei',
        selected: false,
      },
      {
        value: '471',
        label: 'Infinix',
        selected: false,
      },
      {
        value: '388',
        label: 'JBL',
        selected: false,
      },
      {
        value: '378',
        label: 'Lenovo',
        selected: false,
      },
      {
        value: '27',
        label: 'LG',
        selected: false,
      },
      {
        value: '30',
        label: 'Logitech',
        selected: false,
      },
      {
        value: '451',
        label: 'Marantz',
        selected: false,
      },
      {
        value: '446',
        label: 'Meizu',
        selected: false,
      },
      {
        value: '203',
        label: 'Microsoft',
        selected: false,
      },
      {
        value: '439',
        label: 'Motorola',
        selected: false,
      },
      {
        value: '381',
        label: 'MSI',
        selected: false,
      },
      {
        value: '456',
        label: 'MYTAB',
        selected: false,
      },
      {
        value: '447',
        label: 'Nomi',
        selected: false,
      },
      {
        value: '481',
        label: 'OnePlus',
        selected: false,
      },
      {
        value: '452',
        label: 'ONKYO',
        selected: false,
      },
      {
        value: '470',
        label: 'OPPO',
        selected: false,
      },
      {
        value: '385',
        label: 'Optoma',
        selected: false,
      },
      {
        value: '477',
        label: 'Oscal',
        selected: false,
      },
      {
        value: '124',
        label: 'Samsung',
        selected: false,
      },
      {
        value: '239',
        label: 'Seagate',
        selected: false,
      },
      {
        value: '483',
        label: 'SINKO',
        selected: false,
      },
      {
        value: '217',
        label: 'SONY',
        selected: false,
      },
      {
        value: '476',
        label: 'Teclast',
        selected: false,
      },
      {
        value: '462',
        label: 'Tecno',
        selected: false,
      },
      {
        value: '190',
        label: 'Transcend',
        selected: false,
      },
      {
        value: '486',
        label: 'Xiamen',
        selected: false,
      },
      {
        value: '440',
        label: 'Xiaomi',
        selected: false,
      },
      {
        value: '347',
        label: 'YAMAHA',
        selected: false,
      },
      {
        value: '474',
        label: 'YEPO',
        selected: false,
      },
      {
        value: '8',
        label: 'Другие',
        selected: false,
      },
    ],
  },
  {
    id: 'classifiers',
    type: 'select',
    multi: true,
    title: 'Классы',
    subtitle: '',
    values: [
      {
        value: '2150',
        label: 'Видео',
        selected: true,
      },
      {
        value: '2155',
        label: 'Ноутбуки',
        selected: true,
      },
      {
        value: '2200',
        label: 'Планшеты',
        selected: false,
      },
      {
        value: '2157',
        label: 'Смартфоны',
        selected: false,
      },
      {
        value: '2183',
        label: 'Мониторы',
        selected: false,
      },
      {
        value: '2192',
        label: 'Прочая периферия',
        selected: false,
      },
      {
        value: '2196',
        label: 'ПК и моноблоки',
        selected: false,
      },
    ],
  },
  {
    id: 'graph-1',
    type: 'graph',
    title: 'Динамика поступления, общий',
    subtitle: '',
    xAxisLabel: 'Период',
    yAxisLabel: 'Количество',
    lines: [
      {
        id: 'Гарантийный ремонт, Киев',
        color: '#5FD237',
        data: [
          {
            x: 'янв / 4',
            y: 650,
          },
          {
            x: 'янв / 5',
            y: 798,
          },
          {
            x: 'янв / 6',
            y: 673,
          },
          {
            x: 'фев / 7',
            y: 754,
          },
          {
            x: 'фев / 8',
            y: 763,
          },
          {
            x: 'фев / 9',
            y: 753,
          },
          {
            x: 'фев / 10',
            y: 543,
          },
          {
            x: 'мар / 11',
            y: 673,
          },
          {
            x: 'мар / 12',
            y: 618,
          },
          {
            x: 'мар / 13',
            y: 643,
          },
          {
            x: 'мар / 14',
            y: 648,
          },
          {
            x: 'апр / 15',
            y: 554,
          },
          {
            x: 'апр / 16',
            y: 586,
          },
          {
            x: 'апр / 17',
            y: 474,
          },
        ],
      },
      {
        id: 'Закрытые',
        color: '#BE53F7',
        data: [
          {
            x: 'янв / 4',
            y: 736,
          },
          {
            x: 'янв / 5',
            y: 632,
          },
          {
            x: 'янв / 6',
            y: 752,
          },
          {
            x: 'фев / 7',
            y: 686,
          },
          {
            x: 'фев / 8',
            y: 763,
          },
          {
            x: 'фев / 9',
            y: 687,
          },
          {
            x: 'фев / 10',
            y: 599,
          },
          {
            x: 'мар / 11',
            y: 595,
          },
          {
            x: 'мар / 12',
            y: 584,
          },
          {
            x: 'мар / 13',
            y: 599,
          },
          {
            x: 'мар / 14',
            y: 599,
          },
          {
            x: 'апр / 15',
            y: 473,
          },
          {
            x: 'апр / 16',
            y: 630,
          },
          {
            x: 'апр / 17',
            y: 361,
          },
        ],
      },
      {
        id: 'Розница (поступления)',
        color: '#F9D144',
        data: [
          {
            x: 'янв / 4',
            y: 451,
          },
          {
            x: 'янв / 5',
            y: 442,
          },
          {
            x: 'янв / 6',
            y: 475,
          },
          {
            x: 'фев / 7',
            y: 378,
          },
          {
            x: 'фев / 8',
            y: 449,
          },
          {
            x: 'фев / 9',
            y: 366,
          },
          {
            x: 'фев / 10',
            y: 378,
          },
          {
            x: 'мар / 11',
            y: 390,
          },
          {
            x: 'мар / 12',
            y: 378,
          },
          {
            x: 'мар / 13',
            y: 410,
          },
          {
            x: 'мар / 14',
            y: 404,
          },
          {
            x: 'апр / 15',
            y: 355,
          },
          {
            x: 'апр / 16',
            y: 406,
          },
          {
            x: 'апр / 17',
            y: 210,
          },
        ],
      },
      {
        id: 'Поступления',
        color: '#FF684A',
        data: [
          {
            x: 'янв / 4',
            y: 285,
          },
          {
            x: 'янв / 5',
            y: 190,
          },
          {
            x: 'янв / 6',
            y: 277,
          },
          {
            x: 'фев / 7',
            y: 308,
          },
          {
            x: 'фев / 8',
            y: 314,
          },
          {
            x: 'фев / 9',
            y: 221,
          },
          {
            x: 'фев / 10',
            y: 221,
          },
          {
            x: 'мар / 11',
            y: 211,
          },
          {
            x: 'мар / 12',
            y: 240,
          },
          {
            x: 'мар / 13',
            y: 243,
          },
          {
            x: 'мар / 14',
            y: 211,
          },
          {
            x: 'апр / 15',
            y: 169,
          },
          {
            x: 'апр / 16',
            y: 199,
          },
          {
            x: 'апр / 17',
            y: 151,
          },
        ],
      },
    ],
  },
  {
    id: 'graph-2',
    type: 'graph',
    title: 'Динамика завершенных ремонтов (Киев и регионы)',
    subtitle: '',
    xAxisLabel: 'Период',
    yAxisLabel: 'Количество',
    lines: [
      {
        id: 'Гарантийный ремонт, Киев',
        color: '#5FD237',
        data: [
          {
            x: 'янв, 2023',
            y: 1000,
          },
          {
            x: 'фев, 2023',
            y: 1180,
          },
          {
            x: 'мар, 2023',
            y: 1279,
          },
          {
            x: 'апр, 2023',
            y: 1381,
          },
          {
            x: 'май, 2023',
            y: 1610,
          },
          {
            x: 'июн, 2023',
            y: 1548,
          },
          {
            x: 'июл, 2023',
            y: 1602,
          },
          {
            x: 'авг, 2023',
            y: 1158,
          },
          {
            x: 'сен, 2023',
            y: 1264,
          },
          {
            x: 'окт, 2023',
            y: 1375,
          },
          {
            x: 'ноя, 2023',
            y: 1368,
          },
          {
            x: 'дек, 2023',
            y: 1003,
          },
        ],
      },
      {
        id: 'Гарантийный ремонт, регионы',
        color: '#FF684A',
        data: [
          {
            x: 'янв, 2023',
            y: 24,
          },
          {
            x: 'фев, 2023',
            y: 45,
          },
          {
            x: 'мар, 2023',
            y: 25,
          },
          {
            x: 'апр, 2023',
            y: 40,
          },
          {
            x: 'май, 2023',
            y: 44,
          },
          {
            x: 'июн, 2023',
            y: 39,
          },
          {
            x: 'июл, 2023',
            y: 30,
          },
          {
            x: 'авг, 2023',
            y: 38,
          },
          {
            x: 'сен, 2023',
            y: 36,
          },
          {
            x: 'окт, 2023',
            y: 42,
          },
          {
            x: 'ноя, 2023',
            y: 37,
          },
          {
            x: 'дек, 2023',
            y: 41,
          },
        ],
      },
    ],
  },
  {
    id: 'scalar-1',
    type: 'scalar',
    title: 'Услуги ДиНР',
    subtitle: '',
    ranges: [
      {
        color: '#FF684A',
        min: 0,
        max: 8000,
      },
      {
        color: '#F9D144',
        min: 8001,
        max: 17000,
      },
      {
        color: '#5FD237',
        min: 17001,
        max: 20000,
      },
    ],
    value: 11846.55,
  },
  {
    id: 'scalar-2',
    type: 'scalar',
    title: 'Продажа з/ч для негарантийных ремонтов',
    subtitle: '',
    ranges: [
      {
        color: '#FF684A',
        min: 0,
        max: 12000,
      },
      {
        color: '#F9D144',
        min: 12001,
        max: 20000,
      },
      {
        color: '#5FD237',
        min: 20001,
        max: 25000,
      },
    ],
    value: 22083.51,
  },
  {
    id: 'scalar-3',
    type: 'scalar',
    title: 'Услуги по выездным ремонтам',
    subtitle: '',
    ranges: [
      {
        color: '#FF684A',
        min: 0,
        max: 1000,
      },
      {
        color: '#F9D144',
        min: 1001,
        max: 1700,
      },
      {
        color: '#5FD237',
        min: 1701,
        max: 2000,
      },
    ],
    value: 489.92,
  },
];
