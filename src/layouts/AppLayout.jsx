import { Outlet } from 'react-router-dom';

import { Header } from '../ui';
import Sidebar from '../features/Sidebar/Sidebar';

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
