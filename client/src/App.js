import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { CreateVideogame } from './components/createVideogame/CreateVideogame';
import {Home} from './components/Home/Home';
import  {LandingPage}  from './components/LandingPage/LandingPage';
import {DetailedCard} from './components/DetailedCard/DetailedCard';
import {About} from './components/About/About';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/create' component={CreateVideogame} />
      <Route exact path='/about' component={About} />
      <Route exact path='/videogame/:id' component={DetailedCard} />
      
    </Switch>
  </div>
  );
}

export default App;