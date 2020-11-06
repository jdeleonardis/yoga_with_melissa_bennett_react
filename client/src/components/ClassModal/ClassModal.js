import React from "react";
import Moment from "moment";
//import DateTimePicker from 'react-datetime-picker';
import "./classModal.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function ClassModal(props) {
  //console.log(props.data)
  Moment.locale('en')

  let locations = props.locations.map((location) =>
    <option key={location._id} data_key={location._id}>{location.name}</option>
  );

  locations.push(<option value="none" key="none" selected disabled hidden> 
                    Select an Option 
                  </option> );

  // console.log(locations)
  //console.log(props.data.errors.message)

  return (
    <>  
        <Modal dialogClassName="class-modal-regular"
          show={props.data.modalVisible} 
          backdrop="static"
          keyboard={false}>

        <Modal.Body className="classesModalBody">
          <Container fluid id="mainContainer">          
            <Row>
              <Col>
                <h4>{props.data.modalTitle}</h4>          
                <Form noValidate validated={props.validated} id="class-form" onSubmit={props.onClassSubmit}>                  
                  <Form.Row>
                    <Col>
                      <Form.Group className="class-form-group">
                          <Form.Label htmlFor="title">Title</Form.Label>
                          <Form.Control 
                            type="text" 
                            id="title" 
                            className="form-control" 
                            isInvalid={props.data.errors.title} 
                            required 
                            value={props.data.title} 
                            onChange={props.changeHandler} 
                            name="title" 
                            placeholder="Enter title"/>
                          <Form.Control.Feedback type="invalid">
                            Please enter a title
                          </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col xs={6}>
                    {/* <Form.Group controlID="formStartDate" className="class-form-group"> */}
                    <Form.Group className="class-form-group">
                      <Form.Label htmlFor="dateStart">Start Date and Time:</Form.Label>
                      <Form.Control 
                          type="datetime-local" 
                          id="dateStart" 
                          name="dateStart" 
                          className="form-control" 
                          isInvalid={props.data.errors.date} 
                          required 
                          onChange={props.onStartChange}
                          value={props.data.dateStart} />
                      {/* <DateTimePicker
                        id="dateStart"
                        name="dateStart"    
                        className="form-control"               
                        required
                        amPmAriaLabel="Select AM/PM"
                        calendarAriaLabel="Toggle calendar"
                        dayAriaLabel="Day"
                        hourAriaLabel="Hour"
                        maxDetail="minute"
                        minuteAriaLabel="Minute"
                        monthAriaLabel="Month"
                        nativeInputAriaLabel="Date and time"
                        yearAriaLabel="Year"
                        format="MM/dd/yyyy hh:mm a"
                        clearIcon={null}
                        disableClock={true}
                        locale="en-US"
                        onChange={props.onStartChange}
                        value={new Date(props.data.dateStart)}                    
                      />                  */}
                    </Form.Group>
                    </Col>
                    <Col xs={6}>
                    {/* <Form.Group controlID="formEndDate" className="class-form-group"> */}
                    <Form.Group className="class-form-group">
                      <Form.Label htmlFor="dateEnd">End Date and Time:</Form.Label>
                      {/* <DateTimePicker
                        id="dateEnd"
                        name="dateEnd"    
                        className="form-control"               
                        required
                        amPmAriaLabel="Select AM/PM"
                        calendarAriaLabel="Toggle calendar"
                        dayAriaLabel="Day"
                        hourAriaLabel="Hour"
                        maxDetail="minute"
                        minuteAriaLabel="Minute"
                        monthAriaLabel="Month"
                        nativeInputAriaLabel="Date and time"
                        yearAriaLabel="Year"
                        format="MM/dd/yyyy hh:mm a"
                        clearIcon={null}
                        disableClock={true}
                        locale="en-US"
                        onChange={props.onEndChange}
                        value={new Date(props.data.dateEnd)} 
                        isInvalid={props.data.errors.date}                                    
                      />                  */}
                      <Form.Control 
                          type="datetime-local" 
                          id="dateEnd"
                          name="dateEnd" 
                          className="form-control" 
                          isInvalid={props.data.errors.date} 
                          required 
                          onChange={props.onEndChange}
                          value={props.data.dateEnd} />
                      <Form.Control.Feedback type="invalid">
                        Please enter a start date before the end date.
                      </Form.Control.Feedback>
                    </Form.Group>                    
                    </Col>
                  </Form.Row>                
                  <Form.Row>
                    {/* <Form.Group controlID="formLocation" className="class-form-group"> */}
                    <Form.Group as={Col} className="class-form-group">
                        <Form.Label htmlFor="locationName">Location:</Form.Label>
                        <Form.Control 
                          as="select"                  
                          className="form-control"
                          id="locationName" 
                          name="locationName" 
                          isInvalid={props.data.errors.location} 
                          // defaultValue="none"
                          value={props.data.locationName}
                          onChange={props.changeHandler}                  
                          required>

                          {locations}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please select a location.
                        </Form.Control.Feedback>
                    </Form.Group>   

                    <Form.Group as={Col} className="class-form-group">
                        <Form.Label htmlFor="maxParticipants">Max Participants:</Form.Label>
                        <Form.Control 
                          type="number"                  
                          className="form-control"
                          id="maxParticipants" 
                          name="maxParticipants" 
                          value={props.data.maxParticipants}
                          onChange={props.changeHandler}/>
                    </Form.Group>                     
                  </Form.Row>

                  {/* <Form.Group controlID="formCancelled" className="class-form-group-cancelled"> */}
                  <Form.Group className="class-form-group-cancelled">
                      <Form.Check type="checkbox" inline label="Cancelled?" id="cancelled" checked={props.data.cancelled} value={props.data.cancelled} onChange={props.changeHandler} name="cancelled"/>
                  </Form.Group>       
                  {/* <Form.Group controlID="formCancellationText" className={`class-form-group ${props.data.cancelled ? "" : "invisible"}`}> */}
                  <Form.Group className={`class-form-group ${props.data.cancelled ? "" : "invisible"}`}>                    
                      <Form.Label htmlFor="cancelemail">Cancellation Email:</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        className="form-control" 
                        id="cancelemail" 
                        rows="5" 
                        value={props.data.cancelemail} 
                        onChange={props.changeHandler} 
                        isInvalid={props.data.errors.email} 
                        name="cancelemail"/>
                      <Form.Control.Feedback type="invalid">
                        Please enter the email text to be sent.
                      </Form.Control.Feedback>
                  </Form.Group>
                  <div className="modalClassesButtons">                 
                    <button 
                      type="button"
                      onClick={props.showAttendees}
                      className="btn greenbtn m-2">
                      Attendees
                    </button> 
 
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
            <Row>
              {/* when 'Attendees is clicked, show the attendees data */}
              <Col className={`${props.data.showAttendees ? "" : "invisible"}`}>
                <hr></hr>
                <h4>Class Attendees</h4>
                <div>
                  {props.data.attendeeNames.map((attendee,i) => ( 
                    //<p key={i}>{attendee} + " " + {props.data.attendeeEmailAddresses[i]}</p>
                    <p key={i}>
                      <b>{attendee}</b><br></br>
                      {props.data.attendeeEmailAddresses[i]}
                    </p>
                  ))}                  
                </div>            
              </Col>
            </Row>
          </Container>          

        </Modal.Body>
      </Modal>
    </>
  );
}

export default ClassModal;