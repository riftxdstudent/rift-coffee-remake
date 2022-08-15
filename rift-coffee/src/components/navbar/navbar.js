import React from 'react';
import './navbar.css';
import Logo from '../../content/image/logo.png';

function navbar() {
  return (
    <div className='n'>
        <div className='n-wrapper'>
          <div className='n-logo'>
            <img src={ Logo } alt='' className='n-logo'></img>
          </div>
            <a className='n-test' href='#'>Home</a>
            <a className='n-test' href='#'>About</a>
            <a className='n-test' href='#'>Location</a>
            <a className='n-test' href='#'>Test</a>
        </div>
    </div>
  )
}

export default navbar