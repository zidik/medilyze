import React, { Component } from 'react';
import './App.css';
import  Header from './Header';
import Agents from './Agents'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Agents />

      </div>
    );
  }
}

export default App;
