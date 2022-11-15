import React, { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const AddBullets = ({ bullets_details }) => {

    const [errorMessage, setErrorMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [bulletData, setBulletData] = useState({
        date_purchased: "",
        make: "",
        calibre: "",
        model: "",
        grain: 0,
        price: 0,
        unit_per_box: 0,
        available: 0,
        used: 0,
    });

    var newBulletData = { ...bulletData };

    useEffect(() => {
        if (bullets_details && bullets_details.makes) {
            newBulletData.make = bullets_details.makes[0];
            setBulletData(x => ({ ...newBulletData }));
        }
        if (bullets_details && bullets_details.calibres) {
            newBulletData.calibre = bullets_details.calibres[0];
            setBulletData(x => ({ ...newBulletData }));
        }
        if (bullets_details && bullets_details.models) {
            newBulletData.model = bullets_details.models[0];
            setBulletData(x => ({ ...newBulletData }));
        }
    }, [bullets_details]);

    async function handleAddBullet(e) {

    }

    function handleFormChange(key, isInt, e) {
        newBulletData = { ...bulletData };
        newBulletData[key] = isInt ? parseInt(e.target.value) : e.target.value;
        setBulletData(bulletData => ({ ...newBulletData }));
    }

    const BAlert = () => {
        if (showAlert) {
            return (
                <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                    <h4>Error: {errorMessage}</h4>
                </Alert>
            )
        }
        if (showAlertSuccess) {
            return (
                <Alert variant="success" onClose={() => setShowAlertSuccess(false)} dismissible>
                    <h4>Successfully added!</h4>
                </Alert>
            )
        }
        if (!showAlertSuccess && !showAlert) {
            return (<div style={{ marginTop: "86px" }}></div>)
        }
    }

    return (
        <div className="formAddContainer">
            <BAlert />

            <h3> Add Bullet</h3>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Date puchased</Form.Label>
                    <Form.Control
                        required
                        value={bulletData.date_purchased}
                        onChange={(e) => handleFormChange("date_purchased", false, e)}
                        type="text"
                        placeholder="Enter the date of the purchase" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Make</Form.Label>
                    <Form.Select
                        value={bulletData.make}
                        onChange={(e) => handleFormChange("make", false, e)}
                    >
                        {bullets_details?.makes?.map((make) =>
                        (<option key={make}>
                            {make}
                        </option>)
                        )}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Calibre</Form.Label>
                    <Form.Select
                        value={bulletData.calibre}
                        onChange={(e) => handleFormChange("calibre", false, e)}
                    >
                        {bullets_details?.calibres?.map((calibre) =>
                        (<option key={calibre}>
                            {calibre}
                        </option>)
                        )}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Model</Form.Label>
                    <Form.Select
                        value={bulletData.model}
                        onChange={(e) => handleFormChange("model", false, e)}
                    >
                        {bullets_details?.models?.map((model) =>
                        (<option key={model}>
                            {model}
                        </option>)
                        )}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Grain</Form.Label>
                    <Form.Control
                        required
                        value={bulletData.grain}
                        onChange={(e) => handleFormChange("grain", true, e)}
                        type="number"
                        placeholder="Enter grain value" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        required
                        value={bulletData.price}
                        onChange={(e) => handleFormChange("price", true, e)}
                        type="number"
                        placeholder="Enter price value" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Unit per box</Form.Label>
                    <Form.Control required
                        value={bulletData.unit_per_box}
                        onChange={(e) => handleFormChange("unit_per_box", true, e)}
                        type="number"
                        placeholder="How many units per box" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Number Available</Form.Label>
                    <Form.Control
                        required
                        value={bulletData.available}
                        onChange={(e) => handleFormChange("available", true, e)}
                        type="number"
                        placeholder="How many available" />
                </Form.Group>


                <Button variant="primary" type="submit" onClick={(e) => handleAddBullet(e)}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default AddBullets;