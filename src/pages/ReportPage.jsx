import { useEffect, useRef, useState } from 'react';

import Report from '../features/Report/Report';
import { Loader } from '../ui';

import { useHeader } from '../context/HeaderContext';
import { useReport } from '../features/Report/useReport';
import { useParams } from 'react-router';

function ReportPage() {
  const params = useParams();
  const { isLoading, data, isRefetching, isError, error } = useReport(
    params.reportId,
  );
  const { setHeader, setSubHeader } = useHeader();
  const [reportId, setReportId] = useState(params.reportId);

  useEffect(() => {
    if (!isRefetching && !isLoading) {
      setReportId(params.reportId);
    }
  }, [params.reportId, isRefetching, isLoading]);

  useEffect(() => {
    if (!isLoading && data) {
      setHeader(data.pageMeta.title);
      setSubHeader(data.pageMeta.subtitle);
    }
  }, [isLoading, data, setHeader, setSubHeader]);

  if (isLoading || params.reportId !== reportId) {
    return <Loader className='flex grow items-center justify-center' />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return <Report reportData={data} isRefetching={isRefetching} />;
}

export default ReportPage;
