import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom';

import AppLayout from './layouts/AppLayout';
import LoginPage from './pages/LoginPage';
import ReportPage from './pages/ReportPage';
import NotFoundPage from './pages/NotFoundPage';

import { HeaderProvider } from './context/HeaderContext';
import { ProtectedRoute } from './ui';
import ErrorBoundary from './features/ErrorBoundaries/ErrorBoundary';

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
          <ErrorBoundary hasNavigation={false}>
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
              </Route>
              <Route path='/login' element={<LoginPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </ErrorBoundary>
        </BrowserRouter>
      </HeaderProvider>
    </QueryClientProvider>
  );
}

export default App;
