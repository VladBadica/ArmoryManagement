import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import CasingTemplateService from '../../services/casingTemplateService.js';
import ViewCasingTemplates from './ViewCasingTemplates';

const AddCasingTemplate = () => {

    const handleAddCasing = async (e) => {
        var formData = new FormData(e.target);
        var casing = Object.fromEntries(formData.entries());

        await CasingTemplateService.CreateCasingTemplate({ casing });
    }

    return (
        <Row className="mt-4 mb-4 me-0">
            <Col md={{ offset: 1, span: 5 }}>
                <ViewCasingTemplates></ViewCasingTemplates>
            </Col>

            <Col md={{ offset: 1, span: 4 }}>
                <h3 className="mb-3"> Add Casing Template</h3>
                <Form onSubmit={(e) => handleAddCasing(e)}>
                    <Form.Group className="mb-3">
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

                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}

export default AddCasingTemplate;