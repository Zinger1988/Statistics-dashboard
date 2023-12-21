import Icon from './Icon';

const data = [
  {
    label: 'Головна',
    path: '/',
  },
  {
    label: 'Загальний звіт',
    path: null,
  },
];

function BreadCrumbs({ crumbsArr = [], className = '', ...props }) {
  const crumbs = data.map((item, i, arr) => {
    const crumbsItem =
      item === arr.at(-1) ? (
        <span className='text-slate-500'>{item.label}</span>
      ) : (
        <>
          <a className='transition-colors hover:text-blue-500' href={item.path}>
            {item.label}
          </a>
          <Icon
            id='arrow-triangle-right'
            className='h-2.5 w-2.5 fill-slate-500'
          />
        </>
      );

    return (
      <li className='relative flex items-center gap-3' key={item.label}>
        {crumbsItem}
      </li>
    );
  });

  return (
    <ul className={`flex items-center gap-2 text-xs ${className}`}>{crumbs}</ul>
  );
}

export default BreadCrumbs;
