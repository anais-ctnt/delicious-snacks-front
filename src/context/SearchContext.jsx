import { createContext } from 'react';

const SearchContext = createContext(null);

export default function SearchContextProvider({ children }) {
  return (
    <div>
      <SearchContext.Provider>{children}</SearchContext.Provider>;
    </div>
  );
}
