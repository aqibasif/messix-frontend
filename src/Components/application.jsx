import React, { Component } from 'react';
import './stylesheet.css';
import Navbar from './navbar';

class Application extends Component {
  state = {};
  render() {
    return (
      <div className='application'>
        <Navbar />
      </div>
    );
  }
}

export default Application;
