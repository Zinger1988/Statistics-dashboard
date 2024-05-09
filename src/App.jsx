import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom';

import AppLayout from './layouts/AppLayout';
import ReportPage from './pages/ReportPage';
import EngineersListPage from './pages/EngineersListPage';
import SingleEngineerPage from './pages/SingleEngineerPage';
import NotFoundPage from './pages/NotFoundPage';

import { HeaderProvider } from './context/HeaderContext';
import LoginPage from './pages/LoginPage';
import { ProtectedRoute } from './ui';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <HeaderProvider>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to='reports/5' replace />} />
              <Route path='reports/:reportId' element={<ReportPage />} />
              <Route path='engineers/7' element={<EngineersListPage />} />
              <Route path='engineers/8' element={<SingleEngineerPage />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </HeaderProvider>
    </QueryClientProvider>
  );
}

export default App;
