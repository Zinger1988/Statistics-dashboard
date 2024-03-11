import { Outlet } from 'react-router-dom';

import Header from '../features/AppLayout/Header';
import Sidebar from '../features/AppLayout/Sidebar';

function AppLayout() {
  return (
    <div className='flex min-h-screen flex-col overflow-x-hidden bg-slate-900 pl-72 text-white'>
      <Header />
      <Sidebar />
      <main className='relative flex flex-grow flex-col p-6'>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
