import React, { useState } from 'react';
import AddBullets from '../components/AddBullets';
import AddPrimers from '../components/AddPrimers';
import AddPowders from '../components/AddPowders';

const AddAmmunitions = () => {
    const [bulletsDetails, setBulletsDetails] = useState({});
    const [primersDetails, setPrimersDetails] = useState({});
    const [powdersDetails, setPowdersDetails] = useState({});
    const [selectedOption, setSelectedOption] = useState("bullets");


    function onChangeValue(e) {
        setSelectedOption(e.target.value);
    }
    const AddPage = () => {
        if (selectedOption === "bullets") {
            return (<AddBullets bullets_details={bulletsDetails} />);
        }
        else if (selectedOption === "primers") {
            return (<AddPrimers primers_details={primersDetails} />);
        }
        else if (selectedOption === "powders") {
            return (<AddPowders powders_details={selectedOption} />);
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