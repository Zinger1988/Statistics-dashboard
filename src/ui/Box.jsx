function Box({ className, label, children, ...props }) {
  return (
    <article
      className={`rounded-md border border-slate-600 bg-slate-700 ${className} flex flex-col`}
      {...props}
    >
      {label && (
        <header className='rounded-t-md border-b border-slate-600 bg-slate-800 px-4 py-2.5'>
          <h2 className='font-semibold'>{label}</h2>
        </header>
      )}
      <div className='flex-grow p-4'>{children}</div>
    </article>
  );
}

export default Box;
