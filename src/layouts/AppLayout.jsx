import { Outlet } from 'react-router-dom';

import { Header, Sidebar, BreadCrumbs } from '../ui';

function AppLayout() {
  return (
    <div className='flex min-h-screen flex-col overflow-x-hidden bg-slate-900 pl-80 text-white'>
      <Header />
      <Sidebar />
      <main className='flex flex-grow flex-col p-6'>
        <BreadCrumbs className='mb-4' />
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
