import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { Form, Button, Dropdown, Row, Col } from 'react-bootstrap';
import PrimerService from '../../services/primerService.js';
import PrimerTemplateService from '../../services/primerTemplateService.js';
import ViewPrimers from './ViewPrimers';

const AddPrimer = () => {
    const [primerTemplates, setPrimerTemplates] = useState([]);
    const [make, setMake] = useState("");
    const [size, setSize] = useState(0);
    const [model, setModel] = useState("");

    const getPrimerTemplates = useCallback(async () => {
        const response = await PrimerTemplateService.GetAllPrimerTemplates();

        if (response) {
            setPrimerTemplates(response.data);
        }
    }, []);

    const handleAddPrimer = async (e) => {
        var formData = new FormData(e.target);
        var primer = Object.fromEntries(formData.entries());

        await PrimerService.CreatePrimer({ primer });
    }

    useEffect(() => {
        getPrimerTemplates();
    }, [getPrimerTemplates]);

    const fillFromTemplate = useCallback((template) => {
        setMake(template.make);
        setSize(template.size);
        setModel(template.model);
    }, [])

    const renderSelectTemplate = useMemo(() => {
        return <Dropdown>
            <Dropdown.Toggle className="w-100 m-0" variant="secondary">
                Select Template
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100">
                {
                    primerTemplates.length > 0 ?
                        primerTemplates.map(template =>
                            <Dropdown.Item key={template.id} onClick={() => fillFromTemplate(template)}>
                                {template.make} - {template.model} - {template.size}
                            </Dropdown.Item>
                        ) :
                        <></>
                }
            </Dropdown.Menu>
        </Dropdown>
    }, [primerTemplates, fillFromTemplate]);

    return (
        <Row className="mt-4 mb-4 me-0">
            <Col md={{ offset: 1, span: 5 }}>
                <ViewPrimers showDelete={true}></ViewPrimers>
            </Col>

            <Col md={{ offset: 1, span: 4 }}>
                <Row>
                    <Col>
                        <h3 className="mb-3"> Add Primer </h3>
                    </Col>
                    <Col>
                        {renderSelectTemplate}
                    </Col>
                </Row>
                <Form onSubmit={(e) => handleAddPrimer(e)}>
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
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            name="model"
                            placeholder="Enter model" />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Size</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            name="size"
                            placeholder="Enter size" />
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

export default AddPrimer;