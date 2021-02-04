import React from 'react';
import styles from './ProfilPicture.module.css';

export default function ProfilPicture({ username, picture }) {
  return (
    <div className={styles.imageCropper}>
      <img className={styles.userImage} src={picture} alt={username} />
    </div>
  );
}
