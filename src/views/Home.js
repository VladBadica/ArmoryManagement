import React from 'react';
import {addGun} from '../data/fauna-queries.js';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function handleAddGun(e) {
    const name = "Glock";
    addGun(name);
}
const Home = () => {
    
    return (
        <div>            
            <h1  className="mb-5"> Home page</h1>            
            <Link to='/ammunitions'> <Button variant="secondary">View Ammunitions </Button> </Link>
            <br/>
            <Button variant="secondary" onClick={handleAddGun}> Add Gun</Button>
        </div>
    )
};

export default Home;