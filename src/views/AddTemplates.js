import React, { useState } from 'react';
import AddCasingTemplate from '../components/Templates/AddCasingTemplate';
import AddPowderTemplate from '../components/Templates/AddPowderTemplate';
import AddPrimerTemplate from '../components/Templates/AddPrimerTemplate';

const AddTemplates = () => {
    const [selectedOption, setSelectedOption] = useState("casing");

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
            <h3 className="text-center">Add Template</h3>
            <div onChange={onChangeValue} className="text-center">
                <input type="radio" value="casing" name="ammo" defaultChecked={selectedOption === "casing"} /> Add Casing
                <input style={{ marginLeft: "10px" }} type="radio" value="powder" name="ammo" /> Add Powder
                <input style={{ marginLeft: "10px" }} type="radio" value="primer" name="ammo" /> Add Primer
            </div>
            <AddPage />
        </div>
    );
}

export default AddTemplates;