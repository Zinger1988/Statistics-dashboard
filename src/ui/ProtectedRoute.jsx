import { Navigate } from 'react-router-dom';
import { useUser } from '../features/Auth/useUser';
import Loader from './Loader';

function ProtectedRoute({ children }) {
  const { isLoading, isError } = useUser();

  if (isLoading) {
    return (
      <div className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-slate-800'>
        <Loader />
      </div>
    );
  }

  return isError ? <Navigate to='/login' replace /> : children;
}

export default ProtectedRoute;
