import React from 'react';
import RadioInput from './common/RadioInput';
import styles from './FilterType.module.css';

export default function FilterType() {
  return (
    <div>
      <div className={styles.filterType}>
        <RadioInput name={'snacksType'} id={'snacks'}>
          Snacks
        </RadioInput>
        <RadioInput name={'snacksType'} id={'drinks'}>
          Drinks
        </RadioInput>
      </div>
    </div>
  );
}
