import React from 'react';
import ChildrenPropType from '../../PropTypes/ChildrenPropTypes';
import styles from './PrimaryButton.module.css';

export default function PrimaryButton({ children }) {
  return (
    <>
      <button type="button" className={styles.primaryButton}>
        {children}
      </button>
    </>
  );
}

PrimaryButton.propTypes = ChildrenPropType;
