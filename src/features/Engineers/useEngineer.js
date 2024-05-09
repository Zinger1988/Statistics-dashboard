import { useQuery } from '@tanstack/react-query';

import { getEngineer } from '../../services/apiEngineer';

export function useEngineer(code = 7) {
  const { isLoading, data, error } = useQuery({
    queryKey: ['engineers', code],
    queryFn: ({ signal }) => getEngineer({signal, code}),
  });

  return { isLoading, data, error };
}
