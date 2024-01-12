import { useQuery } from '@tanstack/react-query';

import { getEngineer } from '../../services/apiEngineers';

export function useEngineerDetails() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['engineerDetails'],
    queryFn: getEngineer
  });

  return { isLoading, data, error };
}
