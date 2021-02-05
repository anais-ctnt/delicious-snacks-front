import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import addRecipes from '../../assets/icons/add.svg';
import home from '../../assets/icons/home.svg';
import recipes from '../../assets/icons/recipes.svg';
import account from '../../assets/icons/account.svg';

export default function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.navbarContent}>
        <Link to="/">
          <li className={styles.navbarLink}>
            <img src={home} alt="Go to home page" />
            Home
          </li>
        </Link>
        <Link to="/profil">
          <li className={styles.navbarLink}>
            <img src={account} alt="Go to profil page" />
            Profil
          </li>
        </Link>
        <Link to="/recipes">
          <li className={styles.navbarLink}>
            <img src={recipes} alt="Go to all recipes" />
            Recipes
          </li>
        </Link>
        <Link to="/add-recipe">
          <li className={styles.navbarLink}>
            <img src={addRecipes} alt="Go to add recipe" />
            Add recipe
          </li>
        </Link>
      </ul>
    </nav>
  );
}
