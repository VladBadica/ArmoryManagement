import './App.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterViews from './views';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="page">
        <RouterViews />
      </div>
    </>

  );
}

export default App;
