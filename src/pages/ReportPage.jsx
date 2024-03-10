import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

import Report from '../features/Report/Report';
import { Loader } from '../ui';

import { useHeader } from '../context/HeaderContext';
import { useReport } from '../features/Report/useReport';

function ReportPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { isLoading, data, isRefetching } = useReport(params.reportId);
  const { setHeader, setSubHeader } = useHeader();
  const [reportId, setReportId] = useState(params.reportId);

  useEffect(() => {
    if (!isRefetching && !isLoading) {
      setReportId(params.reportId);
    }
  }, [params.reportId, isRefetching, isLoading]);

  useEffect(() => {
    if (!isLoading && data.status !== 'error') {
      setHeader(data.pageMeta.title);
      setSubHeader(data.pageMeta.subtitle);
    }
  }, [isLoading, data, setHeader, setSubHeader]);

  useEffect(() => {
    if (!isLoading && data) {
      data.status_code === 403 && navigate('/signin');
    }
  }, [isLoading, data, navigate]);

  if (isLoading || params.reportId !== reportId) {
    return <Loader className='flex grow items-center justify-center' />;
  }

  return <Report reportData={data} isRefetching={isRefetching} />;
}

export default ReportPage;
