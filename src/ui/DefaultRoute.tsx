import React from 'react';
import { useUser } from '../features/Auth/useUser';
import { Navigate } from 'react-router-dom';

const DefaultRoute = () => {
  const { data } = useUser();
  const defaultId = data?.user?.defaultReportId;
  return <Navigate to={`reports/${defaultId ? defaultId : 5}`} replace />;
};

export default DefaultRoute;
