import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchContextProvider from '../../context/SearchContext';
import FiltersContextProvider from '../../context/FiltersContext';

import PrimaryButton from '../../components/common/PrimaryButton';
import RecipesList from '../../components/CardRecipes/RecipesList';
import CardRecipe from '../../components/CardRecipes/CardRecipe';
import ProfilPicture from '../../components/common/ProfilPicture/ProfilPicture';

import styles from './Home.module.css';
import donut from '../../assets/images/donut.png';

import { Link } from 'react-router-dom';

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
          <img src={donut} alt='donut of delicious snacks' />
          <PrimaryButton>ADD RECIPE</PrimaryButton>
          <div className={styles.allListsContainer}>
            <div className={styles.latestListContainer}>
              <Link to='/recipes'>
                <h2>All recipes &gt;</h2>
              </Link>

              <RecipesList />
            </div>

            <div className={styles.latestListContainer}>
              <h2>Latest drinks &gt;</h2>
              <div className={styles.latestListContent}>
                {drinks.map((recipe) => (
                  <Link to={`/recipes/${recipe.recipe_id}`}>
                    <CardRecipe
                      key={recipe.recipe_id}
                      picture={recipe.picture}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles.latestListContainer}>
              <h2>Latest snacks &gt;</h2>
              <div className={styles.latestListContent}>
                {snacks.map((recipe) => (
                  <Link to={`/recipes/${recipe.recipe_id}`}>
                    <CardRecipe
                      key={recipe.recipe_id}
                      picture={recipe.picture}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles.latestListContainer}>
              <h2>Chefs &gt;</h2>
              <div className={styles.latestListContent}>
                {users.map((user) => (
                  <ProfilPicture
                    key={user.user_id}
                    username={user.unsername}
                    picture={user.profil_picture}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </FiltersContextProvider>
    </SearchContextProvider>
  );
}
