import { useEffect, useState } from 'react';

import Icon from './Icon';

import { config, sizes } from './infoMessageConfig';

function InfoMessage({
  type = 'info',
  title,
  size = 'small',
  children,
  outlined,
  className = '',
  timeout = 3000,
  onTimeout = null,
}) {
  const [remainingTime, setRmainingTime] = useState(timeout);
  const remainingTimePercentage = Math.round((remainingTime / timeout) * 100);

  useEffect(() => {
    let timer;
    if (onTimeout) {
      timer = setTimeout(onTimeout, timeout);
    }

    return () => clearTimeout(timer);
  }, [timeout, onTimeout]);

  useEffect(() => {
    let timer;
    if (onTimeout) {
      timer = setInterval(() => setRmainingTime((time) => time - 25), 25);
    }

    return () => clearInterval(timer);
  }, [onTimeout]);

  return (
    <article
      className={`relative grid grid-cols-[auto_1fr] items-center overflow-hidden text-white ${
        sizes[size].gap
      } ${outlined && 'rounded-md'} ${config[type].color} ${
        outlined && config[type].outline
      } ${outlined && sizes[size].padding} ${className}`}
    >
      <Icon
        id={config[type].icon}
        className={`${sizes[size].icon} ${config[type].fill}`}
      />
      {title && <h3 className={`${sizes[size].title} font-medium`}>{title}</h3>}
      <div className={`col-start-2 ${sizes[size].description}`}>{children}</div>
      {onTimeout && (
        <div
          style={{ width: `${remainingTimePercentage}%` }}
          className={`absolute bottom-0 left-0 h-0.5 w-full ${config[type].progress}`}
        />
      )}
    </article>
  );
}

export default InfoMessage;
