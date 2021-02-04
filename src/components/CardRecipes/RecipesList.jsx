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

  let URL = `${process.env.REACT_APP_SERVER_ADDRESS}/recipes`;

  if (filters.yummi) {
    URL += `?&yummi=${0}`;
  }
  if (filters.healthy) {
    URL += `?&healthy=${1}`;
  }
  if (filters.snacks) {
    URL += `?&snacks=${1}`;
  }
  if (filters.drinks) {
    URL += `?&drinks=${0}`;
  }
  if (search) {
    URL += `?&searchquery=${search}`;
  }

  useEffect(() => {
    axios
      .get(URL, {
        headers: {
          'Access-Control-Allow-Origin': process.env.REACT_APP_SERVER_ADDRESS,
        },
      })
      .then((response) => response.data)
      .then((data) => setRecipes(data), console.log())
      .catch((err) => {
        if (err.response.status === 404) {
          setRecipes([]);
        } else {
          console.error(err.response.data.errorMessage);
        }
        console.error(err);
      });
  }, [URL]);

  // recipes.filter((recipe) =>
  //         recipe.title.toLowerCase().includes(search.toLowerCase()) ||
  //         recipe.ingredients.toLowerCase()
  //           .includes(search.toLowerCase()) ||
  //         recipe.description.toLowerCase().includes(search.toLowerCase())
  //     )

  return (
    <div className={styles.recipeListContainer}>
      {recipes.length !== 0
        ? recipes.map((recipe) => (
            <CardRecipe key={recipe.recipe_id} picture={recipe.picture} />
          ))
        : 'Sorry no results for your search'}
    </div>
  );
}
