import Icon from './Icon';

function GaugeChart({ data, className, ...props }) {
  //Getting max possible value
  const maxValue = data.ranges.reduce((acc, cur) => Math.max(acc, cur.max), 0);
  const step = maxValue / 180;

  //Convert values to CSS conic cradient value
  const CSSValue = data.ranges.reduce((acc, cur) => {
    return `${acc ? `${acc} ,` : acc} ${cur.color} ${Math.floor(
      cur.min / step + 8,
    )}deg ${Math.floor(cur.max / step - 8)}deg`;
  }, '');

  //Get active status index for selection of proper icon and color
  const statusIndex = data.ranges.findIndex((item) => {
    return item.max >= data.value && item.min <= data.value;
  });

  const statusIconsIdMap = [
    'warning-triangle',
    'warning-circled',
    'check-circled',
  ];

  return (
    <div
      className={`flex max-w-[200px] flex-col items-center gap-6 ${className}`}
    >
      <div
        style={{
          background: `conic-gradient( from -90deg at 50% 100%, ${CSSValue})`,
        }}
        className='before:content[""] relative flex aspect-[2/1] w-full flex-col items-center justify-end rounded-t-full before:absolute before:bottom-0 before:left-[3px] before:h-[calc(100%-3px)] before:w-[calc(100%-6px)] before:rounded-tl-full before:rounded-tr-full before:bg-slate-700'
        {...props}
      >
        <Icon
          id={statusIconsIdMap[statusIndex]}
          style={{ fill: data.ranges[statusIndex].color }}
          className={`relative z-10 h-5 w-5`}
        />
        <div className='relative z-10 max-w-[calc(100%-30px)] text-center text-lg font-medium'>
          {data.value}
        </div>
        <div
          style={{ transform: `rotate(${data.value / step}deg)` }}
          className={`after:content[""] after:border-top-0 absolute bottom-0 left-0 z-10 w-1/2 origin-right before:absolute after:absolute after:left-1 after:top-0 after:-translate-y-1/2 after:border-[8px] after:border-l-0 after:border-r-[12px] after:border-transparent after:border-r-slate-400`}
        ></div>
        <div className='absolute right-full top-[calc(100%+4px)] translate-x-1/2 text-xs text-slate-500'>
          0
        </div>
        <div className='absolute right-0 top-[calc(100%+4px)] translate-x-1/2 text-xs text-slate-500'>
          {maxValue}
        </div>
      </div>
      <div className='text-center text-sm font-medium'>{data.title}</div>
    </div>
  );
}

export default GaugeChart;
