import React, { useEffect, useState } from 'react';
import AddBullets from '../components/AddBullets';
import AddPrimers from '../components/AddPrimers';
import AddPowders from '../components/AddPowders';
import {useDispatch, useSelector} from 'react-redux';
import { getBulletsDetails, getPrimersDetails, getPowdersDetails } from '../actions/ammunitionsActions';

const AddAmmunitions = () => {
    const {bullets_details} = useSelector((state) => state.storeBulletsDetails);
    const {primers_details} = useSelector((state) => state.storePrimersDetails);
    const {powders_details} = useSelector((state) => state.storePowdersDetails);
    const [selectedOption, setSelectedOption] = useState("bullets");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBulletsDetails());
        dispatch(getPrimersDetails());
        dispatch(getPowdersDetails());
      }, [dispatch]);

    function onChangeValue(e) {
       setSelectedOption(e.target.value);
    }
    const AddPage = () => {
        if(selectedOption === "bullets"){
            return(<AddBullets bullets_details={bullets_details}/>);
        }
        else if(selectedOption === "primers") {            
            return(<AddPrimers primers_details={primers_details}/>);
        }
        else if(selectedOption === "powders") {
            return(<AddPowders powders_details={powders_details}/>);     
        }
    }
    return (
        <div>
        <div onChange={onChangeValue}>
            <input type="radio" value="bullets" name="ammo" defaultChecked={selectedOption === "bullets"}/> Add Bullets
            <input style={{marginLeft: "10px"}} type="radio" value="primers" name="ammo" /> Add Primers
            <input style={{marginLeft: "10px"}} type="radio" value="powders" name="ammo" /> Add Powders
        </div> 
        <AddPage/>
        </div>
    );
}

export default AddAmmunitions;