import LineChartList from './LineChartList';

function ReportComparative({ reportData, isRefetching }) {
  const { data } = reportData;

  const lineCharts = data.filter((item) => item.type === 'graph');

  return (
    <LineChartList
      data={lineCharts}
      isLoading={isRefetching}
      chartSettingsOverride={{ enablePointLabel: false }}
    />
  );
}

export default ReportComparative;
