import React from "react";
import "./modal.css";
import Modal from "react-bootstrap/Modal";


function SimpleModal(props) {

  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          {/* <button onClick={props.onHide} */}
          <button onClick={() => props.onHide(props.reload)}          
          className="btn greenbtn mb-3"
          >Close</button>   
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SimpleModal;