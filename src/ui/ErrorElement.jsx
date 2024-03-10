import { useEffect } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

import ErrorBlock from './ErrorBlock';
import { useHeader } from '../context/HeaderContext';

function ErrorElement() {
  const { status } = useRouteError();
  const { setHeader, setSubHeader } = useHeader();
  const navigate = useNavigate();

  const statusMap = {
    404: {
      title: 'Сторінку не знайдено',
      subTitle: 'Можливо, вона не існує або була видалена.',
      statusCode: 404,
    },
    500: {
      title: 'Внутрішня помилка сервера',
      subTitle:
        'Не вдалося отримати дані, будь ласка спробуйте ще раз пізніше.',
      statusCode: 404,
    },
    unknownError: {
      title: 'Щось пішло не так...',
      subTitle: 'Ми намагаємося вирішити проблему якомога швидше.',
      statusCode: 500,
    },
  };

  const errorInfo = statusMap[status] ?? statusMap.unknownError;

  useEffect(() => {
    setHeader(errorInfo.title);
    setSubHeader(errorInfo.subTitle);
  }, [setHeader, setSubHeader, errorInfo.title, errorInfo.subTitle]);

  if (status === 403) {
    navigate('/signin');
  }

  return (
    <section className='absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-slate-900'>
      <ErrorBlock {...errorInfo} />
    </section>
  );
}

export default ErrorElement;
