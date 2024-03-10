import Icon from './Icon';

function InfoMessage({ type, title, children }) {
  const iconMap = {
    error: {
      id: 'warning-circled',
      cssClasses: 'fill-red-500',
    },
    warning: {
      id: 'warning-triangle',
      cssClasses: 'fill-orange-500',
    },
    success: {
      id: 'check-circled',
      cssClasses: 'fill-green-500',
    },
    info: {
      id: 'check-circled',
      cssClasses: 'fill-blue-500',
    },
  };

  const iconCssClasses = `w-5 h-5 ${iconMap[type].cssClasses}`;

  return (
    <article className='grid grid-cols-[auto_1fr] items-center gap-x-2 text-white'>
      <Icon id={iconMap[type].id} className={iconCssClasses} />
      {title && <h3 className=' text-sm font-medium'>{title}</h3>}
      <div className='col-start-2 text-[.825rem]'>{children}</div>
    </article>
  );
}

export default InfoMessage;
