import { createContext, useState } from 'react';

export const SearchContext = createContext(null);

export default function SearchContextProvider({ children }) {
  const [search, setSearch] = useState('');
  return (
    <div>
      <SearchContext.Provider value={{ search: search, setSearch: setSearch }}>
        {children}
      </SearchContext.Provider>
      ;
    </div>
  );
}
