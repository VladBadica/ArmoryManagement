import React, { useState } from 'react';
import AddCasing from '../components/Materials/AddCasing';
import AddPowder from '../components/Materials/AddPowder';
import AddPrimer from '../components/Materials/AddPrimer';

const AddMaterials = () => {
    const [selectedOption, setSelectedOption] = useState("casing");

    function onChangeValue(e) {
        setSelectedOption(e.target.value);
    }

    const AddPage = () => {
        if (selectedOption === "casing") {
            return (<AddCasing />);
        }
        if (selectedOption === "powder") {
            return (<AddPowder />);
        }
        if (selectedOption === "primer") {
            return (<AddPrimer />);
        }
    }

    return (
        <div>
            <h3 className="text-center">Add Material</h3>
            <div onChange={onChangeValue} className="text-center">
                <input type="radio" value="casing" name="ammo" defaultChecked={selectedOption === "casing"} /> Add Casing
                <input style={{ marginLeft: "10px" }} type="radio" value="powder" name="ammo" /> Add Powder
                <input style={{ marginLeft: "10px" }} type="radio" value="primer" name="ammo" /> Add Primer
            </div>
            <AddPage />
        </div>
    );
}

export default AddMaterials;