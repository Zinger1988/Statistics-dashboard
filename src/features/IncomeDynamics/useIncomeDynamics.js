import { useQuery } from '@tanstack/react-query';

import { getIncomeDynamics } from '../../services/apiIncomeDynamics';

export function useIncomeDynamics() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['incomeDynamics'],
    queryFn: getIncomeDynamics,
  });

  return { isLoading, data, error };
}
