import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Hobbies from './Hobbies';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/about'} component={About} />
        <Route path={'/projects'} component={Projects} />
        
      </Switch>
    </div>
  )
}

export default App;
