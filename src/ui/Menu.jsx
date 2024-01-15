import MenuItem from './MenuItem';

const data = [
  {
    title: 'Lenovo Depot',
    subtitle: 'Отчеты по устройствам Lenovo',
    code: '1',
    type: 'dir',
    childs: [
      {
        title: 'Детализация по флагам',
        subtitle: 'Предоставляет детализацию',
        code: '2',
        type: 'rep',
        childs: [],
      },
      {
        title: 'Долги по возврату запчастей',
        subtitle: 'Предоставляет детализацию',
        code: '3',
        type: 'rep',
        childs: [],
      },
      {
        title: 'Индивидуальный отчет инженера',
        subtitle: 'Предоставляет детализацию',
        code: '4',
        type: 'rep',
        childs: [],
      },
      {
        title: 'Инженеры',
        subtitle: 'Предоставляет детализацию',
        code: '5',
        type: 'rep',
        childs: [],
      },
      {
        title: 'Ожидаемые поступления',
        subtitle: 'Предоставляет детализацию',
        code: '6',
        type: 'rep',
        childs: [],
      },
      {
        title: 'Параметры работы',
        subtitle: 'Предоставляет детализацию',
        code: '7',
        type: 'rep',
        childs: [],
      },
    ],
  },
  {
    title: 'Динамика обращений', //  ноутбуки, планшеты
    subtitle: 'Отчеты по устройствам Lenovo',
    code: '9',
    type: 'rep',
    childs: [],
  },
  {
    title: 'Общий отчет',
    subtitle: 'Отчеты по устройствам Lenovo',
    code: '10',
    type: 'rep',
    childs: [],
  },
];

const linkMap = {
  5: '/engineers',
  9: '/incomeDynamics',
  10: '/',
};

function Menu({ className = '', ...props }) {
  const renderMenu = (menu, menuLevel = 0) => {
    const sortedMenu = [...menu].sort((a, b) => (a.title > b.title ? 1 : -1));

    let sublistGroupClass;
    let listItemGroupClass;

    switch (menuLevel) {
      case 1:
        sublistGroupClass = 'group-hover/item1:block';
        listItemGroupClass =
          'group-hover/item1:cursor-pointer group-hover/item1:border-l-blue-500 group-hover/item1:bg-slate-700';
        break;
      case 2:
        sublistGroupClass = 'group-hover/item2:block';
        listItemGroupClass =
          'group-hover/item2:cursor-pointer group-hover/item2:border-l-blue-500 group-hover/item2:bg-slate-700';
        break;
      case 3:
        sublistGroupClass = 'group-hover/item3:block';
        listItemGroupClass =
          'group-hover/item3:cursor-pointer group-hover/item3:border-l-blue-500 group-hover/item3:bg-slate-700';
        break;
      default:
        sublistGroupClass = 'group-hover/item0:block';
        listItemGroupClass =
          'group-hover/item0:cursor-pointer group-hover/item0:border-l-blue-500 group-hover/item0:bg-slate-700';
    }

    const listItem = sortedMenu.map((item) => {
      const { title, subtitle, code, childs } = item;
      const hasChilds = childs.length > 0;
      const link = linkMap[code] ? { to: linkMap[code] } : {};

      return (
        <li key={code} className={`group/item${menuLevel}`}>
          <MenuItem
            menuLevel={menuLevel}
            title={title}
            subtitle={subtitle}
            hasChilds={hasChilds}
            className={listItemGroupClass}
            {...link}
          />
          {hasChilds && (
            <ul
              className={`absolute left-full top-0 hidden h-full w-80 border-l border-r border-slate-700 bg-slate-800 py-4 ${sublistGroupClass}`}
            >
              {renderMenu(childs, menuLevel + 1)}
            </ul>
          )}
        </li>
      );
    });

    return listItem;
  };

  return (
    <ul className={className} {...props}>
      {renderMenu(data)}
    </ul>
  );
}

export default Menu;
