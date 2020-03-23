import React from 'react'
import { Link } from 'react-router-dom';
import './App.css'

class Footer extends React.Component {
   constructor(props) {
      super(props)

      this.state = {

      }
   }

// Footer with links to social media and modal popup for contact info and form
   render() {
      return (
         <div id='footer'>

            <a target="_blank" href='https://www.linkedin.com/in/michael-muzzy/' rel="noopener noreferrer" className='bannerSelector'>
               <div >LinkedIn</div>
            </a>

            <a target="_blank" href='https://github.com/foxflyer40' rel="noopener noreferrer" className='bannerSelector'>
               <div >Github</div>
            </a>

            <div >
               <div className='footerSelector' onClick={this.props.handleOpen} >Contact Me</div>
            </div>

         </div>
      )
   }
}

export default Footer;
