import React from 'react';
import styles from './CardRecipe.module.css';

export default function CardRecipe({ title, picture }) {
  return (
    <div className={styles.cardRecipeContainer}>
      <img src={picture} alt={title}></img>
    </div>
  );
}
