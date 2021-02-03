import React from 'react';
import PrimaryButton from '../../components/common/PrimaryButton';
import FilterType from '../../components/FilterType';
import FilterGenre from '../../components/FilterGenre';

import Searchbar from '../../components/Searchbar/Searchbar';
import styles from './Recipes.module.css';

export default function Recipes() {
  return (
    <section className={styles.recipesContainer}>
      <PrimaryButton>ADD RECIPE</PrimaryButton>
      <h1>All recipes</h1>
      <div className={styles.recipesFilters}>
        <Searchbar />
        <div className={styles.filtersContainer}>
          <FilterType />
          <FilterGenre />
        </div>
      </div>
      <div>LES RECETTES</div>
    </section>
  );
}
