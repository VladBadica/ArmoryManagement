import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmationModal = ({ show, title, body, onConfirm, onCancel }) => {

    return (
        <Modal
            show={show}
            backdrop="static">
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{body}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" onClick={onCancel}>Cancel</Button>
                <Button variant="primary" onClick={onConfirm}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmationModal;