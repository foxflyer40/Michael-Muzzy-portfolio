import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Hobbies from './Hobbies';
import Work from './Work';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/about'} component={About} />
          <Route path={'/projects'} component={Projects} />
          <Route path={'/hobbies'} component={Hobbies} />
          <Route path={'/work'} component={Work} />
        </Switch>
      </div>
    )
  }
}


export default App;
