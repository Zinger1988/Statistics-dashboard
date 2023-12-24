import { useEffect } from 'react';

import Box from '../ui/Box';
import GaugeChart from '../ui/GaugeChart';
import LineChart from '../ui/LineChart';
import Legend from '../ui/Legend';

import { useHeader } from '../context/HeaderContext';

import { incomeDynamicsMock as pageData } from './IncomeDynamicsMock';

function IncomeDynamics() {
  const { setHeader, setSubHeader } = useHeader();
  const headerData = pageData.find((item) => item.type === 'header');

  useEffect(() => {
    setHeader(headerData.title);
    setSubHeader(headerData.subtitle);
  }, [setHeader, setSubHeader, headerData.title, headerData.subtitle]);

  // Generate components for lineCharts
  const lineCharts = pageData
    .filter((item) => item.id.includes('graph'))
    .map((data) => {
      const legendData = data.lines.map(({ id, color }) => ({ id, color }));
      return (
        <Box className='col-span-9' label={data.title}>
          <Legend data={legendData} className='mb-3' />
          <LineChart className='h-[370px]' data={data} />
        </Box>
      );
    });

  // Generate components for gaugeCharts
  const gaugeCharts = (
    <Box
      className='col-span-3 col-start-10 row-span-2 row-start-1'
      label='Відванатження за поточний місяць'
    >
      {pageData
        .filter((item) => item.id.includes('scalar'))
        .map((data) => (
          <GaugeChart data={data} className='mx-auto mb-8 last:mb-0' />
        ))}
    </Box>
  );

  return (
    <div className='grid grid-cols-12 items-start gap-5'>
      {lineCharts}
      {gaugeCharts}
    </div>
  );
}

export default IncomeDynamics;
