import { useQuery } from '@tanstack/react-query';

import { fetchCommonReport } from '../../services/apiCommonReport';
import { useSearchParams } from 'react-router-dom';

export function useCommonReport() {
  const [searchParams] = useSearchParams();

  const producersParam = searchParams.get('producers');
  const classifiersParam = searchParams.get('classifiers');

  const producers = producersParam && {
    value: producersParam,
  };

  const classifiers = classifiersParam
    ? classifiersParam.split(',').map((item) => ({ value: item }))
    : [];

  const { isLoading, data, error, isError, isRefetching } = useQuery({
    queryKey: ['commonReport', producers, classifiers],
    queryFn: ({ signal }) =>
      fetchCommonReport({ producers, classifiers, signal }),
    keepPreviousData: true,
  });

  return { isLoading, data, isError, error, isRefetching };
}
