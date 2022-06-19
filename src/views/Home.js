import React from 'react';
import {addGun} from '../data/fauna-queries.js';
import Button from 'react-bootstrap/Button';

function handleAddGun(e) {
    const name = "Glock";
    addGun(name);
}

function handleViewAmmunitions(e) {

}

const Home = () => {
    return (
        <div>            
            <h1  className="mb-5"> Home page</h1>            
            <Button variant="secondary" onClick={handleViewAmmunitions}> View Ammunitions</Button>
            <br/>
            <Button variant="secondary" onClick={handleAddGun}> Add Gun</Button>
        </div>
    )
};

export default Home;