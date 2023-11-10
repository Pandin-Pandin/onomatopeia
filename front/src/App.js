import React from 'react';
import './App.css';
import Header from './Header';
import Menu from './utils/Menu'

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <main>
        <div className='icon-top-box'></div>
        <form className="search-form">
          <input id="search" className="search-input-top" type="search" placeholder="Search" />
          <span className="material-symbols-outlined search-button-top">
            search
          </span>
        </form>
        <div className="padding-category-select-box">
          <div className='category-select-box'>
            <div className='category-block '>Sons 1</div>
            <div className='category-block'>Sons 2</div>
            <div className='category-block'>Sons 3</div>
            <div className='category-block'>Sons 4</div>
            <div className='category-block'>Sons 5</div>
            <div className='category-block'>Sons 6</div>
            <div className='category-block'>Sons 7</div>
            <div className='category-block'>Sons 8</div>
            <div className='category-block'>Sons 9</div>
            <div className='category-block'>Sons 10</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;