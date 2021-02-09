/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import axios from 'axios';

import PrimaryButton from '../../components/common/PrimaryButton';

import styles from './AddRecipe.module.css';

export default function AddRecipe() {
  const [successPost, setSuccessPost] = useState(false);
  function todayDate() {
    const d = new Date();
    let month = `${d.getMonth() + 1}`;
    let day = `${d.getDate()}`;
    const year = d.getFullYear();

    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0${day}`;

    return [year, month, day].join('-');
  }

  const [addRecipe, setAddRecipe] = useState({
    title: '',
    ingredients: '',
    description: '',
    picture: '',
    category: '',
    type: '',
    date_added: todayDate(),
    user_id: 1,
  });

  const {
    title,
    ingredients,
    description,
    picture,
    category,
    type,
    date_added: dateAdded,
    user_id: userId,
  } = addRecipe;

  const handleChange = (e) => {
    if (e.target.name === 'type' || e.target.name === 'category') {
      setAddRecipe({ ...addRecipe, [e.target.name]: e.target.id });
    } else {
      setAddRecipe({ ...addRecipe, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    if (
      title &&
      ingredients &&
      description &&
      picture &&
      category &&
      type &&
      dateAdded &&
      userId
    ) {
      axios
        .post(`${REACT_APP_SERVER_ADDRESS}/recipes`, {
          title,
          ingredients,
          description,
          picture,
          category,
          type,
          dateAdded,
          userId,
        })
        .then((res) => res.data)
        .then(() => {
          setSuccessPost(true);
        })
        .catch((err) => {
          console.error(err.response.data.errorMessage);
        });
    } else {
      alert('Certains champs sont obligatoires !');
    }

    e.preventDefault();
  };

  return (
    <section className={styles.addRecipeContainer}>
      <h1>ADD RECIPE</h1>

      {successPost ? <p>Your recipe has been added !</p> : ''}
      <form className={styles.addRecipeForm}>
        <div className={styles.filtersInputs}>
          <label htmlFor="snacks">
            <input
              id="snacks"
              type="radio"
              name="category"
              onChange={(e) => handleChange(e)}
            />
            Snacks
          </label>

          <label htmlFor="drinks">
            <input
              id="drinks"
              type="radio"
              name="category"
              onChange={(e) => handleChange(e)}
            />
            Drinks
          </label>
        </div>

        <label htmlFor="title">
          Title
          <input
            id="title"
            required
            name="title"
            type="text"
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label htmlFor="picture">
          Picture
          <input
            id="picture"
            type="url"
            name="picture"
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label htmlFor="ingredients">
          Ingredients
          <textarea
            name="ingredients"
            id="ingredients"
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label htmlFor="description">
          Description
          <textarea
            name="description"
            id="description"
            onChange={(e) => handleChange(e)}
          />
        </label>

        <div className={styles.filtersInputs}>
          <label htmlFor="healthy">
            <input
              id="healthy"
              type="radio"
              name="type"
              onChange={(e) => handleChange(e)}
            />
            Healthy
          </label>
          <label htmlFor="yummi">
            <input
              id="yummi"
              type="radio"
              name="type"
              onChange={(e) => handleChange(e)}
            />
            Yummi
          </label>
        </div>
      </form>
      <div onClick={handleSubmit}>
        <PrimaryButton>ADD MY RECIPE</PrimaryButton>
      </div>
    </section>
  );
}
