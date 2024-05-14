import { useEffect } from 'react';

import EngineerDetails from '../features/Engineers/EngineerDetails';
import ErrorBoundary from '../features/ErrorBoundaries/ErrorBoundary';
import { Loader } from '../ui';

import { useHeader } from '../context/HeaderContext';
import { useEngineer } from '../features/Engineers/useEngineer';

function SingleEngineer() {
  const { isLoading, data, error } = useEngineer(8);
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

  return <ErrorBoundary><EngineerDetails engineer={data} /></ErrorBoundary>;
}

export default SingleEngineer;
