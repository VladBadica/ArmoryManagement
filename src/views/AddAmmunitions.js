import React, { useState } from 'react';
import AddBullets from '../components/AddBullets';

const AddAmmunitions = () => {
    const [selectedOption, setSelectedOption] = useState("bullets");


    function onChangeValue(e) {
        setSelectedOption(e.target.value);
    }
    const AddPage = () => {
        if (selectedOption === "bullets") {
            return (<AddBullets />);
        }
    }
    return (
        <div>
            <div onChange={onChangeValue}>
                <input type="radio" value="bullets" name="ammo" defaultChecked={selectedOption === "bullets"} /> Add Bullets
                <input style={{ marginLeft: "10px" }} type="radio" value="primers" name="ammo" /> Add Primers
                <input style={{ marginLeft: "10px" }} type="radio" value="powders" name="ammo" /> Add Powders
            </div>
            <AddPage />
        </div>
    );
}

export default AddAmmunitions;