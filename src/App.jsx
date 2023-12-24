import { HeaderProvider } from './context/HeaderContext';
import AppLayout from './layouts/AppLayout';
import IncomeDynamics from './pages/IncomeDynamics';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HeaderProvider>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<IncomeDynamics />} />
        </Route>
      </Routes>
    </HeaderProvider>
  );
}

export default App;
