import React, { useEffect, useState } from "react";
import "./index.scss";
import { Button, Modal } from "react-bootstrap";
export default function SizeTutor() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("open-modals");
    } else {
      document.body.classList.remove("open-modals");
    }

    return () => {
      document.body.classList.remove("open-modals");
    };
  }, [showModal]);

  return (
    <>
      <div className="icon" onClick={handleOpenModal}>
        <div className="icon-inner">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            style={{ enableBackground: "new 0 0 100 100" }}
            xmlSpace="preserve"
          >
            <path d="M75.4,1.1C76,1.4,76.6,1.6,77,2c6.9,6.9,13.8,13.8,20.7,20.6c1,1,1,2.2,0,3.2c-0.2,0.2-0.4,0.4-0.6,0.6	C73.6,49.9,50.2,73.4,26.7,96.9c-0.2,0.2-0.4,0.4-0.6,0.6c-1,0.9-2.2,1-3.2,0C16.1,90.5,9.2,83.6,2.3,76.7c-1-1.1-0.9-2.2,0.2-3.4	c6-6,11.9-11.9,17.9-17.9c9.4-9.4,18.8-18.8,28.2-28.2c8.3-8.3,16.6-16.7,25-25C74,1.8,74.7,1.5,75.4,1.1z M63.5,18.7	c-3,2.9-5.9,5.8-9,8.9c0.2,0.2,0.6,0.4,0.8,0.6c1.2,1.2,2.4,2.4,3.6,3.6c0.6,0.7,0.8,1.4,0.5,2.3c-0.3,0.8-0.9,1.3-1.7,1.3	c-0.7-0.1-1.4-0.4-1.9-0.8c-1.5-1.3-2.8-2.8-4.1-4c-3,3-6,5.9-9,9c0.2,0.2,0.5,0.4,0.8,0.7c2.1,2.1,4.3,4.3,6.4,6.4	c1.3,1.3,0.8,3.2-0.8,3.6c-0.9,0.2-1.7-0.2-2.3-0.8c-2.1-2.1-4.3-4.3-6.4-6.4c-0.2-0.2-0.5-0.5-0.6-0.6c-3,3-5.9,6-8.9,8.9	c1.3,1.3,2.8,2.6,4.1,4.1c0.5,0.5,0.9,1.4,0.8,2c-0.1,0.6-0.7,1.3-1.3,1.6c-0.8,0.4-1.6,0.1-2.2-0.5c-1.5-1.5-2.9-2.9-4.3-4.3	c-3,3-5.9,5.9-8.9,8.9c0.2,0.2,0.4,0.5,0.7,0.7c2.1,2.1,4.3,4.3,6.4,6.4c1,1,1.1,2.3,0.2,3.2c-0.9,0.9-2,0.9-3.1-0.2	c-1.9-1.9-3.8-3.8-5.8-5.7c-0.5-0.5-1-1-1.3-1.4c-3.1,3.1-6.1,6.1-9,9c5.8,5.8,11.7,11.7,17.6,17.6C47.4,70,70.3,47.1,93,24.3	c-5.9-5.9-11.8-11.8-17.7-17.7c-2.9,2.9-5.9,5.8-8.9,8.8c0.2,0.2,0.4,0.4,0.6,0.7c2.2,2.2,4.4,4.3,6.5,6.5c0.5,0.5,0.8,1.3,0.8,2	c0,0.8-0.6,1.4-1.4,1.7c-0.9,0.3-1.6,0.1-2.2-0.6C68.3,23.4,65.8,21,63.5,18.7z" />
          </svg>
        </div>
        <span className="text">Hướng dẫn chọn size</span>
      </div>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Size Guide</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Insert your size guide content here */}
          <center>
            <img
              src="https://leika.vn/wp-content/uploads/2023/04/bang-size-leika-moi.jpg"
              alt="size"
            />
          </center>
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
