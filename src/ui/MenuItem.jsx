import Icon from './Icon';
import { Link } from 'react-router-dom';

function MenuItem({
  hasChilds,
  title,
  subtitle,
  menuLevel,
  className = '',
  ...props
}) {
  const MenuElement = props.to ? Link : 'div';

  return (
    <MenuElement
      title={subtitle}
      className={`flex items-center gap-5 border-l-2 border-transparent px-5 py-3 transition-colors duration-300 ${className}`}
      {...props}
    >
      <Icon
        id={hasChilds ? 'folder' : 'file'}
        className={`h-5 w-5 flex-shrink-0 fill-blue-500`}
      />
      <div className='flex-grow text-sm'>{title}</div>
      {hasChilds && (
        <Icon
          id='arrow-triangle-right'
          className={`h-3 w-3 fill-slate-600 group-hover/item${menuLevel}:fill-white transition-colors duration-300`}
        />
      )}
    </MenuElement>
  );
}

export default MenuItem;
