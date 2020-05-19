import React from 'react';
import './App.css';
import TicTacToe from './media/TicTacToe.PNG';
import GeoVermont from './media/GeoVermontSM.png';
import Yelpington from './media/YelpingtonSM.png';
import ParkBTV from './media/ParkBTV.png'

class Projects extends React.Component {
   constructor(props) {
      super(props)

      this.state = {

      }
   }

   render() {
      console.log(TicTacToe)

      return (
         <div id='projectsPage'>

            <label>
               <div className='projectLabel'>
                  Park Burlington
                  <h6>(BCA capstone project)</h6>
               </div>
               <br />
               <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href='http://park-burlington.herokuapp.com/'>
                  <img src={(ParkBTV)} alt='Park Burlington map'></img>
               </a>
            </label>

            <label>
               <div className='projectLabel'>
                  Tic Tac Toe
               </div>
               <br />
               <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href='https://michael-muzzy-tic-tac-toe.herokuapp.com/'>
                  <img src={(TicTacToe)} alt='Tic-Tac-Toe board'></img>
               </a>
            </label>



            <div id='githubWork'>

               <label>
                  <div className='projectLabel'>
                     Yelpington
                     <h6>(Github link)</h6>
                     <br />
                     <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href='https://github.com/BurlingtonCodeAcademy/yelpington-foxflyer40'>
                        <img src={(Yelpington)} alt='Yelpington board'></img>
                     </a>
                  </div>
               </label>


               <label>
                  <div className='projectLabel'>
                     GeoVermont
                     <h6>(Github link)</h6>
                     <br />
                     <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href='https://github.com/BurlingtonCodeAcademy/geo-vermonter-anis-michael'>
                        <img src={(GeoVermont)} alt='GeoVermont board'></img>
                     </a>
                  </div>
               </label>
            </div>
         </div>
      )
   }
}

export default Projects