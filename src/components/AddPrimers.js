import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useState} from 'react';
import {addPrimer} from '../data/fauna-queries.js';

const AddPrimers = ({primers_details}) =>{
    
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

    function handleAddPrimer(e){        
        e.preventDefault();
        addPrimer(primerData);
    }

    function handleFormChange(key, isInt, e){     
        newPrimerData = {...primerData};  
        newPrimerData[key] = isInt ? parseInt(e.target.value): e.target.value;
        setPrimerData(primerData => ({...newPrimerData}));
    }

    return(
        <div className="formAddContainer">
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