import Menu from './Menu';

import { useUser } from '../Auth/useUser';

function Sidebar({ className }) {
  const { data } = useUser();

  const classes = `fixed left-0 top-0 z-50 flex h-full w-72 flex-col gap-3 border-r border-slate-700 bg-slate-800 ${className}`;

  return (
    <aside className={classes}>
      <div className='flex items-center gap-4 border-b border-b-slate-700 px-4 py-3.5'>
        <img
          className='h-11 w-11 rounded-full bg-slate-700 object-cover'
          src='/avatar.svg'
          alt='avatar'
        />
        <div>
          <div className='text-sm font-semibold'>{data.user.user_name}</div>
          <div className='text-xs text-slate-400'>F1 Center</div>
        </div>
      </div>

      <Menu className='overflow-y-auto' />
    </aside>
  );
}

export default Sidebar;
