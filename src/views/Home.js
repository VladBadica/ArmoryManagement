import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

const Home = () => {
    
    return (
        <div>            
            <h1  className="mb-5"> Armory Manager</h1>            
            <Link to={routes.ViewAmmunitionsPage}> <Button variant="secondary">View Ammunitions </Button> </Link>
            <Link to={routes.AddAmmunitionsPage}> <Button variant="secondary">Add Ammunitions </Button> </Link>
            <Link to={routes.ReloadsPage}> <Button variant="secondary">Reloads </Button> </Link>
        </div>
    )
};

export default Home;