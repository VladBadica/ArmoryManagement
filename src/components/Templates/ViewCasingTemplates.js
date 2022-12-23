import React from 'react';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Button, Accordion, Card } from 'react-bootstrap';
import CasingTemplateService from '../../services/casingTemplateService.js';
import ConfirmationModal from '../ConfirmationModal';

const AddCasingTemplate = () => {
    const [showDeleteCasingModal, setShowDeleteCasingModal] = useState(false);
    const [selectedCasingForDelete, setSelectedCasingForDelete] = useState(null);
    const [casingTemplates, setCasingTemplates] = useState([]);

    const getAllCasingTemplates = useCallback(async () => {
        const response = await CasingTemplateService.GetAllCasingTemplates();

        if (!response.error) {
            setCasingTemplates(response.data);
        }
    }, [setCasingTemplates]);

    useEffect(() => {
        getAllCasingTemplates();
    }, [getAllCasingTemplates]);

    const handleDeleteCasing = useCallback(async () => {
        if (selectedCasingForDelete === null) {
            return;
        }

        await CasingTemplateService.DeleteCasingTemplate({ id: selectedCasingForDelete });
        setSelectedCasingForDelete(null);
        setShowDeleteCasingModal(false)
        await getAllCasingTemplates();

    }, [getAllCasingTemplates, selectedCasingForDelete]);

    const renderCasingTemplates = useMemo(() => {
        if (casingTemplates.length <= 0) {
            return <Card>
                <Card.Body>NO TEMPLATES</Card.Body>
            </Card>
        }
        return casingTemplates.map(({ id, make, calibre, model, grain }) =>
            <Accordion.Item eventKey={id} key={id} >
                <Accordion.Header> {calibre} </Accordion.Header>
                <Accordion.Body>
                    <div className="row">
                        <div className="col-6">
                            Make: {make} <br />
                            Calibre: {calibre}<br />
                            Model: {model}<br />
                            Grain: {grain}
                        </div>
                        <div className="col-6 text-end">
                            <Button
                                variant="danger"
                                onClick={() => { setShowDeleteCasingModal(true); setSelectedCasingForDelete(id) }}>
                                Delete
                            </Button>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item >
        )
    }, [casingTemplates, setShowDeleteCasingModal])

    const renderConfirmDelete = useMemo(() => (
        <ConfirmationModal
            show={showDeleteCasingModal}
            title={"Delete Casing?"}
            body={`Are you sure you want to delete the casing ${selectedCasingForDelete}?`}
            onCancel={() => setShowDeleteCasingModal(false)}
            onConfirm={handleDeleteCasing}>

        </ConfirmationModal>
    ), [showDeleteCasingModal, setShowDeleteCasingModal, handleDeleteCasing, selectedCasingForDelete]);

    return (
        <>
            <div >
                <h3 className="mb-3"> Casing Templates</h3>
                <Accordion defaultActiveKey="0" >
                    {renderCasingTemplates}
                </Accordion>
            </div>

            {renderConfirmDelete}
        </>
    );
}

export default AddCasingTemplate;