import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Routes, Route } from 'react-router-dom';

import AppLayout from './layouts/AppLayout';
import { Main, Engineers, SingleEngineer } from './pages';

import { HeaderProvider } from './context/HeaderContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeaderProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Main />} />
            <Route path='/engineers' element={<Engineers />} />
            <Route path='/engineers/:id' element={<SingleEngineer />} />
          </Route>
        </Routes>
      </HeaderProvider>
    </QueryClientProvider>
  );
}

export default App;
