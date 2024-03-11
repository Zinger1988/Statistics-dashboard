import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Report from '../features/Report/Report';
import { Loader } from '../ui';

import { useHeader } from '../context/HeaderContext';
import { useReport } from '../features/Report/useReport';
import ErrorBlock from '../ui/ErrorBlock';

function ReportPage() {
  const params = useParams();
  const { isLoading, data, error, isError, isRefetching } = useReport(
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
    if (!isLoading && !error && data.status !== 'error') {
      setHeader(data.pageMeta.title);
      setSubHeader(data.pageMeta.subtitle);
    }
  }, [isLoading, data, setHeader, setSubHeader, error]);

  if (isLoading || params.reportId !== reportId) {
    return <Loader className='flex grow items-center justify-center' />;
  }

  if (!isLoading && (isError || data?.status !== 'success')) {
    const statusCode = isError ? error.cause : data?.status_code;

    return (
      <ErrorBlock
        className='flex-grow justify-center'
        statusCode={statusCode}
        title='Щось пішло не так...'
        subTitle='Будь ласка, спробуйте ще раз трохи пізніше.'
      />
    );
  }

  return <Report reportData={data} isRefetching={isRefetching} />;
}

export default ReportPage;
