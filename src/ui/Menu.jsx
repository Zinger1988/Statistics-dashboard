import Icon from './Icon';
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

function Menu({ className = '', ...props }) {
  const renderMenu = (menu, menuLevel = 0) => {
    const sortedMenu = [...menu].sort((a, b) => (a.title > b.title ? 1 : -1));

    const listItem = sortedMenu.map((item) => {
      const hasChilds = item.childs.length > 0;

      return (
        <li key={item.code} className={`group/item${menuLevel}`}>
          <MenuItem
            menuLevel={menuLevel}
            title={item.title}
            subtitle={item.subtitle}
            hasChilds={hasChilds}
          />
          {hasChilds > 0 && (
            <ul
              className={`absolute left-full top-0 hidden h-full w-80 border-l border-r border-slate-700 bg-slate-800 py-4 group-hover/item${menuLevel}:block`}
            >
              {renderMenu(item.childs, menuLevel + 1)}
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
