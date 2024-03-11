import ErrorBlock from '../ui/ErrorBlock';

function NotFoundPage() {
  return (
    <div className=' flex h-screen w-full items-center justify-center bg-slate-900'>
      <ErrorBlock
        statusCode={404}
        title='Сторінку не знайдено'
        subTitle='Можливо, вона була видалена або не існує'
      />
    </div>
  );
}

export default NotFoundPage;
