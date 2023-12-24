import { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

function HeaderProvider({ children }) {
  const [header, setHeader] = useState('');
  const [subHeader, setSubHeader] = useState('');

  return (
    <HeaderContext.Provider
      value={{ header, setHeader, subHeader, setSubHeader }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

function useHeader() {
  const context = useContext(HeaderContext);
  if (context === undefined)
    throw new Error('HeaderContext was used outside of HeaderProvider');
  return context;
}

export { HeaderProvider, useHeader };
