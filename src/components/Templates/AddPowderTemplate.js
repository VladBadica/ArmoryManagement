import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PowderTemplateService from '../../services/powderTemplateService.js';
import ViewPowderTemplates from './ViewPowderTemplates';

const AddPowderTemplate = () => {
    const handleAddPowder = async (e) => {
        var formData = new FormData(e.target);
        var powder = Object.fromEntries(formData.entries());

        await PowderTemplateService.CreatePowderTemplate({ powder });
    }

    return (
        <div className="mt-4 mb-4 row me-0">
            <div className="col-1">
            </div>
            <div className="col-5">
                <ViewPowderTemplates></ViewPowderTemplates>
            </div>

            <div className="col-1">
            </div>

            <div className="col-4">
                <h3 className="mb-3"> Add Powder Template</h3>
                <Form onSubmit={(e) => handleAddPowder(e)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Make</Form.Label>
                        <Form.Control required type="string" name="make" placeholder="Enter make" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Model</Form.Label>
                        <Form.Control required type="string" name="model" placeholder="Enter model" />
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default AddPowderTemplate;