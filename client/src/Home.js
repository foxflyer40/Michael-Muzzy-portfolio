import React from 'react'
// import Summer2019 from './pictures/Summer2019.jpg'
import './App.css';

class Home extends React.Component {
   constructor(props) {
      super(props)

      this.state = {

      }
   }

   render() {
      return (
         <div className="App" id="homePage">
            <div>
               <div className="image-blurred-edge"></div>
            </div>

            <div>
               <div id="homeName">Michael Muzzy</div>
               <div id='homePageQuote'>
                  Web Developer At-Large<br />
            </div>
            </div>

         </div>

      )
   }
}

export default Home