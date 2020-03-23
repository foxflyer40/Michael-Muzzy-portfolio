import React from 'react'
import RCAV8R from './media/RCAV8R.jpg'
import Echo from './media/Echo.jpg'


class Hobbies extends React.Component {
   constructor(props) {
      super(props)

      this.state = {

      }
   }

   render() {
      return (
         <div id='hobbyPage'>

            <label >
               <div className='hobbyLabel'>
                  RC Aviation
               </div>
               <a 
               target="_blank"
               rel="noopener noreferrer"
               href='http://www.greenmountainrc.org/'>
                  <img src={(RCAV8R)} alt='Link to RC Aviation'></img>
               </a>
            </label>

            <label >
               <div className='hobbyLabel'>
                  Photography(will build a carousel or link to gallery)
               </div>
               <a href='/'>
                  <img src={(Echo)} alt='Link to Photography'></img>
               </a>
            </label>


         </div>
      )
   }
}

export default Hobbies