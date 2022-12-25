import './App.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterViews from './views/RouterViews.js';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Router>
        <RouterViews />
      </Router>
    </div>
  )
}

export default App;
