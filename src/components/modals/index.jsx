import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function Modals({
  showModal,
  setShowModal,
  showModalSuccess,
  setShowModalSuccess,
  content,
  contentSuccess,
}) {
  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Gyomade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontSize: "30px" }}>{content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showModalSuccess} onHide={() => setShowModalSuccess(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Gyomade</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ fontSize: "30px" }}>{contentSuccess}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModalSuccess(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}
