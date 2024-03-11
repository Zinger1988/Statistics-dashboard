import { Button } from '../../ui';

import { useSignOut } from '../Auth/useSignOut';
import { useHeader } from '../../context/HeaderContext';

function Header() {
  const { header, subHeader } = useHeader();
  const { signOut, isLoading, error } = useSignOut();

  return (
    <header className='col-span-2 flex min-h-[73px] items-center justify-between border-b border-slate-700 bg-slate-800 px-6 py-3'>
      <div className='flex flex-col gap-1'>
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
