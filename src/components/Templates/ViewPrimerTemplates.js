import React from 'react';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Button, Accordion, Card } from 'react-bootstrap';
import PrimerTemplateService from '../../services/primerTemplateService.js';
import ConfirmationModal from '../ConfirmationModal';

const ViewPrimerTemplates = () => {
    const [showDeletePrimerModal, setShowDeletePrimerModal] = useState(false);
    const [selectedPrimerForDelete, setSelectedPrimerForDelete] = useState(null);
    const [primerTemplates, setPrimerTemplates] = useState([]);

    const getAllPrimerTemplates = useCallback(async () => {
        const response = await PrimerTemplateService.GetAllPrimerTemplates();

        if (!response.error) {
            setPrimerTemplates(response.data);
        }
    }, [setPrimerTemplates]);

    useEffect(() => {
        getAllPrimerTemplates();
    }, [getAllPrimerTemplates]);

    const handleDeletePrimer = useCallback(async () => {
        if (selectedPrimerForDelete === null) {
            return;
        }

        await PrimerTemplateService.DeletePrimerTemplate({ id: selectedPrimerForDelete });
        setSelectedPrimerForDelete(null);
        setShowDeletePrimerModal(false)
        await getAllPrimerTemplates();

    }, [getAllPrimerTemplates, selectedPrimerForDelete]);

    const renderPrimerTemplates = useMemo(() => {
        if (primerTemplates.length <= 0) {
            return <Card>
                <Card.Body>NO TEMPLATES</Card.Body>
            </Card>
        }
        return primerTemplates.map(({ id, make, model, size }) =>
            <Accordion.Item eventKey={id} key={id} >
                <Accordion.Header> {model} </Accordion.Header>
                <Accordion.Body>
                    <div className="row">
                        <div className="col-6">
                            Make: {make} <br />
                            Model: {model}<br />
                            Size: {size}<br />
                        </div>
                        <div className="col-6 text-end">
                            <Button
                                variant="danger"
                                onClick={() => { setShowDeletePrimerModal(true); setSelectedPrimerForDelete(id) }}>
                                Delete
                            </Button>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item >
        )
    }, [primerTemplates, setShowDeletePrimerModal])

    const renderConfirmDelete = useMemo(() => (
        <ConfirmationModal
            show={showDeletePrimerModal}
            title={"Delete Primer?"}
            body={`Are you sure you want to delete the primer ${selectedPrimerForDelete}?`}
            onCancel={() => setShowDeletePrimerModal(false)}
            onConfirm={handleDeletePrimer}>

        </ConfirmationModal>
    ), [showDeletePrimerModal, setShowDeletePrimerModal, handleDeletePrimer, selectedPrimerForDelete]);

    return (
        <>
            <div >
                <h3 className="mb-3"> Primer Templates</h3>
                <Accordion defaultActiveKey="0" >
                    {renderPrimerTemplates}
                </Accordion>
            </div>

            {renderConfirmDelete}
        </>
    );
}

export default ViewPrimerTemplates;