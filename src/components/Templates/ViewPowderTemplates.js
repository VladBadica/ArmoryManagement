import React from 'react';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Button, Accordion, Card, Container, Row, Col } from 'react-bootstrap';
import PowderTemplateService from '../../services/powderTemplateService.js';
import ConfirmationModal from '../ConfirmationModal';

const ViewPowderTemplates = ({ containerSize }) => {
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
                    <Row>
                        <Col>
                            Make: {make} <br />
                            Model: {model}<br />
                        </Col>
                        <Col className="text-end">
                            <Button
                                variant="danger"
                                onClick={() => { setShowDeletePowderModal(true); setSelectedPowderForDelete(id) }}>
                                Delete
                            </Button>
                        </Col>
                    </Row>
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

                <Container className={`overflow-container${containerSize ? "-" + containerSize : ""}`}>
                    <Accordion defaultActiveKey="0" className="overflow-container-content">
                        {renderPowderTemplates}
                    </Accordion>
                </Container>
            </div>

            {renderConfirmDelete}
        </>
    );
}

export default ViewPowderTemplates;