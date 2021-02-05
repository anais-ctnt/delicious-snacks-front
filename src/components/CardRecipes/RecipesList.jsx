/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-console */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import CardRecipe from './CardRecipe';
import { SearchContext } from '../../context/SearchContext';
import { FiltersContext } from '../../context/FiltersContext';

import styles from './RecipesList.module.css';

export default function RecipesList() {
  const [recipes, setRecipes] = useState([]);
  const { search } = useContext(SearchContext);
  const { filters } = useContext(FiltersContext);

  let URL = `${process.env.REACT_APP_SERVER_ADDRESS}/recipes?`;

  if (filters.snacks) {
    URL += `&category=snacks`;
  }
  if (filters.drinks) {
    URL += `&category=drinks`;
  }
  if (filters.healthy) {
    URL += `&type=healthy`;
  }
  if (filters.yummi) {
    URL += `&type=yummi`;
  }
  if (search) {
    URL += `&searchquery=${search}`;
  }

  useEffect(() => {
    axios
      .get(URL, {
        headers: {
          'Access-Control-Allow-Origin': process.env.REACT_APP_SERVER_ADDRESS,
        },
      })
      .then((response) => response.data)
      .then((data) => setRecipes(data))
      .catch((err) => {
        if (err.response.status === 404) {
          setRecipes([]);
        } else {
          console.error(err.response.data.errorMessage);
        }
        console.error(err);
      });
  }, [URL]);

  return (
    <div className={styles.recipeListContainer}>
      {recipes.length !== 0
        ? recipes.map((recipe) => (
            <CardRecipe
              key={recipe.recipe_id}
              title={recipe.title}
              picture={recipe.picture}
              recipeId={recipe.recipe_id}
            />
          ))
        : 'Sorry there are no recipes'}
    </div>
  );
}
