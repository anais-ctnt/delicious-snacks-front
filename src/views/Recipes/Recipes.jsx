import React from 'react';
import PrimaryButton from '../../components/common/PrimaryButton';
import FilterType from '../../components/FilterType';

import Searchbar from '../../components/Searchbar/Searchbar';
import styles from './Recipes.module.css';
import SearchContextProvider from '../../context/SearchContext';
import FiltersContextProvider from '../../context/FiltersContext';
import RecipesList from '../../components/CardRecipes/RecipesList';
import { Link } from 'react-router-dom';

import cookies from '../../assets/images/cookies.png';

export default function Recipes() {
  return (
    <SearchContextProvider>
      <FiltersContextProvider>
        <section className={styles.recipesContainer}>
          <Link to='add-recipe'>
            <div className={styles.addRecipeButton}>
              <PrimaryButton>ADD RECIPE</PrimaryButton>
            </div>
            <img
              className={styles.addRecipeImage}
              src={cookies}
              alt='click to add recipe'
            />
          </Link>
          <h1>ALL RECIPES</h1>
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
