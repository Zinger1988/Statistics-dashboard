import EngineerCard from './EngineerCard';
import { Box, Legend } from '../../ui';

function ReportEngineers({ list }) {
  const { data } = list;

  const getLegend = (data) => {
    const legendFlatData = data.map((item) => {
      return item.chart.lines.map(({ data }) => data);
    });

    const legendData = legendFlatData
      .flat()
      .flat()
      .reduce((acc, cur) => {
        const { subLabel, color, value } = cur;

        const foundedParam = acc.find((param) => param.id === subLabel);

        if (foundedParam) {
          foundedParam.value += value;
        } else {
          acc.push({ id: subLabel, color, value });
        }

        return acc;
      }, []);

    return legendData;
  };

  getLegend(data);

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
    <Box>
      <Legend data={getLegend(data)} className='mb-3' />
      {data.map(({ id, name, stats, chart }) => (
        <EngineerCard
          key={id}
          id={id}
          name={name}
          stats={stats}
          maxChartValue={maxChartValue}
          chartSettings={chart.lines}
          className='mb-4 border-b border-slate-600 pb-4 last:m-0 last:border-none last:p-0'
        />
      ))}
    </Box>
  );
}

export default ReportEngineers;
