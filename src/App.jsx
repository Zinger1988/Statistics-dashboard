import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Routes, Route } from 'react-router-dom';

import AppLayout from './layouts/AppLayout';
import { Main, Engineers, SingleEngineer, IncomeDynamics } from './pages';

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
            <Route index element={<Main />} />
            <Route path='/engineers' element={<Engineers />} />
            <Route path='/engineers/:id' element={<SingleEngineer />} />
            <Route path='/incomeDynamics' element={<IncomeDynamics />} />
          </Route>
        </Routes>
      </HeaderProvider>
    </QueryClientProvider>
  );
}

export default App;
