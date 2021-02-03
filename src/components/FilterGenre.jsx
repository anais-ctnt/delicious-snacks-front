import React from 'react';
import RadioInput from './common/RadioInput';
import styles from './FilterType.module.css';

export default function FilterGenre() {
  return (
    <div>
      <div className={styles.filterType}>
        <RadioInput name={'snacksGenre'} id={'Healthy'}>
          Healthy
        </RadioInput>
        <RadioInput name={'snacksGenre'} id={'Yummi'}>
          Yummi
        </RadioInput>
      </div>
    </div>
  );
}
