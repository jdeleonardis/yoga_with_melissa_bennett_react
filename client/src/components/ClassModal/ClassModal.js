import React from "react";
import Moment from "moment";
import DateTimePicker from 'react-datetime-picker';
import "./classModal.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";


function ClassModal(props) {
  // console.log(props.data)
  Moment.locale('en')

  let locations = props.locations.map((location) =>
    <option key={location._id} data_key={location._id}>{location.name}</option>
  );

  locations.push(<option value="none" selected disabled hidden> 
                    Select an Option 
                  </option> );

  //console.log(locations)

  return (
    <>
        <Modal dialogClassName="class-modal-regular"
          show={props.data.modalVisible} 
          backdrop="static"
          keyboard={false}>

        <Modal.Body className="classesModalBody">
          <h4>{props.data.modalTitle}</h4>
          <Form id="class-form">
            <Form.Group controlID="formTitle" className="class-form-group">
                <Form.Label htmlFor="title">Title</Form.Label>
                <Form.Control type="text" id="title" className="form-control" required value={props.data.title} onChange={props.changeHandler} name="title" placeholder="Enter title"/>
            </Form.Group>
            <Form.Group controlID="formStartDate" className="class-form-group">
              <Form.Label htmlFor="dateStart">Start Date and Time:</Form.Label>
              <DateTimePicker
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
              />                 
            </Form.Group>
            <Form.Group controlID="formEndDate" className="class-form-group">
              <Form.Label htmlFor="dateEnd">End Date and Time:</Form.Label>
              <DateTimePicker
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
              />                 
            </Form.Group>                

            <Form.Group controlID="formLocation" className="class-form-group">
                <Form.Label htmlFor="locationName">Location:</Form.Label>
                <Form.Control as="select" id="locationName" name="locationName" className="form-control" value={props.data.locationName} onChange={props.changeHandler}>
                  {locations}
                </Form.Control>
            </Form.Group>                                
            <Form.Group controlID="formCancelled" className="class-form-group-cancelled">
                <Form.Check type="checkbox" inline label="Cancelled?" id="cancelled" required checked={props.data.cancelled} value={props.data.cancelled} onChange={props.changeHandler} name="cancelled"/>
            </Form.Group>       
            <Form.Group controlID="formCancellationText" className={`class-form-group ${props.data.cancelled ? "" : "invisible"}`}>
                <Form.Label htmlFor="cancelemail">Cancellation Email:</Form.Label>
                <Form.Control as="textarea" className="form-control" id="cancelemail" rows="5" required value={props.data.cancelemail} onChange={props.changeHandler} name="cancelemail"/>
            </Form.Group>
          </Form>
        
        </Modal.Body>

        <Modal.Footer className="classesModalFooter">
          <button 
            onClick={() => props.onHide(props.reload)}     
            className="btn greenbtn">
            Cancel
          </button>           
          
          <button 
            onClick={props.onSubmit}     
            className="btn greenbtn">
            Submit
          </button>  
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ClassModal;