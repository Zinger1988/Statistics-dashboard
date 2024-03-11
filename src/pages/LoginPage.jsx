import { Navigate } from 'react-router-dom';

import LoginForm from '../features/Auth/LoginForm';
import AuthLayout from '../layouts/AuthLayout';

import { useUser } from '../features/Auth/useUser';

function LoginPage() {
  const { data } = useUser();

  if (data?.status === 'success') {
    return <Navigate to='/' replace />;
  }

  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}

export default LoginPage;
