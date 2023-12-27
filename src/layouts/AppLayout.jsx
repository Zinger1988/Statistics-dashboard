import { Outlet } from 'react-router-dom';

import Header from '../ui/Header';
import Sidebar from '../ui/Sidebar';
import BreadCrumbs from '../ui/BreadCrumbs';

function AppLayout() {
  return (
    <div className='flex min-h-screen flex-col bg-slate-900 pl-80 text-white'>
      <Header />
      <Sidebar />
      <main className='flex-grow p-6'>
        <BreadCrumbs className='mb-4' />
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
