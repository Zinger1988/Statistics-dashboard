function Legend({ data, className, ...props }) {
  const sorderData = [...data].sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }

    return 0;
  });

  return (
    <ul className={`flex flex-wrap gap-7 gap-y-2 ${className}`}>
      {sorderData.map(({ id, color, value = null }) => (
        <li key={id} className='flex items-center gap-3 text-xs'>
          <span
            style={{ backgroundColor: color }}
            className={`block h-3 w-3`}
          ></span>
          <span>
            {id} {value && `(${value})`}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Legend;
