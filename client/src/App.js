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
import Form from './Form'
import TestForm from './TestForm'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalOpen: false

    }
  }

  // Handlers for modal window
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

  // Main page layout
  render() {
    return (
      <div id='body'>
        <div id='content'>
          <div id='top'> {/*Header - at top of all pages */}
            <Header />
          </div>
          <Switch>  {/* Component page paths */}
            <Route exact path={'/'} component={Home} />
            <Route path={'/about'} component={About} />
            <Route path={'/projects'} component={Projects} />
            <Route path={'/hobbies'} component={Hobbies} />
            <Route path={'/work'} component={Work} />
          </Switch>
          <div id='bottom'>  {/* Footer - sticks to bottom and gets pushed down by content */}
            <Footer modalOpen={this.state.modalOpen} handleOpen={this.handleOpen} />
          </div>


          <div id='modal' style={{ visibility: this.state.modalOpen ? 'visible' : 'hidden' }} >
            <br />
            <button id='closeButton' onClick={this.handleClose}>Close Window</button>
            <br />
           {/* <Form /> */}
           <TestForm />
          </div>
        </div>

      </div>
    )
  }
}


export default App;
