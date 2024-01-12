import { useQuery } from '@tanstack/react-query';

import { getCommonReport } from '../../services/apiCommonReport';

export function useCommonReport() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['commonReport'],
    queryFn: getCommonReport,
  });

  return { isLoading, data, error };
}
