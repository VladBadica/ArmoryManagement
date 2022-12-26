import React from 'react';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Button, Accordion, Card } from 'react-bootstrap';
import CasingService from '../../services/casingService.js';
import ConfirmationModal from '../ConfirmationModal';

const ViewCasings = () => {
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
                    <div className="row">
                        <div className="col-6">
                            Calibre: {calibre}<br />
                            Make: {make} <br />
                            Model: {model}<br />
                            Grain: {grain}<br />
                            DatePurchased: {datePurchased}<br />
                            Price: {price}<br />
                            InitialCount: {initialCount}<br />
                            Remaining: {remaining}<br />
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
    }, [casings, setShowDeleteCasingModal])

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
                <h3 className="mb-3"> Casings</h3>
                <Accordion defaultActiveKey="0" >
                    {renderCasings}
                </Accordion>
            </div>

            {renderConfirmDelete}
        </>
    );
}

export default ViewCasings;