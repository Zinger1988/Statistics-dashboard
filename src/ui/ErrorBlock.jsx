import { useNavigate } from 'react-router-dom';
import error404Img from '../assets/error404.svg';
import error500Img from '../assets/error500.svg';
import Button from './Button';

function ErrorBlock({ title, subTitle, statusCode = 404 }) {
  const navigate = useNavigate();

  const statusImage = {
    404: error404Img,
    500: error500Img,
  };

  const handleNavigate = () => navigate(-1);

  return (
    <section className='flex flex-col items-center text-white'>
      <img
        className=' mb-6 block w-96'
        src={statusImage[statusCode]}
        alt={title}
      />
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
