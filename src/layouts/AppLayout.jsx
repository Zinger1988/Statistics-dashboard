import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../features/AppLayout/Header';
import Sidebar from '../features/AppLayout/Sidebar';

function AppLayout() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleHideSidebar = () => {
    setShowSidebar((state) => !state);
  };

  const wrapperClasses = `flex min-h-screen flex-col overflow-x-hidden bg-slate-900 ${
    showSidebar ? 'pl-72' : ''
  } text-white`;
  const sidebarClasses = showSidebar ? '' : '-translate-x-full';

  return (
    <div className={wrapperClasses}>
      <Header onSbBtnClick={handleHideSidebar} sbState={showSidebar} />
      <Sidebar className={sidebarClasses} />
      <main className='relative flex flex-grow flex-col p-6'>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
