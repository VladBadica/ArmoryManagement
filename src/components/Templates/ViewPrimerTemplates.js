import React from 'react';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Button, Accordion, Card, Container, Row, Col } from 'react-bootstrap';
import PrimerTemplateService from '../../services/primerTemplateService.js';
import ConfirmationModal from '../ConfirmationModal';

const ViewPrimerTemplates = ({ containerSize }) => {
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
                    <Row className="row">
                        <Col>
                            Make: {make} <br />
                            Model: {model}<br />
                            Size: {size}<br />
                        </Col>
                        <Col className="text-end">
                            <Button
                                variant="danger"
                                onClick={() => { setShowDeletePrimerModal(true); setSelectedPrimerForDelete(id) }}>
                                Delete
                            </Button>
                        </Col>
                    </Row>
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

                <Container className={`overflow-container${containerSize ? "-" + containerSize : ""}`}>
                    <Accordion defaultActiveKey="0" className="overflow-container-content">
                        {renderPrimerTemplates}
                    </Accordion>
                </Container>
            </div>

            {renderConfirmDelete}
        </>
    );
}

export default ViewPrimerTemplates;