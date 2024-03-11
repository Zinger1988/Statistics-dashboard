import { InfoMessage, Loader } from '../../ui';
import MenuItem from './MenuItem';

import { useMenu } from './useMenu';

function Menu({ className = '', ...props }) {
  const { data: menuData, isLoading, isError, error } = useMenu();

  if (!isLoading && (isError || menuData?.status !== 'success')) {
    return (
      <InfoMessage title={`Помилка ${error.cause}`} type='error' outlined>
        Будь ласка, спробуйте ще раз трохи пізніше.
      </InfoMessage>
    );
  }

  const renderMenu = (menu, menuLevel = 0) => {
    const sortedMenu = [...menu].sort((a, b) => (a.title > b.title ? 1 : -1));

    let sublistCssClass;
    let listItemCssClass;

    switch (menuLevel) {
      case 1:
        sublistCssClass = 'group-hover/item1:block';
        listItemCssClass =
          'group-hover/item1:cursor-pointer group-hover/item1:border-l-blue-500 group-hover/item1:bg-slate-700';
        break;
      case 2:
        sublistCssClass = 'group-hover/item2:block';
        listItemCssClass =
          'group-hover/item2:cursor-pointer group-hover/item2:border-l-blue-500 group-hover/item2:bg-slate-700';
        break;
      case 3:
        sublistCssClass = 'group-hover/item3:block';
        listItemCssClass =
          'group-hover/item3:cursor-pointer group-hover/item3:border-l-blue-500 group-hover/item3:bg-slate-700';
        break;
      default:
        sublistCssClass = 'group-hover/item0:block';
        listItemCssClass =
          'group-hover/item0:cursor-pointer group-hover/item0:border-l-blue-500 group-hover/item0:bg-slate-700';
    }

    const listItem = sortedMenu.map((item) => {
      const { title, subtitle, code, childs } = item;
      const hasChilds = childs.length > 0;
      const link = item.type === 'rep' ? { to: `reports/${code}` } : {};

      return (
        <li key={code} className={`group/item${menuLevel}`}>
          <MenuItem
            menuLevel={menuLevel}
            title={title}
            subtitle={subtitle}
            hasChilds={hasChilds}
            className={listItemCssClass}
            {...link}
          />
          {hasChilds && (
            <ul
              className={`absolute left-full top-0 hidden h-full w-80 border-l border-r border-slate-700 bg-slate-800 py-4 ${sublistCssClass}`}
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
    <>
      {isLoading ? (
        <Loader className='flex justify-center' />
      ) : (
        <ul className={className} {...props}>
          {renderMenu(menuData.data)}
        </ul>
      )}
    </>
  );
}

export default Menu;
