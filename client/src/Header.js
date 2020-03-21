import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';

export default function Header(props) {
   return (
      <div id='banner' className='page'>
         <Link to={'/'}>
            <div className='bannerSelector'>Home</div>
         </Link>
         <Link to={'/about'}>
            <div className='bannerSelector'>About Me</div>
         </Link>
         <Link to={'/projects'}>
            <div className='bannerSelector'>Projects</div>
         </Link>
         <Link to={'/hobbies'}>
            <div className='bannerSelector'>Hobbies</div>
         </Link>
         <Link to={'/work'}>
            <div className='bannerSelector'>Work</div>
         </Link>
         <a target="_blank" href='https://www.burlingtoncodeacademy.com/' rel="noopener noreferrer">
            <div className='bannerSelector'>BCA</div>
         </a>
      </div>
   )
}
