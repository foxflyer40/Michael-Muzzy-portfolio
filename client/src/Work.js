import React from 'react'
import './App.css';
import Resume from './media/Resume.PNG'
import myResume from './media/myResume.pdf'

class Work extends React.Component {
   constructor(props) {
      super(props)

      this.state = {

      }
   }

   render() {
      return (
         <div id='workPage'>

            <label >
               <div className='workLabel'>
                  (Click resume to download.)
               </div>
               <a href={(myResume)} download>
                  <img src={(Resume)} alt='Resume link'></img>
               </a>
            </label>

         </div>
      )
   }
}

export default Work


