import React from 'react';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Button, Accordion, Card } from 'react-bootstrap';
import PowderTemplateService from '../../services/powderTemplateService.js';
import ConfirmationModal from '../ConfirmationModal';

const ViewPowderTemplates = () => {
    const [showDeletePowderModal, setShowDeletePowderModal] = useState(false);
    const [selectedPowderForDelete, setSelectedPowderForDelete] = useState(null);
    const [powderTemplates, setPowderTemplates] = useState([]);

    const getAllPowderTemplates = useCallback(async () => {
        const response = await PowderTemplateService.GetAllPowderTemplates();

        if (!response.error) {
            setPowderTemplates(response.data);
        }
    }, [setPowderTemplates]);

    useEffect(() => {
        getAllPowderTemplates();
    }, [getAllPowderTemplates]);

    const handleDeletePowder = useCallback(async () => {
        if (selectedPowderForDelete === null) {
            return;
        }

        await PowderTemplateService.DeletePowderTemplate({ id: selectedPowderForDelete });
        setSelectedPowderForDelete(null);
        setShowDeletePowderModal(false)
        await getAllPowderTemplates();

    }, [getAllPowderTemplates, selectedPowderForDelete]);

    const renderPowderTemplates = useMemo(() => {
        if (powderTemplates.length <= 0) {
            return <Card>
                <Card.Body>NO TEMPLATES</Card.Body>
            </Card>
        }
        return powderTemplates.map(({ id, make, model }) =>
            <Accordion.Item eventKey={id} key={id} >
                <Accordion.Header> {model} </Accordion.Header>
                <Accordion.Body>
                    <div className="row">
                        <div className="col-6">
                            Make: {make} <br />
                            Model: {model}<br />
                        </div>
                        <div className="col-6 text-end">
                            <Button
                                variant="danger"
                                onClick={() => { setShowDeletePowderModal(true); setSelectedPowderForDelete(id) }}>
                                Delete
                            </Button>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item >
        )
    }, [powderTemplates, setShowDeletePowderModal])

    const renderConfirmDelete = useMemo(() => (
        <ConfirmationModal
            show={showDeletePowderModal}
            title={"Delete Powder?"}
            body={`Are you sure you want to delete the powder ${selectedPowderForDelete}?`}
            onCancel={() => setShowDeletePowderModal(false)}
            onConfirm={handleDeletePowder}>

        </ConfirmationModal>
    ), [showDeletePowderModal, setShowDeletePowderModal, handleDeletePowder, selectedPowderForDelete]);

    return (
        <>
            <div >
                <h3 className="mb-3"> Powder Templates</h3>
                <Accordion defaultActiveKey="0" >
                    {renderPowderTemplates}
                </Accordion>
            </div>

            {renderConfirmDelete}
        </>
    );
}

export default ViewPowderTemplates;