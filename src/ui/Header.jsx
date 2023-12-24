import { useHeader } from '../context/HeaderContext';

function Header() {
  const { header, subHeader } = useHeader();

  return (
    <header className='col-span-2 flex min-h-[73px] flex-col justify-center border-b border-slate-700 bg-slate-800 px-5 py-3'>
      <h1 className=' text-xl font-semibold'>{header}</h1>
      <div className='text-xs text-slate-500'>{subHeader}</div>
    </header>
  );
}

export default Header;
