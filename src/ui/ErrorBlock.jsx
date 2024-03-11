import { useNavigate } from 'react-router-dom';
import error404Img from '../assets/error404.svg';
import error500Img from '../assets/error500.svg';
import errorUnknown from '../assets/errorUnknown.svg';
import Button from './Button';

function ErrorBlock({ title, subTitle, statusCode = 404, className = '' }) {
  const navigate = useNavigate();

  let statusImage = null;

  switch (statusCode) {
    case 404:
      statusImage = error404Img;
      break;
    case 500:
      statusImage = error500Img;
      break;
    default:
      statusImage = errorUnknown;
  }

  const handleNavigate = () => navigate(-1);

  return (
    <section className={`flex flex-col items-center text-white ${className}`}>
      <img className=' mb-6 block w-96' src={statusImage} alt={title} />
      <h1 className=' mb-5 text-4xl font-medium'>{title}</h1>
      {subTitle && <p className='mb-5 text-slate-400'>{subTitle}</p>}

      <div className='flex gap-2'>
        <Button to='/' replace>
          На головну
        </Button>
        {statusCode === 404 && (
          <Button onClick={handleNavigate} appearance='outline'>
            Повернутись назад
          </Button>
        )}
      </div>
    </section>
  );
}

export default ErrorBlock;
