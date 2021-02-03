import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CardRecipe from './CardRecipe';

import styles from './RecipesList.module.css';

export default function RecipesList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const URL = `${process.env.REACT_APP_SERVER_ADDRESS}/recipes`;
    axios
      .get(URL, {
        headers: {
          'Access-Control-Allow-Origin': process.env.REACT_APP_SERVER_ADDRESS,
        },
      })
      .then((response) => response.data)
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className={styles.recipeListContainer}>
      {recipes.length !== 0
        ? recipes.map((recipe) => (
            <CardRecipe key={recipe.id} picture={recipe.picture} />
          ))
        : 'LOADING'}
    </div>
  );
}
