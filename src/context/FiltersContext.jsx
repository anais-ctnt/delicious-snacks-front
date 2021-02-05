import React, { createContext, useState } from 'react';
import ChildrenPropType from '../PropTypes/ChildrenPropTypes';

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
      <FiltersContext.Provider value={{ filters, setFilters }}>
        {children}
      </FiltersContext.Provider>
      ;
    </div>
  );
}

FiltersContextProvider.propTypes = ChildrenPropType;
