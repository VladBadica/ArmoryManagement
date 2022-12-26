import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import CasingService from '../../services/casingService.js';
import ViewCasings from './ViewCasings';

const AddCasing = () => {

    const handleAddCasing = async (e) => {
        var formData = new FormData(e.target);
        var casing = Object.fromEntries(formData.entries());

        await CasingService.CreateCasing({ casing });
    }

    return (
        <Row className="mt-4 mb-4 me-0">
            <Col md={{ offset: 1, span: 5 }}>
                <ViewCasings showDelete={true}></ViewCasings>
            </Col>

            <Col md={{ offset: 1, span: 4 }}>
                <h3 className="mb-3"> Add Casing </h3>
                <Form onSubmit={(e) => handleAddCasing(e)}>
                    <Form.Group className="mb-1">
                        <Form.Label>Make</Form.Label>
                        <Form.Control required type="string" name="make" placeholder="Enter make" />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Calibre</Form.Label>
                        <Form.Control required type="string" name="calibre" placeholder="Enter calibre" />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Model</Form.Label>
                        <Form.Control required type="string" name="model" placeholder="Enter model" />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Grain</Form.Label>
                        <Form.Control required type="number" name="grain" defaultValue="0" placeholder="Enter grain value" />
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
            </Col>
        </Row>
    );
}

export default AddCasing;