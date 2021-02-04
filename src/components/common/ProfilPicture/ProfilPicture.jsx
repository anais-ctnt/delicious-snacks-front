import React from 'react';
import styles from './ProfilPicture.module.css';

export default function ProfilPicture({ user }) {
  return (
    <div className={styles.imageCropper}>
      <img
        className={styles.userImage}
        src={user.picture}
        alt={`${user.username}`}
      />
    </div>
  );
}
