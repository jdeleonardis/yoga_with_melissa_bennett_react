import React from "react";
import Moment from "moment";
//import DateTimePicker from 'react-datetime-picker';
import "./classModal.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";


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
          <h4>{props.data.modalTitle}</h4>
          <Form noValidate validated={props.validated} id="class-form" onSubmit={props.onClassSubmit}>
            <Form.Group controlID="formTitle" className="class-form-group">
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
            <Form.Group controlID="formStartDate" className="class-form-group">
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
            <Form.Group controlID="formEndDate" className="class-form-group">
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
                  name="dateStart" 
                  className="form-control" 
                  isInvalid={props.data.errors.date} 
                  required 
                  onChange={props.onEndChange}
                  value={props.data.dateEnd} />
              <Form.Control.Feedback type="invalid">
                Please enter a start date before the end date.
              </Form.Control.Feedback>
            </Form.Group>                

            <Form.Group controlID="formLocation" className="class-form-group">
                <Form.Label htmlFor="locationName">Location:</Form.Label>
                <Form.Control 
                  as="select"                  
                  className="form-control"
                  id="locationName" 
                  name="locationName" 
                  isInvalid={props.data.errors.location} 
                  value={props.data.locationName}
                  onChange={props.changeHandler}                  
                  required>

                  {locations}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please select a location.
                </Form.Control.Feedback>
            </Form.Group>                                
            <Form.Group controlID="formCancelled" className="class-form-group-cancelled">
                <Form.Check type="checkbox" inline label="Cancelled?" id="cancelled" checked={props.data.cancelled} value={props.data.cancelled} onChange={props.changeHandler} name="cancelled"/>
            </Form.Group>       
            <Form.Group controlID="formCancellationText" className={`class-form-group ${props.data.cancelled ? "" : "invisible"}`}>
                <Form.Label htmlFor="cancelemail">Cancellation Email:</Form.Label>
                <Form.Control as="textarea" className="form-control" id="cancelemail" rows="5" value={props.data.cancelemail} onChange={props.changeHandler} name="cancelemail"/>
            </Form.Group>
            <div className="modalClassesButtons">
              <button 
                type="button"
                onClick={() => props.onHide(props.reload)}     
                className="btn greenbtn mr-4">
                Close Without Saving
              </button>           
            
              <button 
                //onClick={props.onSubmit} 
                type="submit"    
                className="btn greenbtn">
                Submit
              </button>  
            </div>
          </Form>

        </Modal.Body>

        {/* <Modal.Footer className="classesModalFooter">
          <button 
            onClick={() => props.onHide(props.reload)}     
            className="btn greenbtn">
            Cancel
          </button>           
          
          <button 
            //onClick={props.onSubmit} 
            type="submit"    
            className="btn greenbtn">
            Submit
          </button>  
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default ClassModal;