import React, { Component } from 'react';
import './App.css';
import Products from './components/Products';
import Comparison from './components/Comparison';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Products />
        <Comparison key={Math.random()}/> 
      </div>
    );
  } 
}

export default App;
