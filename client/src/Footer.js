import React from 'react'
import { Link } from 'react-router-dom';
import './App.css'

class Footer extends React.Component {
   constructor(props) {
      super(props)

      this.state = {

      }
   }


   render() {
      return (
         <div id='footer'>

            <Link to={'/'} className='footerSelector'>
               <div >LinkedIn</div>
            </Link>

            <Link to={'/'} className='footerSelector'>
               <div >Github</div>
            </Link>

            <div >
               <div className='footerSelector' onClick={this.props.handleOpen} >Contact Me</div>
            </div>

         </div>
      )
   }
}

export default Footer;