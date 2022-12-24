import React, { useState } from 'react';
import AddCasingTemplate from '../components/Templates/AddCasingTemplate';
import AddPowderTemplate from '../components/Templates/AddPowderTemplate';
import AddPrimerTemplate from '../components/Templates/AddPrimerTemplate';

const AddTemplates = () => {
    const [selectedOption, setSelectedOption] = useState("casings");


    function onChangeValue(e) {
        setSelectedOption(e.target.value);
    }

    const AddPage = () => {
        if (selectedOption === "casing") {
            return (<AddCasingTemplate />);
        }
        if (selectedOption === "powder") {
            return (<AddPowderTemplate />);
        }
        if (selectedOption === "primer") {
            return (<AddPrimerTemplate />);
        }
    }

    return (
        <div>
            <div onChange={onChangeValue} className="text-center">
                <input type="radio" value="casing" name="ammo" defaultChecked={selectedOption === "casing"} /> Add Casing
                <input style={{ marginLeft: "10px" }} type="radio" value="primer" name="ammo" /> Add Primer
                <input style={{ marginLeft: "10px" }} type="radio" value="powder" name="ammo" /> Add Powder
            </div>
            <AddPage />
        </div>
    );
}

export default AddTemplates;