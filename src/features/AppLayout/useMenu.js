import { useQuery } from '@tanstack/react-query';
import { fetchMenu } from '../../services/apiMenu';

export function useMenu() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['menu'],
    queryFn: ({ signal }) => fetchMenu({ signal }),
  });

  return { data, isLoading, error };
}
