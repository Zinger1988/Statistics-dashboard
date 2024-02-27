import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Routes, Route, Navigate } from 'react-router-dom';

import AppLayout from './layouts/AppLayout';
import ReportPage from './pages/ReportPage';

import { HeaderProvider } from './context/HeaderContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <HeaderProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to='reports/5' replace />} />
            <Route path='reports/:reportId' index element={<ReportPage />} />
            {/* <Route path='reports/3' element={<IncomeDynamics />} /> */}
            {/* <Route path='/engineers' element={<Engineers />} /> */}
            {/* <Route path='/engineers/:id' element={<SingleEngineer />} /> */}
          </Route>
        </Routes>
      </HeaderProvider>
    </QueryClientProvider>
  );
}

export default App;
