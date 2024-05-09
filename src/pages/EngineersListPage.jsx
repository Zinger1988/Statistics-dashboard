import { useEffect } from 'react';

import EngineersList from '../features/Engineers/EngineersList';
import { Loader } from '../ui';

import { useHeader } from '../context/HeaderContext';
import { useEngineer } from '../features/Engineers/useEngineer';

function Engineers() {
  const { isLoading, data, error } = useEngineer(7);
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

  return <EngineersList list={data} />;
}

export default Engineers;
