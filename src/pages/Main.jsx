import { useEffect } from 'react';

import CommonReport from '../features/CommonReport/CommonReport';
import { Loader } from '../ui';

import { useHeader } from '../context/HeaderContext';
import { useCommonReport } from '../features/CommonReport/useCommonReport';

function Main() {
  const { isLoading, data, isRefetching, isError, error } = useCommonReport();
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

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return <CommonReport report={data} isRefetching={isRefetching} />;
}

export default Main;
