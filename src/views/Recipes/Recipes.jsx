import React from 'react';
import PrimaryButton from '../../components/common/PrimaryButton';
import FilterType from '../../components/FilterType';

import Searchbar from '../../components/Searchbar/Searchbar';
import styles from './Recipes.module.css';
import SearchContextProvider from '../../context/SearchContext';
import FiltersContextProvider from '../../context/FiltersContext';
import RecipesList from '../../components/CardRecipes/RecipesList';

export default function Recipes() {
  return (
    <SearchContextProvider>
      <FiltersContextProvider>
        <section className={styles.recipesContainer}>
          <PrimaryButton>ADD RECIPE</PrimaryButton>
          <h1>All recipes</h1>
          <div className={styles.recipesFilters}>
            <Searchbar />
            <FilterType />
          </div>
          <div>
            <RecipesList />
          </div>
        </section>
      </FiltersContextProvider>
    </SearchContextProvider>
  );
}
