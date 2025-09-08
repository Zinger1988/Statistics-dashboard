function Legend({ data, className, onClick, hiddenLegends = [], ...props }) {
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
    <ul
      className={`flex flex-wrap gap-y-1.5 ${
        onClick ? 'gap-x-1.5' : 'gap-x-5'
      } ${className}`}
    >
      {sorderData.map(({ id, color, value = null }) => {
        const baseCssClass =
          'flex items-center gap-2 rounded-[.3rem] text-xs border border-transparent cursor-default';
        const interactCssClass = onClick
          ? 'px-3 py-1.5 transition-all hover:ring-[3px] hover:ring-white/10 cursor-pointer'
          : '';
        const stateCssClass = !hiddenLegends.includes(id)
          ? 'border-slate-500 bg-slate-500/40 hover:border-slate-400'
          : 'bg-slate-950/10';

        const cssClass = `${baseCssClass} ${interactCssClass} ${
          onClick ? stateCssClass : ''
        }`;

        return (
          <li
            key={id}
            className={cssClass}
            role='button'
            onClick={() => onClick?.(id)}
          >
            <span
              style={{ backgroundColor: color }}
              className={`block h-3 w-3`}
            ></span>
            <span>
              {id} {value && `(${value})`}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default Legend;
