import { Navigate } from 'react-router-dom';
import { useUser } from '../features/Auth/useUser';

function ProtectedRoute({ children }) {
  const { data, isLoading } = useUser();

  if (isLoading) {
    return 'loading';
  }

  return data.status === 'success' ? (
    children
  ) : (
    <Navigate to='/signin' replace />
  );
}

export default ProtectedRoute;
