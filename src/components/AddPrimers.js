import React, { useEffect } from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import {useState} from 'react';
import {addPrimer} from '../data/fauna-queries.js';

const AddPrimers = ({primers_details}) =>{
    
    const [errorMessage, setErrorMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [primerData, setPrimerData] = useState({ 
        date_purchased: "",        
        make: "",
        model: "",
        price: 0,
        unit_per_box: 0,
        price_per_unit: 0,
        available: 0,
        used: 0,
    });

    var newPrimerData = {...primerData};

    useEffect(() =>{
        if(primers_details && primers_details.makes){
            newPrimerData.make = primers_details.makes[0];
            setPrimerData(x => ({...newPrimerData}));
        }
        if(primers_details && primers_details.models){
            newPrimerData.model = primers_details.models[0];
            setPrimerData(x => ({...newPrimerData}));
        }
    }, [primers_details]);

    function handleAddPrimer(e){        
        e.preventDefault();
        if(!primerData.date_purchased || primerData.date_purchased.length <= 0){
            setErrorMessage("There is no date selected");
            setShowAlert(true);
            setShowAlertSuccess(false);
        }
        else{ 
            addPrimer(primerData).then((r) => {
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
        newPrimerData = {...primerData};  
        newPrimerData[key] = isInt ? parseInt(e.target.value): e.target.value;
        setPrimerData(primerData => ({...newPrimerData}));
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
            <h3> Add Primer</h3>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Date puchased</Form.Label>
                    <Form.Control 
                        required 
                        value={primerData.date_purchased} 
                        onChange={(e) => handleFormChange("date_purchased", false, e)}
                        type="text" 
                        placeholder="Enter the date of the purchase" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Make</Form.Label>
                    <Form.Select 
                        value={primerData.make}
                        onChange={(e) => handleFormChange("make", false, e)}
                        >
                        {primers_details?.makes?.map((make) => 
                            (<option key={make}>
                                {make}
                            </option>)
                        )}
                    </Form.Select>
                </Form.Group>                

                <Form.Group className="mb-3">
                    <Form.Label>Model</Form.Label>
                    <Form.Select 
                        value={primerData.model}                        
                        onChange={(e) => handleFormChange("model", false, e)}
                    >
                        {primers_details?.models?.map((model) => 
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
                        value={primerData.price}   
                        onChange={(e) => handleFormChange("price", true, e)}
                        type="number" 
                        placeholder="Enter price value" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Unit per box</Form.Label>
                    <Form.Control required 
                        value={primerData.unit_per_box}  
                        onChange={(e) => handleFormChange("unit_per_box", true, e)}
                        type="number" 
                        placeholder="How many units per box" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Number Available</Form.Label>
                    <Form.Control 
                        required 
                        value={primerData.available} 
                        onChange={(e) => handleFormChange("available", true, e)}
                        type="number" 
                        placeholder="How many available" />
                </Form.Group>


                <Button variant="primary" type="submit" onClick={(e) => handleAddPrimer(e)}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default AddPrimers;