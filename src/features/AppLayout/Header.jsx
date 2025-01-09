import { Button, Icon } from '../../ui';

import { useLogout } from '../Auth/useLogout';
import { useHeader } from '../../context/HeaderContext';

function Header({ onSbBtnClick, sbState }) {
  const { header, subHeader } = useHeader();
  const { signOut, isLoading, error } = useLogout();

  return (
    <header className='col-span-2 flex min-h-[73px] items-center gap-6 border-b border-slate-700 bg-slate-800 px-6 py-3'>
      <Button onClick={onSbBtnClick} appearance='outline'>
        <Icon className='h-6 w-6 fill-white' id={sbState ? 'close' : 'menu'} />
      </Button>
      <div className='flex flex-1 flex-col gap-1'>
        <h1 className=' text-xl font-semibold'>{header}</h1>
        <div className='text-xs text-slate-500'>{subHeader}</div>
      </div>
      <div className='flex gap-2'>
        <Button onClick={signOut} disabled={isLoading}>
          Вийти
        </Button>
      </div>
    </header>
  );
}

export default Header;
