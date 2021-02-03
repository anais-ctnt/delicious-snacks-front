import React from 'react';
import styles from './Navbar.module.css';
import addRecipes from '../../assets/icons/add.svg';
import home from '../../assets/icons/home.svg';
import recipes from '../../assets/icons/recipes.svg';
import account from '../../assets/icons/account.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.navbarContent}>
        <Link to='/'>
          <li className={styles.navbarLink}>
            <img src={home} alt='Go to home page'></img>Home
          </li>
        </Link>
        <Link to='/profil'>
          <li className={styles.navbarLink}>
            <img src={account} alt='Go to profil page'></img>Profil
          </li>
        </Link>
        <Link to='/recipes'>
          <li className={styles.navbarLink}>
            <img src={recipes} alt='Go to all recipes'></img>Recipes
          </li>
        </Link>
        <Link to='/add-recipe'>
          <li className={styles.navbarLink}>
            <img src={addRecipes} alt='Go to add recipe'></img>Add recipe
          </li>
        </Link>
      </ul>
    </nav>
  );
}
