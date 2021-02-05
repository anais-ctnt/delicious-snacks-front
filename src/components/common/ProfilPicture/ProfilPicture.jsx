import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfilPicture.module.css';

export default function ProfilPicture({ username, picture }) {
  return (
    <div className={styles.imageCropper}>
      <img className={styles.userImage} src={picture} alt={username} />
    </div>
  );
}

ProfilPicture.propTypes = {
  username: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
