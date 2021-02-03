import React from 'react';
import CardRecipe from './CardRecipe';
import styles from './RecipesList.module.css';
import recipes from '../../FakeRecipes';

export default function RecipesList() {
  return (
    <div className={styles.recipeListContainer}>
      {recipes.map((recipe) => (
        <CardRecipe key={recipe.id} picture={recipe.picture} />
      ))}
    </div>
  );
}
