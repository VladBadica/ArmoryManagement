import React, { useState } from 'react';
import AddCasingTemplate from '../components/CasingTemplate/AddCasingTemplate';

const AddTemplates = () => {
    const [selectedOption, setSelectedOption] = useState("casings");


    function onChangeValue(e) {
        setSelectedOption(e.target.value);
    }

    const AddPage = () => {
        if (selectedOption === "casings") {
            return (<AddCasingTemplate />);
        }
    }

    return (
        <div>
            <div onChange={onChangeValue} className="text-center">
                <input type="radio" value="casings" name="ammo" defaultChecked={selectedOption === "casings"} /> Add Casings
                <input style={{ marginLeft: "10px" }} type="radio" value="primers" name="ammo" /> Add Primers
                <input style={{ marginLeft: "10px" }} type="radio" value="powders" name="ammo" /> Add Powders
            </div>
            <AddPage />
        </div>
    );
}

export default AddTemplates;