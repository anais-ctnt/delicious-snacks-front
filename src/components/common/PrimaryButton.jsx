import React from 'react';
import styles from './PrimaryButton.module.css';

export default function PrimaryButton({ children }) {
  return (
    <>
      <button type='button' className={styles.primaryButton}>
        {children}
      </button>
    </>
  );
}
