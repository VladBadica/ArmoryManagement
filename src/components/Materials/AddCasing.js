import React, { useEffect, useMemo, useCallback, useState } from 'react';
import { Form, Button, Dropdown, Row, Col } from 'react-bootstrap';
import CasingService from '../../services/casingService.js';
import CasingTemplateService from '../../services/casingTemplateService.js';
import ViewCasings from './ViewCasings';

const AddCasing = () => {
    const [casingTemplates, setCasingTemplates] = useState([]);
    const [make, setMake] = useState("");
    const [calibre, setCalibre] = useState("");
    const [model, setModel] = useState("");
    const [grain, setGrain] = useState(0);

    const getCasingTemplates = useCallback(async () => {
        const response = await CasingTemplateService.GetAllCasingTemplates();

        if (response) {
            setCasingTemplates(response.data);
        }
    }, []);

    useEffect(() => {
        getCasingTemplates();
    }, [getCasingTemplates]);

    const handleAddCasing = async (e) => {
        var formData = new FormData(e.target);
        var casing = Object.fromEntries(formData.entries());

        await CasingService.CreateCasing({ casing });
    }

    const fillFromTemplate = useCallback((template) => {
        setMake(template.make);
        setCalibre(template.calibre);
        setModel(template.model);
        setGrain(template.grain);
    }, [])

    const renderSelectTemplate = useMemo(() => {
        return <Dropdown>
            <Dropdown.Toggle className="w-100 m-0" variant="secondary">
                Select Template
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100">
                {
                    casingTemplates.length > 0 ?
                        casingTemplates.map(template =>
                            <Dropdown.Item key={template.id} onClick={() => fillFromTemplate(template)}>
                                {template.make} - {template.calibre} - {template.model} - {template.grain}
                            </Dropdown.Item>
                        ) :
                        <></>
                }
            </Dropdown.Menu>
        </Dropdown>
    }, [casingTemplates, fillFromTemplate]);

    return (
        <Row className="mt-4 mb-4 me-0">
            <Col md={{ offset: 1, span: 5 }}>
                <ViewCasings showDelete={true}></ViewCasings>
            </Col>

            <Col md={{ offset: 1, span: 4 }}>
                <Row>
                    <Col>
                        <h3 className="mb-3"> Add Casing </h3>
                    </Col>
                    <Col>
                        {renderSelectTemplate}
                    </Col>
                </Row>

                <Form onSubmit={(e) => handleAddCasing(e)}>
                    <Form.Group className="mb-1">
                        <Form.Label>Make</Form.Label>
                        <Form.Control
                            required
                            type="string"
                            name="make"
                            value={make}
                            onChange={(e) => setMake(e.target.value)}
                            placeholder="Enter make" />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Calibre</Form.Label>
                        <Form.Control
                            required
                            type="string"
                            name="calibre"
                            value={calibre}
                            onChange={(e) => setCalibre(e.target.value)}
                            placeholder="Enter calibre" />
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
                        <Form.Label>Grain</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            name="grain"
                            value={grain}
                            onChange={(e) => setGrain(e.target.value)}
                            placeholder="Enter grain value" />
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