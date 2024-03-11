import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signOut as signOutApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useSignOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: signOut,
    isLoading,
    error,
  } = useMutation({
    mutationFn: ({ signal }) => signOutApi({ signal }),
    onSuccess: () => {
      queryClient.setQueryData(['user'], null);
      localStorage.removeItem('Access-Token');
      localStorage.removeItem('Refresh-Token');
      navigate('/login');
    },
  });

  return { signOut, isLoading, error };
}
