import React from 'react';
import styles from './CardRecipe.module.css';

export default function CardRecipe({ title, picture }) {
  console.log(title);
  return (
    <>
      <p className={styles.cardImageTitle}>{title}</p>
      <div className={styles.cardImageLayer} />
      <img className={styles.cardRecipeImage} src={picture} alt={title}></img>
    </>
  );
}
