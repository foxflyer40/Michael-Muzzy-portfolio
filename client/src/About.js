import React from 'react'
import './App.css';

class About extends React.Component {
   constructor(props) {
      super(props)

      this.state = {
         
      }
   }

   render() {
      return (
         <div id='aboutPage' >
            <h1>
               It's all about Michael...<br />
            </h1>

            <div id='aboutContent'>
               <p>
                  I grew up in Shelburne, Vermont, the middle child of Bill and
                  Ramona Muzzy.  Mom (a former RN) had a ceramics studio that took up our entire basement with space for 10-15 students, 3 full size kilns and a slip-casting operation.  Dad (a former Mechanic) was an industrial glassblower at IBM.
            </p>
               <p>
                  With a brother on each side: Brion(older), and Ray(younger), I spent my growing up years enjoying school (mostly), playing neighborhood ball, and riding mini-bikes and motorcycles in the woods and meadows behind our home.
            </p>
               <p>
                  I loved to work alongside Dad whenever he was fixing anything, and I discovered in later years the value of the technical skill I absorbed from this.  Often in the late afternoon he would drive over to the Shelburne boat access to "see what the boats were doing".  We would talk about things and he answered questions like, "How come the guage on the dash says 160 deg. is 'Cold' when clearly anything at that temperature is hot?"
            </p>
               <p>

               </p>
            </div>
         </div>
      )
   }
}


export default About