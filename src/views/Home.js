import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

const Home = () => {
    return (
        <div className="text-center">
            <h1 className="mb-5"> Armory Manager</h1>
            <Link to={routes.AddTemplates}> <Button variant="secondary">Add Templates </Button> </Link>
            <Link to={routes.AddMaterials}> <Button variant="secondary">Add Materials </Button> </Link>
        </div>
    )
};

export default Home;