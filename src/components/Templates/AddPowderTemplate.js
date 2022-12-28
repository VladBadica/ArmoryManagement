import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import PowderTemplateService from '../../services/powderTemplateService.js';
import ViewPowderTemplates from './ViewPowderTemplates';

const AddPowderTemplate = () => {
    const handleAddPowder = async (e) => {
        var formData = new FormData(e.target);
        var powder = Object.fromEntries(formData.entries());

        await PowderTemplateService.CreatePowderTemplate({ powder });
    }

    return (
        <Row className="mt-4 mb-4 me-0">
            <Col md={{ offset: 1, span: 5 }}>
                <ViewPowderTemplates></ViewPowderTemplates>
            </Col>

            <Col md={{ offset: 1, span: 4 }}>
                <h3 className="mb-3"> Add Powder Template</h3>
                <Form onSubmit={(e) => handleAddPowder(e)}>
                    <Form.Group className="mb-1">
                        <Form.Label>Make</Form.Label>
                        <Form.Control required type="string" name="make" placeholder="Enter make" />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Model</Form.Label>
                        <Form.Control required type="string" name="model" placeholder="Enter model" />
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}

export default AddPowderTemplate;