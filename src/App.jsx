import { HeaderProvider } from './context/HeaderContext';
import AppLayout from './layouts/AppLayout';
import Main from './pages/Main';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HeaderProvider>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<Main />} />
        </Route>
      </Routes>
    </HeaderProvider>
  );
}

export default App;
