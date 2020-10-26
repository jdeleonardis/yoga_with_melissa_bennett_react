import React from "react";
import Moment from "moment";
import DateTimePicker from 'react-datetime-picker';
import "./classModal.css";
import Modal from "react-bootstrap/Modal";


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

        <Modal.Body>
          <h4>{props.data.modalTitle}</h4>
          <form id="class-form">
            <div className="class-form-group">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" className="form-control" required value={props.data.title} onChange={props.changeHandler} name="title"/>
            </div>
            <div className="class-form-group">
              <label htmlFor="dateStart">Start Date and Time:</label>
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
            </div>
            <div className="class-form-group">
              <label htmlFor="dateEnd">End Date and Time:</label>
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
            </div>                

            <div className="class-form-group">
                <label htmlFor="locationName">Location:</label>
                <select id="locationName" name="locationName" className="form-control" value={props.data.locationName} onChange={props.changeHandler}>
                  {locations}
                </select>
            </div>                                
            <div className="class-form-group">
                <label htmlFor="cancelled">cancelled:</label>
                <input type="checkbox" id="cancelled" className="form-control" required checked={props.data.cancelled} value={props.data.cancelled} onChange={props.changeHandler} name="cancelled"/>
            </div>       
            <div className={`class-form-group ${props.data.cancelled ? "" : "invisible"}`}>
                <label htmlFor="cancelemail">cancel email:</label>
                <textarea className="form-control" id="cancelemail" rows="5" required value={props.data.cancelemail} onChange={props.changeHandler} name="cancelemail"/>
            </div>
          </form>
        
        </Modal.Body>

        <Modal.Footer>
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