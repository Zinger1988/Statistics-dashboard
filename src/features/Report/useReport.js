import { useQuery } from '@tanstack/react-query';

import { fetchReport } from '../../services/apiReport';
import { useSearchParams } from 'react-router-dom';

export function useReport(reportId) {
  const [searchParams] = useSearchParams();
  const reportData = {};

  for (const key of searchParams) {
    reportData[key.at(0)] = key.at(1).includes('_')
      ? key
          .at(1)
          .split('_')
          .map((item) => ({ value: item }))
      : { value: key.at(1) };
  }

  const { isLoading, data, error, isError, isRefetching } = useQuery({
    queryKey: ['commonReport', reportData, reportId],
    keepPreviousData: true,
    queryFn: ({ signal }) =>
      fetchReport({ signal, ...reportData, code: reportId }),
  });

  return { isLoading, data, isError, error, isRefetching };
}
