import React from 'react';
import { Form, Button } from 'react-bootstrap';
import BulletService from '../services/bulletService';

const AddBullets = () => {
    const handleAddBullet = async (e) => {
        e.preventDefault();
        var formData = new FormData(e.target);
        var bullet = Object.fromEntries(formData.entries());

        const response = await BulletService.CreateBullet(bullet);
        console.log(response)
    }

    return (
        <div className="mt-4 mb-4" style={{ minWidth: "50%", display: 'inline-block' }}>
            <h3> Add Bullet</h3>
            <Form onSubmit={(e) => handleAddBullet(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Make</Form.Label>
                    <Form.Control
                        required
                        type="string"
                        name="make"
                        placeholder="Enter make" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Calibre</Form.Label>
                    <Form.Control
                        required
                        type="string"
                        name="calibre"
                        placeholder="Enter calibre" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                        required
                        type="string"
                        name="model"
                        placeholder="Enter model" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Grain</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        name="grain"
                        defaultValue="0"
                        placeholder="Enter grain value" />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default AddBullets;