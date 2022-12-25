import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PowderService from '../../services/powderService.js';
import ViewPowders from './ViewPowders';

const AddPowder = () => {
    const handleAddPowder = async (e) => {
        var formData = new FormData(e.target);
        var powder = Object.fromEntries(formData.entries());

        await PowderService.CreatePowder({ powder });
    }

    return (
        <div className="mt-4 mb-4 row me-0">
            <div className="col-1">
            </div>
            <div className="col-5">
                <ViewPowders></ViewPowders>
            </div>

            <div className="col-1">
            </div>

            <div className="col-4">
                <h3 className="mb-3"> Add Powder </h3>
                <Form onSubmit={(e) => handleAddPowder(e)}>
                    <Form.Group className="mb-1">
                        <Form.Label>Make</Form.Label>
                        <Form.Control required type="string" name="make" placeholder="Enter make" />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Model</Form.Label>
                        <Form.Control required type="string" name="model" placeholder="Enter model" />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Date Purchased</Form.Label>
                        <Form.Control required type="string" name="datePurchased" placeholder="Enter date purchased" />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Initial Count</Form.Label>
                        <Form.Control required type="number" name="initialCount" defaultValue="0" placeholder="Enter initial count" />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Price</Form.Label>
                        <Form.Control required type="number" name="price" defaultValue="0" placeholder="Enter the price" />
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default AddPowder;