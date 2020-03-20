import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';

export default function Header(props) {
   return (
      <div id='banner'>
         <Link to={'/'}>
            <div className='bannerSelector'>Home</div>
         </Link>
         <Link to={'/about'}>
            <div className='bannerSelector'>About Me</div>
         </Link>
         <Link to={'/projects'}>
            <div className='bannerSelector'>Projects</div>
         </Link>
         <a target="_blank" href='https://bootcamp.burlingtoncodeacademy.com/lessons/react/routing-in-react#content' rel="noopener noreferrer">
            <div className='bannerSelector'>BCA</div>
         </a>
      </div>
   )
}
