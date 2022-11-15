import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import RequestManager from '../services/RequestManager';

const Home = () => {
    const [data, setData] = useState("test");

    useEffect(() => {
        RequestManager.Request().then((response) => {
            console.log(response);
        })
    }, []);

    return (
        <div>
            <h1 className="mb-5"> Armory Manager</h1>
            <Link to={routes.ViewAmmunitionsPage}> <Button variant="secondary">View Ammunitions </Button> </Link>
            <Link to={routes.AddAmmunitionsPage}> <Button variant="secondary">Add Ammunitions </Button> </Link>
            <p>{data}</p>
        </div>
    )
};

export default Home;