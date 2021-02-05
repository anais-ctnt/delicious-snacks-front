import React, { createContext, useState } from 'react';
import ChildrenPropType from '../PropTypes/ChildrenPropTypes';

export const SearchContext = createContext(null);

export default function SearchContextProvider({ children }) {
  const [search, setSearch] = useState('');
  return (
    <div>
      <SearchContext.Provider value={{ search, setSearch }}>
        {children}
      </SearchContext.Provider>
      ;
    </div>
  );
}

SearchContextProvider.propTypes = ChildrenPropType;
