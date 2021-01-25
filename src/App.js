import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop.component';



function App() {
  return (
    
    <div className="main-container">
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
