export function getLegend(chartData) {
  return chartData.map(({ id, color }) => ({ id, color }));
}
