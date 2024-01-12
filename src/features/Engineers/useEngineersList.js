import { useQuery } from '@tanstack/react-query';

import { getAllEngineers } from '../../services/apiEngineers';

export function useEngineersList() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['engineers'],
    queryFn: getAllEngineers,
  });

  return { isLoading, data, error };
}
