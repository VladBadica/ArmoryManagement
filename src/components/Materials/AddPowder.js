import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Form, Button, Dropdown, Row, Col } from 'react-bootstrap';
import PowderService from '../../services/powderService.js';
import PowderTemplateService from '../../services/powderTemplateService.js';
import ViewPowders from './ViewPowders';

const AddPowder = () => {
    const [powderTemplates, setPowderTemplates] = useState([]);
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");

    const getPowderTemplates = useCallback(async () => {
        const response = await PowderTemplateService.GetAllPowderTemplates();

        if (response) {
            setPowderTemplates(response.data);
        }
    }, []);

    const handleAddPowder = async (e) => {
        var formData = new FormData(e.target);
        var powder = Object.fromEntries(formData.entries());

        await PowderService.CreatePowder({ powder });
    }

    useEffect(() => {
        getPowderTemplates();
    }, [getPowderTemplates]);

    const fillFromTemplate = useCallback((template) => {
        setMake(template.make);
        setModel(template.model);
    }, [])

    const renderSelectTemplate = useMemo(() => {
        return <Dropdown>
            <Dropdown.Toggle className="w-100 m-0" variant="secondary">
                Select Template
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100">
                {
                    powderTemplates.length > 0 ?
                        powderTemplates.map(template =>
                            <Dropdown.Item key={template.id} onClick={() => fillFromTemplate(template)}>
                                {template.make} - {template.model}
                            </Dropdown.Item>
                        ) :
                        <></>
                }
            </Dropdown.Menu>
        </Dropdown>
    }, [powderTemplates, fillFromTemplate]);

    return (
        <Row className="mt-4 mb-4 me-0">
            <Col md={{ offset: 1, span: 5 }}>
                <ViewPowders showDelete={true}></ViewPowders>
            </Col>

            <Col md={{ offset: 1, span: 4 }}>
                <Row>
                    <Col>
                        <h3 className="mb-3"> Add Powder </h3>
                    </Col>
                    <Col>
                        {renderSelectTemplate}
                    </Col>
                </Row>
                <Form onSubmit={(e) => handleAddPowder(e)}>
                    <Form.Group className="mb-1">
                        <Form.Label>Make</Form.Label>
                        <Form.Control
                            required
                            value={make}
                            onChange={(e) => setMake(e.target.value)}
                            type="string"
                            name="make"
                            placeholder="Enter make" />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Model</Form.Label>
                        <Form.Control
                            required
                            type="string"
                            name="model"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            placeholder="Enter model" />
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

export default AddPowder;