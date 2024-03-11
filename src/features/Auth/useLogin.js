import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: login,
    isLoading,
    error,
  } = useMutation({
    mutationFn: ({ login, password }) => loginApi({ login, password }),
    onSuccess: ({ status_code, refresh_token, access_token, ...user }) => {
      if (status_code === 200) {
        debugger;
        localStorage.setItem('Access-Token', access_token);
        localStorage.setItem('Refresh-Token', refresh_token);
        queryClient.setQueryData(['user'], user);
        navigate('/reports/5', { replace: true });
      }
    },
  });

  return { login, isLoading, error };
}
