// Header.js
import React from 'react';

function Header() {
  return (
    <header className='nav-header'>
      <div className='menu-btn'>
        <div className='line-menu'></div>
        <div className='line-menu'></div>
        <div className='line-menu'></div>
      </div>
      <nav className='nav-bar'>
        <div className="logo-box-top">
          <div className="top-logo"></div>
          <h1>Onomatopeia</h1>
        </div>
        <div className='nav-links'>
          <div className='close'>
            <div className='line-close'></div>
            <div className='line-close'></div>
          </div>
          <a href='/'>HOME</a>
          <a href='/about'>ABOUT</a>
          <a href='/category'>CATEGORY</a>
          <a href='/tag'>TAGS</a>
          <a href='/words'>WORDS</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;