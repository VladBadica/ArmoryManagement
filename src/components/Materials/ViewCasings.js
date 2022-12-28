import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Button, Accordion, Card, Row, Col, Container } from 'react-bootstrap';
import CasingService from '../../services/casingService.js';
import ConfirmationModal from '../ConfirmationModal';

const ViewCasings = ({ showDelete, showAddButton, containerSize }) => {
    const [showDeleteCasingModal, setShowDeleteCasingModal] = useState(false);
    const [selectedCasingForDelete, setSelectedCasingForDelete] = useState(null);
    const [casings, setCasings] = useState([]);

    const getAllCasings = useCallback(async () => {
        const response = await CasingService.GetAllCasings();

        if (!response.error) {
            setCasings(response.data);
        }
    }, [setCasings]);

    useEffect(() => {
        getAllCasings();
    }, [getAllCasings]);

    const handleDeleteCasing = useCallback(async () => {
        if (selectedCasingForDelete === null) {
            return;
        }

        await CasingService.DeleteCasing({ id: selectedCasingForDelete });
        setSelectedCasingForDelete(null);
        setShowDeleteCasingModal(false)
        await getAllCasings();

    }, [getAllCasings, selectedCasingForDelete]);

    const renderCasings = useMemo(() => {
        if (casings.length <= 0) {
            return <Card>
                <Card.Body>NO CASINGS</Card.Body>
            </Card>
        }
        return casings.map(({ id, make, calibre, model, grain, datePurchased, price, initialCount, remaining }) =>
            <Accordion.Item eventKey={id} key={id} >
                <Accordion.Header> {calibre} </Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <Col>
                            Calibre: {calibre}<br />
                            Make: {make} <br />
                            Model: {model}<br />
                            Grain: {grain}<br />
                            DatePurchased: {datePurchased}<br />
                            Price: {price}<br />
                            InitialCount: {initialCount}<br />
                            Remaining: {remaining}<br />
                        </Col>

                        {showDelete ?
                            <Col md={6} className="text-end">
                                <Button
                                    variant="danger"
                                    onClick={() => { setShowDeleteCasingModal(true); setSelectedCasingForDelete(id) }}>
                                    Delete
                                </Button>
                            </Col> :
                            <></>
                        }
                    </Row>
                </Accordion.Body>
            </Accordion.Item >
        )
    }, [casings, setShowDeleteCasingModal, showDelete])

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
            <div>
                <Row className="mb-3">
                    <Col>
                        <h3> Casings</h3>
                    </Col>
                    {
                        showAddButton ?
                            <Col className="text-end">
                                <Link to={routes.AddMaterials}> <Button variant="secondary" className="mt-0">Add Casings </Button> </Link>
                            </Col> :
                            <></>
                    }
                </Row>
                <Container className={`overflow-container${containerSize ? "-" + containerSize : ""}`}>
                    <Accordion defaultActiveKey="0" className="overflow-container-content">
                        {renderCasings}
                    </Accordion>
                </Container>

            </div>

            {renderConfirmDelete}
        </>
    );
}

export default ViewCasings;