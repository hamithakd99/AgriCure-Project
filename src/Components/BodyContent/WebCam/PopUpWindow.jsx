import React from "react";
import { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Webcam from "react-webcam";
import imageScan from "../../../assets/image-processing.png";
import "./PopUpWindow.css";

function PopUpWindow({ onStop }) {
  const [show, setShow] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const webcamRef = useRef(null);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  };

  useEffect(() => {
    return () => {
      if (
        webcamRef.current &&
        webcamRef.current.video &&
        webcamRef.current.video.srcObject
      ) {
        webcamRef.current.video.srcObject
          .getTracks()
          .forEach((track) => track.stop());
      }
      if (onStop) onStop();
    };
  }, [onStop]);

  return (
    <>
      <div>
        <div className="image-scanner d-flex flex-column align-items-center justify-content-around rounded-3">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Captured"
              width={250}
              className="captured-one"
            />
          ) : (
            <>
              <img
                src={imageScan}
                alt="image-upload"
                sizes="60"
                className="previous-image"
              />
              <p>Launch Camera to Update here</p>
            </>
          )}
        </div>

        <div className="d-flex flex-column my-3">
          <Button variant="primary" onClick={handleShow}>
            Launch Camera
          </Button>
          <Button className="update-btn btn btn-success mt-3">Update</Button>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        className="d-flex flex-column align-items-center"
      >
        <Modal.Header closeButton>
          <Modal.Title className="fs-3">Web Camera</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="100%"
          />
          <Button className="my-3" onClick={capture}>
            Capture
          </Button>
          {/* {imageSrc && <img src={imageSrc} alt="Captured" />} */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUpWindow;
