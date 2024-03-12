import { Navigate } from 'react-router-dom';

import LoginForm from '../features/Auth/LoginForm';
import AuthLayout from '../layouts/AuthLayout';

import { useUser } from '../features/Auth/useUser';

function LoginPage() {
  const { data, isError } = useUser();

  if (data && !isError) {
    return <Navigate to='/' replace />;
  }

  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}

export default LoginPage;
