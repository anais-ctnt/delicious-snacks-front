import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Recipes from '../views/Recipes/Recipes';

export default function Routes() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home'></Route>
          <Route path='/profil'></Route>
          <Route path='/recipes'>
            <Recipes />
          </Route>
          <Route path='/add-recipe'></Route>
        </Switch>
      </Router>
    </div>
  );
}
