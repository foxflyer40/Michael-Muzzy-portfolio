import React from 'react'
// import Summer2019 from './pictures/Summer2019.jpg'
import './App.css';

export default function Home(props) {
   return (
      <div className="App" className="page">
         {/*          
         <a >
            
            <img id='homePhoto' src={Summer2019} alt='Summer 2019 photo' ></img>
         </a> */}

         <div>
            <div className="image-blurred-edge"></div>
         </div>
         <div>
            <div>Michael Muzzy</div>

            <div id='homePageQuote'>
               Web Developer At-Large<br />
            (when I am not at-play)
         </div>
         </div>

      </div>

   )
}
