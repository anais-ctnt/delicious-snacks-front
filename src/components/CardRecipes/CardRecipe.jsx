import React from 'react';
import styles from './CardRecipe.module.css';

export default function CardRecipe({ title, picture }) {
  return (
    <>
      <div className={styles.cardImageLayer} />
      <img className={styles.cardRecipeImage} src={picture} alt={title}></img>
    </>
  );
}
