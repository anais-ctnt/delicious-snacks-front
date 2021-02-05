import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CardRecipe.module.css';

export default function CardRecipe({ recipeId, title, picture }) {
  return (
    <>
      <Link to={`/recipes/${recipeId}`}>
        <p className={styles.cardImageTitle}>{title}</p>
        <div className={styles.cardImageLayer} />
        <img className={styles.cardRecipeImage} src={picture} alt={title} />
      </Link>
    </>
  );
}

CardRecipe.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  recipeId: PropTypes.number.isRequired,
};
