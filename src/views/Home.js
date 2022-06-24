import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    
    return (
        <div>            
            <h1  className="mb-5"> Home page</h1>            
            <Link to='/viewAmmunitions'> <Button variant="secondary">View Ammunitions </Button> </Link>
            <Link to='/addAmmunitions'> <Button variant="secondary">Add Ammunitions </Button> </Link>
            <br/>
        </div>
    )
};

export default Home;