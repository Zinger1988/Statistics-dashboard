import { createContext, useContext, useState } from 'react';
import Icon from './Icon';

const AccordionContext = createContext();

function Accordion({ children, onlyOne = true }) {
  const [activeItems, setActiveItems] = useState([]);

  const toggleActiveItems = (id) => {
    const isActive = activeItems.find((itemId) => itemId === id);

    if (isActive) {
      setActiveItems((activeItems) =>
        activeItems.filter((itemId) => itemId !== id),
      );
    } else {
      onlyOne
        ? setActiveItems([id])
        : setActiveItems((activeItems) => [...activeItems, id]);
    }
  };

  return (
    <AccordionContext.Provider value={{ activeItems, toggleActiveItems }}>
      {children}
    </AccordionContext.Provider>
  );
}

function AccordionHeader({ children, accordionId, className, ...props }) {
  const { toggleActiveItems, activeItems } = useAccordion();
  const isActive = activeItems.find((itemId) => itemId === accordionId);

  return (
    <div
      className={`relative cursor-pointer border border-b-0 border-slate-600 bg-slate-800 px-4 py-2.5 pr-10 text-sm font-medium first:rounded-t-md last:rounded-b-md last:border-b ${className}`}
      {...props}
      onClick={() => toggleActiveItems(accordionId)}
    >
      {children}
      <Icon
        style={{
          transform: isActive
            ? 'translateY(-50%) rotate(180deg)'
            : 'translateY(-50%) rotate(0)',
        }}
        id='arrow-triangle-down'
        className='absolute right-3 top-1/2 h-3 w-3 fill-slate-600'
      />
    </div>
  );
}

function AccordionBody({ children, accordionId, className, ...props }) {
  const { activeItems } = useAccordion();
  const isActive = activeItems.find((itemId) => itemId === accordionId);

  return isActive ? (
    <div
      className={`border border-b-0 border-slate-600 bg-slate-800 px-4 py-2.5 last:border-b ${className} last:rounded-b-md`}
      {...props}
    >
      {children}
    </div>
  ) : null;
}

function useAccordion() {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error('HeaderContext was used outside of AccordionProvider');
  }
  return context;
}

Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export { Accordion, useAccordion };
