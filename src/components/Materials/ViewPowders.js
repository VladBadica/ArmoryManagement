import React from 'react';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Button, Accordion, Card } from 'react-bootstrap';
import PowderService from '../../services/powderService.js';
import ConfirmationModal from '../ConfirmationModal';

const ViewPowders = () => {
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
                    <div className="row">
                        <div className="col-6">
                            Make: {make} <br />
                            Model: {model}<br />
                            DatePurchase: {datePurchased}<br />
                            Price: {price}<br />
                            InitialCount: {initialCount}<br />
                            Remaining: {remaining}<br />
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
    }, [powders, setShowDeletePowderModal])

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
                <h3 className="mb-3"> Powders</h3>
                <Accordion defaultActiveKey="0" >
                    {renderPowders}
                </Accordion>
            </div>

            {renderConfirmDelete}
        </>
    );
}

export default ViewPowders;