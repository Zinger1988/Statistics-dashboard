import EngineerCard from './EngineerCard';
import { Box, Legend } from '../../ui';

function ReportEngineers({ list }) {
  const { data } = list;

  const getLegend = (data) => {
    return data
      .map(({ data }) =>
        data.map(({ subLabel, color }) => ({ id: subLabel, color })),
      )
      .flat();
  };

  // Calculating biggest chart bar value to build charts with equal relative sizes
  const maxChartValue = data
    .map((item) => item.chart.lines)
    .map((line) => line.map((item) => item.data))
    .flat()
    .map((item) =>
      item.reduce((acc, cur) => {
        acc += cur.value;
        return acc;
      }, 0),
    )
    .reduce((acc, cur) => (acc > cur ? acc : cur), 0);

  return (
    <Box label='Сотрудники - флаги'>
      <Legend data={getLegend(data[0].chart.lines)} className='mb-8' />
      {data.map(({ id, name, stats, chart }) => (
        <EngineerCard
          key={id}
          id={id}
          name={name}
          stats={stats}
          maxChartValue={maxChartValue}
          chartSettings={chart.lines}
          className='mb-6 border-b border-slate-600 pb-6 last:m-0 last:border-none last:p-0'
        />
      ))}
    </Box>
  );
}

export default ReportEngineers;
