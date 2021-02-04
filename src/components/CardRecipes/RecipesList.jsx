import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import CardRecipe from './CardRecipe';
import { SearchContext } from '../../context/SearchContext';
import { FiltersContext } from '../../context/FiltersContext';

import styles from './RecipesList.module.css';
import { Link } from 'react-router-dom';

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
            <Link to={`/recipes/${recipe.recipe_id}`}>
              <CardRecipe key={recipe.recipe_id} picture={recipe.picture} />
            </Link>
          ))
        : 'Sorry no results for your search'}
    </div>
  );
}
