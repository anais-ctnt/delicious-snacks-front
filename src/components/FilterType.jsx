import React, { useContext } from 'react';
import styles from './FilterType.module.css';
import { FiltersContext } from '../context/FiltersContext';

export default function FilterType() {
  const { filters, setFilters } = useContext(FiltersContext);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.checked });
  };
  return (
    <div className={styles.filtersContainer}>
      <p>Filtrer :</p>
      <div className={styles.filterType}>
        <div className={styles.checkBoxContainer}>
          <label className={styles.checkBoxLabel} htmlFor='snacks'>
            <input
              className={styles.checkBoxInput}
              type='checkbox'
              id='snacks'
              name='snacks'
              onClick={(e) => handleChange(e)}
            />
            Snacks
          </label>
        </div>
        <div className={styles.checkBoxContainer}>
          <label className={styles.checkBoxLabel} htmlFor='drinks'>
            <input
              className={styles.checkBoxInput}
              type='checkbox'
              id='drinks'
              name='drinks'
              onClick={(e) => handleChange(e)}
            />
            Drinks
          </label>
        </div>
      </div>
      <div className={styles.filterType}>
        <div className={styles.checkBoxContainer}>
          <label className={styles.checkBoxLabel} htmlFor='yummi'>
            <input
              className={styles.checkBoxInput}
              type='checkbox'
              id='yummi'
              name='yummi'
              onClick={(e) => handleChange(e)}
            />
            Yummi
          </label>
        </div>
        <div className={styles.checkBoxContainer}>
          <label className={styles.checkBoxLabel} htmlFor='healthy'>
            <input
              className={styles.checkBoxInput}
              type='checkbox'
              id='healthy'
              name='healthy'
              onClick={(e) => handleChange(e)}
            />
            Healthy
          </label>
        </div>
      </div>
    </div>
  );
}
