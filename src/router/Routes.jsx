import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../views/Home/Home';
import Recipes from '../views/Recipes/Recipes';
import RecipeDetails from '../views/RecipeDetails/RecipeDetails';
import AddRecipe from '../views/AddRecipe/AddRecipe';

export default function Routes() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/profil'></Route>
          <Route exact path='/recipes'>
            <Recipes />
          </Route>
          <Route exact path='/recipes/:id' component={RecipeDetails} />
          <Route path='/add-recipe'>
            <AddRecipe />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
