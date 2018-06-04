import React, { Component } from 'react';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Square from './components/Square';
import People from './components/People';
import Figure from './components/Figure'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header title = "Hello World!" subtitle= "Lolll"/>
        <Paragraph />
        <Square />
        <People />
      </React.Fragment>
    );
  }
}

export default App;
