import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';



class Header extends React.Component {
   constructor(props) {
      super(props)

      this.state = {
         
      }
   }

  
   render() {
      return (
         <div id='banner' className='page'>

            <Link to={'/'} className='bannerSelector'>
               <div >Home</div>
            </Link>

            <Link to={'/about'} className='bannerSelector'>
               <div >About Me</div>
            </Link>

            <Link to={'/projects'} className='bannerSelector'>
               <div >Projects</div>
            </Link>

            <Link to={'/hobbies'} className='bannerSelector'>
               <div >Hobbies</div>
            </Link>

            <Link to={'/work'} className='bannerSelector'>
               <div >Work</div>
            </Link>

         </div>
      )
   }
}


export default Header;