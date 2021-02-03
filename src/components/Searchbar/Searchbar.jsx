import React from 'react';
import styles from './Searchbar.module.css';

export default function Searchbar() {
  return (
    <div className={styles.searchbar}>
      <input
        type='text'
        placeholder='Search recipe...'
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  );
}
