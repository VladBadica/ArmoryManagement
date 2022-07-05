import React, { useEffect } from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import {useState} from 'react';
import {addPowder} from '../data/fauna-queries.js';

const AddPowders = ({powders_details}) =>{
    
    const [errorMessage, setErrorMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [powderData, setPowderData] = useState({ 
        date_purchased: "",        
        make: "",
        model: "",
        price: 0,
        grains_per_pot: 0,
        price_per_grain: 0,
        available: 0,
        used: 0,
    });        
    
    var newPowderData = {...powderData};

    useEffect(() =>{
        if(powders_details && powders_details.makes){
            newPowderData.make = powders_details.makes[0];
            setPowderData(x => ({...newPowderData}));
        }
        if(powders_details && powders_details.models){
            newPowderData.model = powders_details.models[0];
            setPowderData(x => ({...newPowderData}));
        }
    }, [powders_details]);

    function handleAddPowder(e){        
        e.preventDefault();
        if(!powderData.date_purchased || powderData.date_purchased.length <= 0){
            setShowAlertSuccess(false);
            setShowAlert(true);
            setErrorMessage("There is no date selected");
        }
        else{ 
            addPowder(powderData).then((r) => {
            setShowAlertSuccess(true);
            setShowAlert(false);      
           }).catch((err) => {
            setErrorMessage(err);
            setShowAlert(true);
            setShowAlertSuccess(false);
           });
        }    
    }

    function handleFormChange(key, isInt, e){     
        newPowderData = {...powderData};  
        newPowderData[key] = isInt ? parseInt(e.target.value): e.target.value;
        setPowderData(powderData => ({...newPowderData}));
    }

    const BAlert = () => {
        if(showAlert){
            return(
                <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                   <h4>Error: {errorMessage}</h4>
                </Alert>
            )
        }
        if(showAlertSuccess){
            return(
                <Alert variant="success" onClose={() => setShowAlertSuccess(false)} dismissible>
                   <h4>Successfully added!</h4>
                </Alert>
            )
        }
        if(!showAlertSuccess && !showAlert){
            return(<div style={{marginTop: "86px"}}></div>)
        }
    }

    return(
        <div className="formAddContainer">
            <BAlert/>
           
            <h3> Add Powder</h3>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Date puchased</Form.Label>
                    <Form.Control 
                        required 
                        value={powderData.date_purchased} 
                        onChange={(e) => handleFormChange("date_purchased", false, e)}
                        type="text" 
                        placeholder="Enter the date of the purchase" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Make</Form.Label>
                    <Form.Select 
                        value={powderData.make}
                        onChange={(e) => handleFormChange("make", false, e)}
                        >
                        {powders_details?.makes?.map((make) => 
                            (<option key={make}>
                                {make}
                            </option>)
                        )}
                    </Form.Select>
                </Form.Group>                

                <Form.Group className="mb-3">
                    <Form.Label>Model</Form.Label>
                    <Form.Select 
                        value={powderData.model}                        
                        onChange={(e) => handleFormChange("model", false, e)}
                    >
                        {powders_details?.models?.map((model) => 
                            (<option key={model}>
                                {model}
                            </option>)
                        )}
                    </Form.Select>
                </Form.Group>                

                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control 
                        required 
                        value={powderData.price}   
                        onChange={(e) => handleFormChange("price", true, e)}
                        type="number" 
                        placeholder="Enter price value" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Grains per pot</Form.Label>
                    <Form.Control required 
                        value={powderData.grains_per_pot}  
                        onChange={(e) => handleFormChange("grains_per_pot", true, e)}
                        type="number" 
                        placeholder="How grains per pot" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Number Available</Form.Label>
                    <Form.Control 
                        required 
                        value={powderData.available} 
                        onChange={(e) => handleFormChange("available", true, e)}
                        type="number" 
                        placeholder="How many available" />
                </Form.Group>


                <Button variant="primary" type="submit" onClick={(e) => handleAddPowder(e)}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default AddPowders;