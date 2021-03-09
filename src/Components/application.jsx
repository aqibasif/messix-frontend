import React, { Component } from 'react';
import Navbar from './navbar';
import AppBody from './appBody';
import './stylesheet.css';

class Application extends Component {
  state = {};
  render() {
    return (
      <div className='application'>
        <Navbar />
        <AppBody />
      </div>
    );
  }
}

export default Application;
