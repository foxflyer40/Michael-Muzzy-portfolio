import React from 'react';
import './App.css';
import TicTacToe from './media/TicTacToe.PNG';
import GeoVermont from './media/GeoVermont.PNG'
import Yelpington from './media/Yelpington.PNG'

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
               <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href='https://github.com/BurlingtonCodeAcademy/tic-tac-toe-foxflyer40'>
                  Tic Tac Toe
               </a>
                  
               </div>
               <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href='https://michael-muzzy-tic-tac-toe.herokuapp.com/'>
                  <img src={(TicTacToe)} alt='Tic-Tac-Toe board'></img>
               </a>
            </label>

            <br />

            <label>
               <div className='projectLabel'>
                  Yelpington
               </div>
               <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href='https://github.com/BurlingtonCodeAcademy/yelpington-foxflyer40'>
                  <img src={(Yelpington)} alt='Yelpington board'></img>
               </a>

            </label>

            <br />

            <label>
               <div className='projectLabel'>
                  GeoVermont
               </div>
               <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href='https://github.com/BurlingtonCodeAcademy/geo-vermonter-anis-michael'>
                  <img src={(GeoVermont)} alt='GeoVermont board'></img>
               </a>

            </label>

         </div>
      )
   }
}

export default Projects