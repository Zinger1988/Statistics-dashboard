import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signIn as signInApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useSignIn() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: signIn,
    isLoading,
    error,
  } = useMutation({
    mutationFn: ({ login, password }) => signInApi({ login, password }),
    onSuccess: ({ refresh_token, access_token, ...user }) => {
      localStorage.setItem('Access-Token', access_token);
      localStorage.setItem('Refresh-Token', refresh_token);
      queryClient.setQueryData(['user'], user);
      navigate('/reports/5', { replace: true });
    },
  });

  return { signIn, isLoading, error };
}
