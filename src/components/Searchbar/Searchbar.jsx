import React, { useContext } from 'react';
import styles from './Searchbar.module.css';
import { SearchContext } from '../../context/SearchContext';

export default function Searchbar() {
  const { search, setSearch } = useContext(SearchContext);
  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        placeholder="Search recipe..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
