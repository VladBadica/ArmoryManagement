import './App.css';
import React, {useEffect} from 'react';
import {init} from './data/fauna-queries.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router_Views from './views';
import NavbarComponent from './components/NavbarComponent';



function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <>
    <NavbarComponent/>
    <div className="page">
      <Router_Views/>
    </div>
    </>

  );
}

export default App;
