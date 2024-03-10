function Input({ className = '', register = {}, ...props }) {
  return (
    <input
      {...register}
      {...props}
      className={`block min-h-[38px] w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-1 text-sm text-white outline-none placeholder:text-slate-600 hover:border-blue-500 hover:ring-[3px] hover:ring-blue-500/40 focus:border-blue-500 focus:ring-[3px] focus:ring-blue-500/40 ${className}`}
    />
  );
}

export default Input;
