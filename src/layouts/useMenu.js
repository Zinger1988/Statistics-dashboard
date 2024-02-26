import { useQuery } from '@tanstack/react-query';
import { fetchMenu } from '../services/apiLayout';

export function useMenu() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['menu'],
    queryFn: fetchMenu,
    staleTime: 1000 * 60 * 5,
  });

  return { data, isLoading, error };
}
