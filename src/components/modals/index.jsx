import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Modals({
  showModal,
  setShowModal,
  showModalSuccess,
  setShowModalSuccess,
  content,
  contentSuccess,
}) {

  const nav = useNavigate()

  const handleCloseModal = () => {
    setShowModalSuccess(false);
    nav("/")
  };


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
        <p style={{ fontSize: "20px" }}>{contentSuccess}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}
