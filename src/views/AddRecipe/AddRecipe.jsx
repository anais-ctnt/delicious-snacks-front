import React, { useState } from 'react';
import axios from 'axios';

import PrimaryButton from '../../components/common/PrimaryButton';

import styles from './AddRecipe.module.css';

export default function AddRecipe() {
  const [successPost, setSuccessPost] = useState(false);
  function todayDate() {
    let d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

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
    date_added,
    user_id,
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
      date_added &&
      user_id
    ) {
      axios
        .post(`${REACT_APP_SERVER_ADDRESS}/recipes`, {
          title,
          ingredients,
          description,
          picture,
          category,
          type,
          date_added,
          user_id,
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
          <input
            id='snacks'
            type='radio'
            name='category'
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor='snacks'>Snacks</label>

          <input
            id='drinks'
            type='radio'
            name='category'
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor='drinks'> Drinks</label>
        </div>

        <label htmlFor='title'>Title</label>
        <input
          id='title'
          required
          name='title'
          type='text'
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor='picture'>Picture</label>
        <input
          id='picture'
          type='url'
          name='picture'
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor='ingredients'>Ingredients </label>
        <textarea
          name='ingredients'
          id='ingredients'
          onChange={(e) => handleChange(e)}
        ></textarea>
        <label htmlFor='description'>Description </label>
        <textarea
          name='description'
          id='description'
          onChange={(e) => handleChange(e)}
        ></textarea>

        <div className={styles.filtersInputs}>
          <input
            id='healthy'
            type='radio'
            name='type'
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor='healthy'> Healthy</label>

          <input
            id='yummi'
            type='radio'
            name='type'
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor='yummi'> Yummi</label>
        </div>
      </form>
      <div onClick={(e) => handleSubmit(e)}>
        <PrimaryButton>ADD MY RECIPE</PrimaryButton>
      </div>
    </section>
  );
}
