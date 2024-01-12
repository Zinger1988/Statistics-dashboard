function StatsTable({ stats, className = '' }) {
  return (
    <div
      className={`grid grid-cols-3 overflow-hidden rounded-[4px] border border-slate-600 bg-slate-800 ${className}`}
    >
      {stats.map((item) => (
        <div
          key={item.label}
          className='flex items-baseline justify-between gap-2 p-3 px-4 text-sm shadow-[1px_1px_0_0_theme(colors.slate.700)]'
        >
          <span className='text-slate-500'>{item.label}</span>
          <span className='font-medium'>{item.value || '-'}</span>
        </div>
      ))}
    </div>
  );
}

export default StatsTable;
