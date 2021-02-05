import React from 'react';
//import Tablero from './componentes/tablero'
//import logo from './logo.svg';
import './App.css';
//import Menu from './componentes/menujuego';
//import {BrowserRouter as Router, Route} from 'react-router-dom';
import Inicio from './componentes/inicio';
import Total from './componentes/total';

function App() {
  return (
    <Total/>
    /*<div className="App">
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
    </div>*/
  );
}

export default App;
