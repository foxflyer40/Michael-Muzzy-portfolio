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
                  I am a native Vermonter with a 37 year old degree in programming. (Champlain College class of 1983 - A.S. Data Processing)  Funny thing is... I never used it.  Till now.
            </p>
               <p>
                  I am currently enrolled at Burlington Code Academy, training to enter what will be a third career as a Full Stack Web Developer.
            </p>
               <p>
                  After a career as an ASE certified Master Automotive Technician, working at local repair garages and dealerships, I joined Good News Garage in 1998.
            </p>
               <p>
                  I started out in the repair shop, but in 1999 we received a grant through the federal Job Access and Reverse Commute (JARC) program to develop an alternative transportation model intended to address transportation challenges experience by welfare recipients.  I applied for and was hired as the program manager for the new initiative.
               </p>
               <p>
                  Over the next 7 years we grew this program from inception to a state-wide transportation service helping low-income families transition from state assistance to self-sufficiency.  The program earned recognition as one of the 100 Best Practices for JARC funded projects.
               </p>
               <p>
                  From there I went on to hold other positions within Good News Garage and the parent agency Ascentria Care Alliance (formerly Lutheran Social Services of Northern New England), including Program Director; GNG VT, and Director of Operations; GNG New England.
               </p>
               <p>
                  This second career as a non-profit director allowed me to use my problem-solving skills, learned in the automotive industry, applied to human teams and systems.  Where poorly functioning parts and systems in a vehicle can simply be replaced, people and teams need to be led and ‘grown’ into more highly functional states.
               </p>
               <p>
                  This return to my college education blends both elements.  On the software and development end of things, careful diagnosis (debugging) and specific corrections need to be made.  But Apps are used by human beings, and so I hope to leverage my experience working with diverse stakeholders and partners to help build technology that is accessible to people.
               </p>
            </div>
         </div>
      )
   }
}


export default About