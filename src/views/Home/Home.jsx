import React from 'react';
import PrimaryButton from '../../components/common/PrimaryButton';
import styles from './Home.module.css';
import RecipesList from '../../components/CardRecipes/RecipesList';
import CardRecipe from '../../components/CardRecipes/CardRecipe';
import donut from '../../assets/images/donut.png';

import recipes from '../../FakeRecipes';

export default function Home() {
  return (
    <section className={styles.homeContainer}>
      <h1>DELICIOUS SNACKS</h1>
      <img src={donut} alt='donut of delicious snacks' />
      <PrimaryButton>ADD RECIPE</PrimaryButton>
      <div className={styles.allListsContainer}>
        <div className={styles.latestListContainer}>
          <h2>All recipes &gt;</h2>
          <RecipesList />
        </div>
        <div className={styles.latestListContainer}>
          <h2>Latest drinks &gt;</h2>
          <div className={styles.latestRecipesContent}>
            {recipes
              .filter((recipe) => (!recipe.snacks ? !recipe.snacks : ''))
              .map((recipe) => (
                <CardRecipe key={recipe.id} picture={recipe.picture} />
              ))}
          </div>
        </div>
        <div className={styles.latestListContainer}>
          <h2>Latest snacks &gt;</h2>
          <div className={styles.latestRecipesContent}>
            {recipes
              .filter((recipe) => (recipe.snacks ? recipe.snacks : ''))
              .map((recipe) => (
                <CardRecipe key={recipe.id} picture={recipe.picture} />
              ))}
          </div>
        </div>
        <div className={styles.latestListContainer}>
          <h2>Chefs &gt;</h2>
        </div>
      </div>
    </section>
  );
}
