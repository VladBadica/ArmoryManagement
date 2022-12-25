import React from 'react';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Button, Accordion, Card } from 'react-bootstrap';
import PrimerService from '../../services/primerService.js';
import ConfirmationModal from '../ConfirmationModal';

const ViewPrimers = () => {
    const [showDeletePrimerModal, setShowDeletePrimerModal] = useState(false);
    const [selectedPrimerForDelete, setSelectedPrimerForDelete] = useState(null);
    const [primers, setPrimers] = useState([]);

    const getAllPrimers = useCallback(async () => {
        const response = await PrimerService.GetAllPrimers();

        if (!response.error) {
            setPrimers(response.data);
        }
    }, [setPrimers]);

    useEffect(() => {
        getAllPrimers();
    }, [getAllPrimers]);

    const handleDeletePrimer = useCallback(async () => {
        if (selectedPrimerForDelete === null) {
            return;
        }

        await PrimerService.DeletePrimer({ id: selectedPrimerForDelete });
        setSelectedPrimerForDelete(null);
        setShowDeletePrimerModal(false)
        await getAllPrimers();

    }, [getAllPrimers, selectedPrimerForDelete]);

    const renderPrimers = useMemo(() => {
        if (primers.length <= 0) {
            return <Card>
                <Card.Body>NO TEMPLATES</Card.Body>
            </Card>
        }
        return primers.map(({ id, make, model, size, datePurchased, price, initialCount, remaining }) =>
            <Accordion.Item eventKey={id} key={id} >
                <Accordion.Header> {model} </Accordion.Header>
                <Accordion.Body>
                    <div className="row">
                        <div className="col-6">
                            Make: {make} <br />
                            Model: {model}<br />
                            Size: {size}<br />
                            DatePurchase: {datePurchased}<br />
                            Price: {price}<br />
                            InitialCount: {initialCount}<br />
                            Remaining: {remaining}<br />
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
    }, [primers, setShowDeletePrimerModal])

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
                <h3 className="mb-3"> Primers</h3>
                <Accordion defaultActiveKey="0" >
                    {renderPrimers}
                </Accordion>
            </div>

            {renderConfirmDelete}
        </>
    );
}

export default ViewPrimers;