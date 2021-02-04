import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './RecipeDetails.module.css';
import ProfilPicture from '../../components/common/ProfilPicture/ProfilPicture';
import tick from '../../assets/icons/tick.svg';
import heartNotFav from '../../assets/icons/heart.svg';
import heartFav from '../../assets/icons/heartFav.svg';

export default function RecipeDetails(props) {
  const [recipe, setRecipe] = useState({});
  const [isFav, setIsFav] = useState(false);
  const idRecipe = props.match.params.id;
  useEffect(() => {
    const URL = process.env.REACT_APP_SERVER_ADDRESS;
    axios
      .get(`${URL}/recipes/${idRecipe}`, {
        headers: {
          'Access-Control-Allow-Origin': process.env.REACT_APP_SERVER_ADDRESS,
        },
      })
      .then((response) => response.data)
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className={styles.recipeContainer}>
      <div className={styles.imageFiltersContainer}>
        <img
          className={styles.recipeImage}
          src={recipe.picture}
          alt={recipe.title}
        />
        <div className={styles.recipeInfos}>
          <div className={styles.recipeUsername}>
            <ProfilPicture picture={recipe.profil_picture} />
            <p>{recipe.username}</p>
          </div>
          <div className={styles.filtersType}>
            <p>
              <img src={tick} />
              &nbsp;
              {recipe.category}
            </p>
            <p>
              <img src={tick} />
              &nbsp;
              {recipe.type}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.recipeContent}>
        <img
          className={styles.iconFav}
          src={isFav ? heartFav : heartNotFav}
          alt='click to fav'
          onClick={() => setIsFav(!isFav)}
        />
        <h1>{recipe.title}</h1>
        <p>{recipe.ingredients}</p>
        <p className={styles.recipeDescription}>{recipe.description}</p>
      </div>
      <h2>Comments</h2>
    </section>
  );
}
