import Header from '../ui/Header';
import Sidebar from '../ui/Sidebar';

function AppLayout({ children }) {
  return (
    <div className='flex h-screen flex-col bg-slate-900 pl-80 text-white'>
      <Header />
      <Sidebar />
      <main className='flex-grow p-6'>{children}</main>
    </div>
  );
}

export default AppLayout;
