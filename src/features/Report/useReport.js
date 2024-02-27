import { useQuery } from '@tanstack/react-query';

import { fetchReport } from '../../services/apiReport';
import { useSearchParams } from 'react-router-dom';

export function useReport(reportId) {
  const [searchParams] = useSearchParams();
  const reportData = {};

  for (const key of searchParams) {
    try {
      reportData[key.at(0)] = JSON.parse(key.at(1));
    } catch (e) {
      reportData[key.at(0)] = null;
    }
  }

  const { isLoading, data, error, isError, isRefetching } = useQuery({
    queryKey: ['commonReport', reportData, reportId],
    keepPreviousData: true,
    queryFn: ({ signal }) =>
      fetchReport({ signal, ...reportData, code: reportId }),
  });

  return { isLoading, data, isError, error, isRefetching };
}
