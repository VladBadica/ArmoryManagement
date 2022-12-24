import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PrimerTemplateService from '../../services/primerTemplateService.js';
import ViewPrimerTemplates from './ViewPrimerTemplates';

const AddPrimerTemplate = () => {
    const handleAddPrimer = async (e) => {
        var formData = new FormData(e.target);
        var primer = Object.fromEntries(formData.entries());

        await PrimerTemplateService.CreatePrimerTemplate({ primer });
    }

    return (
        <div className="mt-4 mb-4 row me-0">
            <div className="col-1">
            </div>
            <div className="col-5">
                <ViewPrimerTemplates></ViewPrimerTemplates>
            </div>

            <div className="col-1">
            </div>

            <div className="col-4">
                <h3 className="mb-3"> Add Primer Template</h3>
                <Form onSubmit={(e) => handleAddPrimer(e)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Make</Form.Label>
                        <Form.Control required type="string" name="make" placeholder="Enter make" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Model</Form.Label>
                        <Form.Control required type="string" name="model" placeholder="Enter model" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Size</Form.Label>
                        <Form.Control required type="string" name="model" placeholder="Enter size" />
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default AddPrimerTemplate;