import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Hobbies from './Hobbies';
import Work from './Work';
import Footer from './Footer'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalOpen: false

    }
  }

  handleOpen = () => {
    this.setState({
      modalOpen: true
    })
  }

  handleClose = () => {
    this.setState({
      modalOpen: false
    })
  }

  render() {
    return (
      <div>
        <div id='top'>
          <Header />
        </div>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/about'} component={About} />
          <Route path={'/projects'} component={Projects} />
          <Route path={'/hobbies'} component={Hobbies} />
          <Route path={'/work'} component={Work} />
        </Switch>
        {/* <div id='bottom'> */}
          <Footer modalOpen={this.state.modalOpen} handleOpen={this.handleOpen} />
        {/* </div> */}
        <div id='modal' style={{ visibility: this.state.modalOpen ? 'visible' : 'hidden' }} >
          <h1>Hello! I am a Modal</h1>
          <button id='closeButton' onClick={this.handleClose}>Close modal</button>
        </div>
      </div>
    )
  }
}


export default App;
