import React from 'react';
import styles from './RadioInput.module.css';

export default function RadioInput({ children, name, id }) {
  return (
    <div className={styles.radioInputContainer}>
      <label className={styles.radioInputLabel} htmlFor={id}>
        <input className={styles.radioInput} type='radio' id={id} name={name} />
        {children}
      </label>
    </div>
  );
}
