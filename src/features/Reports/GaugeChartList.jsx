import { Box, GaugeChart } from '../../ui';

function GaugeChartList({ data, isLoading, className = '' }) {
  const content =
    data.length > 0 ? (
      <Box className={className}>
        {data.map((data) => (
          <GaugeChart
            key={data.id}
            data={data}
            className='mx-auto mb-8 last:mb-0'
          />
        ))}
      </Box>
    ) : null;

  return content;
}

export default GaugeChartList;
