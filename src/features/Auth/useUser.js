import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiAuth';

export function useUser() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['user'],
    queryFn: ({ signal }) => getCurrentUser({ signal }),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { data, isLoading, error, isError };
}
