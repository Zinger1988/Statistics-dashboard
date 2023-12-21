import AppLayout from '../layouts/AppLayout';
import BreadCrumbs from '../ui/BreadCrumbs';

function IncomeDynamics() {
  return (
    <AppLayout>
      <BreadCrumbs className='mb-4' />
      <article className='rounded-md border border-slate-600 bg-slate-700'>
        <header className='rounded-t-md border-b border-slate-600 bg-slate-800 px-4 py-2'>
          <h2 className='font-semibold'>Title</h2>
        </header>
        <div className='p-2'></div>
      </article>
    </AppLayout>
  );
}

export default IncomeDynamics;
