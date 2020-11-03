import React from "react";
import "./LocationModal.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import States from "../States/States"


function LocationModal(props) {
  //console.log(props.data)
    
  return (
    <>  
        {/* when 'Attendees is clicked, exand the modal to show the attendees data */}
        <Modal dialogClassName="location-modal"
          show={props.data.modalVisible} 
          backdrop="static"
          keyboard={false}>

        <Modal.Body className="classesModalBody">
          <Container fluid id="mainContainer">
            <Row>
              <Col>
                <h4>{props.data.modalTitle}</h4>          
                <Form noValidate validated={props.validated} id="class-form" onSubmit={props.onLocationSubmit}>
                  <Form.Row>
                    <Form.Group as={Col} className="class-form-group">
                        <Form.Label htmlFor="name">Location Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          id="name" 
                          className="form-control" 
                          isInvalid={props.data.errors.name} 
                          required 
                          value={props.data.name} 
                          onChange={props.locationChangeHandler} 
                          name="name" 
                          placeholder="Enter title"/>
                          <Form.Control.Feedback type="invalid">
                            Please enter a location name
                          </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} className="class-form-group">
                        <Form.Label htmlFor="addr1">Address 1</Form.Label>
                        <Form.Control 
                          type="text" 
                          id="addr1" 
                          className="form-control" 
                          isInvalid={props.data.errors.addr1} 
                          required 
                          value={props.data.addr1} 
                          onChange={props.locationChangeHandler} 
                          name="addr1" 
                          placeholder="Enter address 1"/>
                          <Form.Control.Feedback type="invalid">
                            Please enter a street address
                          </Form.Control.Feedback>
                    </Form.Group>   
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} className="class-form-group">
                        <Form.Label htmlFor="addr2">Address 2</Form.Label>
                        <Form.Control 
                          type="text" 
                          id="addr2" 
                          className="form-control" 
                          value={props.data.addr2} 
                          onChange={props.locationChangeHandler} 
                          name="addr2" 
                          placeholder="Enter address 2"/>
                    </Form.Group>    
                  </Form.Row>
                  <Form.Row>
                    <Col xs={6}>
                      <Form.Group className="class-form-group">
                          <Form.Label htmlFor="city">City</Form.Label>
                          <Form.Control 
                            type="text" 
                            id="city" 
                            className="form-control" 
                            isInvalid={props.data.errors.city} 
                            value={props.data.city} 
                            onChange={props.locationChangeHandler} 
                            name="city" 
                            placeholder="Enter city"
                            required/>
                            <Form.Control.Feedback type="invalid">
                                Please enter a city
                            </Form.Control.Feedback>
                      </Form.Group>    
                    </Col>
                    <Col xs={3}>
                      <Form.Group className="class-form-group">
                          <Form.Label htmlFor="state">State</Form.Label>
                            <Form.Control 
                              as="select" 
                              id="state"
                              className="form-control"
                              isInvalid={props.data.errors.state} 
                                                  value={props.data.state} 
                                                  onChange={props.locationChangeHandler}
                              name="state" 
                              placeholder="Enter state"
                              required>
                            <States />
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                              Please enter a state
                            </Form.Control.Feedback>                  
                      </Form.Group> 
                    </Col>
                    <Col xs={3}>
                      <Form.Group className="class-form-group">
                          <Form.Label htmlFor="zip">Zip</Form.Label>
                          <Form.Control 
                            type="text" 
                            id="zip" 
                            className="form-control" 
                            isInvalid={props.data.errors.zip} 
                            value={props.data.zip} 
                            onChange={props.locationChangeHandler} 
                            name="zip" 
                            placeholder="Enter zip"
                            required/>
                          <Form.Control.Feedback type="invalid">
                              Invalid zip
                          </Form.Control.Feedback>                  
                      </Form.Group>
                    </Col> 
                  </Form.Row>
                  <Form.Group className="class-form-group-cancelled">
                      <Form.Check type="checkbox" inline label="Active?" id="cancelled" checked={props.data.active} value={props.data.active} onChange={props.locationChangeHandler} name="active"/>
                  </Form.Group>                                                                                                         

                  <div className="modalClassesButtons">                  
                    <button 
                      type="button"
                      onClick={() => props.onHide(props.reload)}     
                      className="btn greenbtn m-2">
                      Close No Save
                    </button>           
                  
                    <button 
                      type="submit"    
                      className="btn greenbtn m-2">
                      Submit
                    </button>  
                  </div>

                </Form>
              </Col>              
            </Row>
          </Container>          

        </Modal.Body>
      </Modal>
    </>
  );
}

export default LocationModal;