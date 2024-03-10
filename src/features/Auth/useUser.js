import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiAuth';

export function useUser() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user'],
    queryFn: ({ signal }) => getCurrentUser({ signal }),
  });

  return { data, isLoading, error };
}
