import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function One() {
  return (
    <div>
      <h1>Cach so 1</h1>
      <h3>Kieu ham binh thuong</h3>
    </div>
  );
}

var Two=function(){
  return (
    <div>
      <h1>Cach so 2</h1>
      <h3>Kieu ham anonymous</h3>
    </div>
  );
}

var Three = () => (
                    <div>
                      <h1>Cach so 3</h1>
                      <h3>Kieu ham arrow</h3>
                    </div>
                  );


class Four extends Component {
  render() {
    return (
      <div>
        <h1>Cach so 4</h1>
        <h3>Kieu class</h3>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <One></One>
      <hr></hr>
      <Two></Two>
      <hr></hr>
      <Three></Three>
      <hr></hr>
      <Four></Four>
    </div>
  );
}

export default App;