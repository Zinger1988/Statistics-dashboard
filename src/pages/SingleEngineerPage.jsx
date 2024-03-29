import { useEffect } from 'react';

import EngineerDetails from '../features/Engineers/EngineerDetails';
import { Loader } from '../ui';

import { useHeader } from '../context/HeaderContext';
import { useEngineerDetails } from '../features/Engineers/useEngineerDetails';

function SingleEngineer() {
  const { isLoading, data, error } = useEngineerDetails();
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

  return <EngineerDetails engineer={data} />;
}

export default SingleEngineer;
