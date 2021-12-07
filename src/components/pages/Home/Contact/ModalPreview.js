import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalPreview = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Email Received Successfully!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Thank You {props.name}.</h4>
                <p>
                    I will contact you shortly via your email.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='dark' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalPreview;