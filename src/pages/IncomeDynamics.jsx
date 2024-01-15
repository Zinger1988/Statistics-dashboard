import { useEffect } from 'react';

import IncomeDynamics from '../features/IncomeDynamics/IncomeDynamics';
import { Loader } from '../ui';

import { useHeader } from '../context/HeaderContext';
import { useIncomeDynamics } from '../features/IncomeDynamics/useIncomeDynamics';

function Main() {
  const { isLoading, data, error } = useIncomeDynamics();
  const { setHeader, setSubHeader } = useHeader();

  useEffect(() => {
    if (!isLoading && data) {
      setHeader(data.pageMeta.title);
      setSubHeader(data.pageMeta.subtitle);
    }
  }, [isLoading, data, setHeader, setSubHeader]);

  if (isLoading) {
    return <Loader className='flex grow items-center justify-center' />;
  }

  return <IncomeDynamics report={data} />;
}

export default Main;
