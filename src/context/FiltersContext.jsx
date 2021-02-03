import { createContext, useState } from 'react';

export const FiltersContext = createContext(null);

export default function FiltersContextProvider({ children }) {
  const [filters, setFilters] = useState({
    drinks: false,
    snacks: false,
    yummi: false,
    healthy: false,
  });
  return (
    <div>
      <FiltersContext.Provider
        value={{ filters: filters, setFilters: setFilters }}
      >
        {children}
      </FiltersContext.Provider>
      ;
    </div>
  );
}
