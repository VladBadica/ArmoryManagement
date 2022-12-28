import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Button, Accordion, Card, Container, Row, Col } from 'react-bootstrap';
import PowderService from '../../services/powderService.js';
import ConfirmationModal from '../ConfirmationModal';

const ViewPowders = ({ showDelete, showAddButton, containerSize }) => {
    const [showDeletePowderModal, setShowDeletePowderModal] = useState(false);
    const [selectedPowderForDelete, setSelectedPowderForDelete] = useState(null);
    const [powders, setPowders] = useState([]);

    const getAllPowders = useCallback(async () => {
        const response = await PowderService.GetAllPowders();

        if (!response.error) {
            setPowders(response.data);
        }
    }, [setPowders]);

    useEffect(() => {
        getAllPowders();
    }, [getAllPowders]);

    const handleDeletePowder = useCallback(async () => {
        if (selectedPowderForDelete === null) {
            return;
        }

        await PowderService.DeletePowder({ id: selectedPowderForDelete });
        setSelectedPowderForDelete(null);
        setShowDeletePowderModal(false)
        await getAllPowders();

    }, [getAllPowders, selectedPowderForDelete]);

    const renderPowders = useMemo(() => {
        if (powders.length <= 0) {
            return <Card>
                <Card.Body>NO POWDERS</Card.Body>
            </Card>
        }
        return powders.map(({ id, make, model, datePurchased, initialCount, remaining, price }) =>
            <Accordion.Item eventKey={id} key={id} >
                <Accordion.Header> {model} </Accordion.Header>
                <Accordion.Body>
                    <Row >
                        <Col >
                            Make: {make} <br />
                            Model: {model}<br />
                            DatePurchase: {datePurchased}<br />
                            Price: {price}<br />
                            InitialCount: {initialCount}<br />
                            Remaining: {remaining}<br />
                        </Col>
                        {showDelete ? <Col md={6} className="text-end">
                            <Button
                                variant="danger"
                                onClick={() => { setShowDeletePowderModal(true); setSelectedPowderForDelete(id) }}>
                                Delete
                            </Button>
                        </Col> : <></>}
                    </Row>
                </Accordion.Body>
            </Accordion.Item >
        )
    }, [powders, setShowDeletePowderModal, showDelete])

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
                <Row className="mb-3">
                    <Col>
                        <h3> Powders </h3>
                    </Col>
                    {
                        showAddButton ?
                            <Col className="text-end">
                                <Link to={routes.AddMaterials}> <Button variant="secondary" className="mt-0">Add Powders </Button> </Link>
                            </Col> :
                            <></>
                    }
                </Row>

                <Container className={`overflow-container${containerSize ? "-" + containerSize : ""}`}>
                    <Accordion defaultActiveKey="0" className="overflow-container-content">
                        {renderPowders}
                    </Accordion>
                </Container>
            </div>

            {renderConfirmDelete}
        </>
    );
}

export default ViewPowders;