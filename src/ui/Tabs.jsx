import { createContext, useContext, useEffect, useState } from 'react';

const TabsContext = createContext();

function Tabs({ active = '', children }) {
  const [activeTab, setActiveTab] = useState(active);

  useEffect(() => {
    setActiveTab(active);
  }, [active]);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
}

function TabsHead({ children, className, ...props }) {
  return (
    <div
      className={`mb-4 flex shadow-[inset_0_-1px_0_0_theme(colors.slate.600)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function TabsToggler({ children, tabId, className = '', ...props }) {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === tabId;
  const cssClassBase = 'text-sm font-medium py-3.5 px-5 cursor-pointer';
  const cssClass = isActive
    ? `${cssClassBase} shadow-[inset_0_-3px_0_0_theme(colors.blue.500)]`
    : `${cssClassBase}`;

  return (
    <div
      className={`${cssClass} ${className}`}
      onClick={() => !isActive && setActiveTab(tabId)}
    >
      {children}
    </div>
  );
}

function TabsContent({ children, tabId, className = '', ...props }) {
  const { activeTab } = useTabs();
  const isActive = activeTab === tabId;

  return isActive ? (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  ) : null;
}

function useTabs() {
  const context = useContext(TabsContext);
  if (context === 'undefined') {
    throw new Error('TabsContext was used outside of TabsProvider');
  }
  return context;
}

Tabs.TabsHead = TabsHead;
Tabs.TabsToggler = TabsToggler;
Tabs.TabsContent = TabsContent;

export default Tabs;
