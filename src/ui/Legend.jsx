function Legend({ data, className, ...props }) {
  return (
    <ul className={`flex flex-wrap gap-7 gap-y-2 ${className}`}>
      {data.map(({ id, color }) => (
        <li key={id} className='flex items-center gap-3 text-xs'>
          <span
            style={{ backgroundColor: color }}
            className={`block h-3 w-3`}
          ></span>
          <span>{id}</span>
        </li>
      ))}
    </ul>
  );
}

export default Legend;
