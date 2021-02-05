/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchContextProvider from '../../context/SearchContext';
import FiltersContextProvider from '../../context/FiltersContext';

import PrimaryButton from '../../components/common/PrimaryButton';
import RecipesList from '../../components/CardRecipes/RecipesList';
import CardRecipe from '../../components/CardRecipes/CardRecipe';
import ProfilPicture from '../../components/common/ProfilPicture/ProfilPicture';

import styles from './Home.module.css';
import donut from '../../assets/images/donut.png';

export default function Home() {
  const [drinks, setDrinks] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const URL = process.env.REACT_APP_SERVER_ADDRESS;
    axios
      .get(`${URL}/recipes/drinks`, {
        headers: {
          'Access-Control-Allow-Origin': process.env.REACT_APP_SERVER_ADDRESS,
        },
      })
      .then((response) => response.data)
      .then((data) => setDrinks(data));

    axios
      .get(`${URL}/recipes/snacks`, {
        headers: {
          'Access-Control-Allow-Origin': process.env.REACT_APP_SERVER_ADDRESS,
        },
      })
      .then((response) => response.data)
      .then((data) => setSnacks(data));

    axios
      .get(`${URL}/users`, {
        headers: {
          'Access-Control-Allow-Origin': process.env.REACT_APP_SERVER_ADDRESS,
        },
      })
      .then((response) => response.data)
      .then((data) => setUsers(data));
  }, []);
  return (
    <SearchContextProvider>
      <FiltersContextProvider>
        <section className={styles.homeContainer}>
          <h1>DELICIOUS SNACKS</h1>
          <img src={donut} alt="donut of delicious snacks" />
          <Link to="add-recipe">
            <PrimaryButton>ADD RECIPE</PrimaryButton>
          </Link>
          <div className={styles.allListsContainer}>
            <div className={styles.allRecipesContainer}>
              <Link to="/recipes">
                <h2>All recipes &gt;</h2>
              </Link>
              <RecipesList />
            </div>

            <div className={styles.latestListContainer}>
              <Link to="/recipes">
                <h2>Latest drinks &gt;</h2>
              </Link>
              <div className={styles.latestListContent}>
                {drinks.length !== 0
                  ? drinks.map((recipe) => (
                      <Link to={`/recipes/${recipe.recipe_id}`}>
                        <CardRecipe
                          title={recipe.title}
                          key={recipe.recipe_id}
                          picture={recipe.picture}
                        />
                      </Link>
                    ))
                  : 'Sorry there are no drinks'}
              </div>
            </div>
            <div className={styles.latestListContainer}>
              <Link to="/recipes">
                <h2>Latest snacks &gt;</h2>
              </Link>
              <div className={styles.latestListContent}>
                {snacks !== 0
                  ? snacks.map((recipe) => (
                      <Link to={`/recipes/${recipe.recipe_id}`}>
                        <CardRecipe
                          title={recipe.title}
                          key={recipe.recipe_id}
                          picture={recipe.picture}
                        />
                      </Link>
                    ))
                  : 'Sorry there are no snacks'}
              </div>
            </div>
            <div className={styles.latestListContainer}>
              <Link to="/recipes">
                <h2>Chefs &gt;</h2>
              </Link>
              <div className={styles.latestListContent}>
                {users !== 0
                  ? users.map((user) => (
                      <ProfilPicture
                        key={user.user_id}
                        username={user.unsername}
                        picture={user.profil_picture}
                      />
                    ))
                  : 'Sorry there are no chefs'}
              </div>
            </div>
          </div>
        </section>
      </FiltersContextProvider>
    </SearchContextProvider>
  );
}
