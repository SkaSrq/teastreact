import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap'
import './App.css';
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Navbar</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
