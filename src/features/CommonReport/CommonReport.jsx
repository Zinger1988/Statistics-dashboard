import { useEffect } from 'react';

import Box from '../../ui/Box';
import GaugeChart from '../../ui/GaugeChart';
import Legend from '../../ui/Legend';
import LineChart from '../../ui/LineChart';

import { useHeader } from '../../context/HeaderContext';
import { incomeDynamicsMock as pageData } from './IncomeDynamicsMock';
import CommonReportFilters from './CommonReportFilters';

function CommonReport() {
  const { setHeader, setSubHeader } = useHeader();

  const headerData = pageData.find((item) => item.type === 'header');
  const incomeDynamics = pageData.find((item) => item.id === 'graph-1');
  const completeDynamics = pageData.find((item) => item.id === 'graph-2');
  const monthShipments = pageData.filter((item) => item.id.includes('scalar'));

  useEffect(() => {
    setHeader(headerData.title);
    setSubHeader(headerData.subtitle);
  }, [setHeader, setSubHeader, headerData.title, headerData.subtitle]);

  return (
    <div className='grid grid-cols-12 items-start gap-5'>
      <div className='col-span-9'>
        <CommonReportFilters />
      </div>
      <Box className='col-span-9' label={incomeDynamics.title}>
        <Legend
          data={incomeDynamics.lines.map(({ id, color }) => ({ id, color }))}
          className='mb-3'
        />
        <LineChart className='h-96' data={incomeDynamics} />
      </Box>
      <Box className='col-span-9' label={completeDynamics.title}>
        <Legend
          data={completeDynamics.lines.map(({ id, color }) => ({ id, color }))}
          className='mb-3'
        />
        <LineChart className='h-64' data={completeDynamics} />
      </Box>
      <Box
        className='col-span-3 col-start-10 row-span-3 row-start-1'
        label='Відванатження за поточний місяць'
      >
        {monthShipments.map((data) => (
          <GaugeChart
            key={data.id}
            data={data}
            className='mx-auto mb-8 last:mb-0'
          />
        ))}
      </Box>
    </div>
  );
}

export default CommonReport;
