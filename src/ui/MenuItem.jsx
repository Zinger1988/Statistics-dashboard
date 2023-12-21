import Icon from './Icon';

function MenuItem({
  hasChilds,
  title,
  subtitle,
  menuLevel,
  className = '',
  ...props
}) {
  return (
    <div
      title={subtitle}
      className={`flex items-center gap-5 border-l-2 border-transparent px-5 py-3 transition-colors duration-300 hover:cursor-pointer hover:border-l-blue-500 hover:bg-slate-700`}
    >
      <Icon
        id={hasChilds > 0 ? 'folder' : 'file'}
        className={`h-5 w-5 flex-shrink-0 fill-blue-500`}
      />
      <div className='flex-grow text-sm'>{title}</div>
      {hasChilds > 0 && (
        <Icon
          id='arrow-triangle-right'
          className={`h-3 w-3 fill-slate-600 group-hover/item${menuLevel}:fill-white transition-colors duration-300`}
        />
      )}
    </div>
  );
}

export default MenuItem;
