import './App.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterViews from './views/RouterViews.js';
import { BrowserRouter as Router } from "react-router-dom";
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="page">
        <Router>
          <RouterViews />
        </Router>
      </div>
    </>
  )
}

export default App;
