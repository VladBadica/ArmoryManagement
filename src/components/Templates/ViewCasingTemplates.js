import React from 'react';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Button, Accordion, Card, Container, Row, Col } from 'react-bootstrap';
import CasingTemplateService from '../../services/casingTemplateService.js';
import ConfirmationModal from '../ConfirmationModal';

const ViewCasingTemplates = ({ containerSize }) => {
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
                    <Row>
                        <Col>
                            Make: {make} <br />
                            Calibre: {calibre}<br />
                            Model: {model}<br />
                            Grain: {grain}
                        </Col>
                        <Col className="text-end">
                            <Button
                                variant="danger"
                                onClick={() => { setShowDeleteCasingModal(true); setSelectedCasingForDelete(id) }}>
                                Delete
                            </Button>
                        </Col>
                    </Row>
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

                <Container className={`overflow-container${containerSize ? "-" + containerSize : ""}`}>
                    <Accordion defaultActiveKey="0" className="overflow-container-content">
                        {renderCasingTemplates}
                    </Accordion>
                </Container>
            </div>

            {renderConfirmDelete}
        </>
    );
}

export default ViewCasingTemplates;