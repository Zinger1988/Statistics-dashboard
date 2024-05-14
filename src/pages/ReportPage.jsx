import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';

import Report from '../features/Report/Report';
import ErrorBoundary from '../features/ErrorBoundaries/ErrorBoundary';
import { Loader, ErrorBlock } from '../ui';

import { useHeader } from '../context/HeaderContext';
import { useReport } from '../features/Report/useReport';
import { useQueryClient } from '@tanstack/react-query';

function ReportPage() {
  const queryClient = useQueryClient();
  const params = useParams();
  const { isLoading, data, error, isRefetching } = useReport(params.reportId);
  const { setHeader, setSubHeader } = useHeader();
  const [reportId, setReportId] = useState(params.reportId);

  useEffect(() => {
    if (!isRefetching && !isLoading) {
      setReportId(params.reportId);
    }
  }, [params.reportId, isRefetching, isLoading]);

  useEffect(() => {
    if (!isLoading && !error) {
      setHeader(data.pageMeta.title);
      setSubHeader(data.pageMeta.subtitle);
    }
  }, [isLoading, data, setHeader, setSubHeader, error]);

  if (isLoading || params.reportId !== reportId) {
    return <Loader className='flex grow items-center justify-center' />;
  }

  if (error) {
    const { status, title, description } = error.extraParams;

    if (status === 403) {
      queryClient.setQueryData(['user'], null);
      return <Navigate to='/login' />;
    }

    return (
      <ErrorBlock
        className='flex-grow justify-center'
        statusCode={status}
        title={title}
        subTitle={description}
      />
    );
  }

  return <ErrorBoundary><Report reportData={data} isRefetching={isRefetching} /></ErrorBoundary>;
}

export default ReportPage;
