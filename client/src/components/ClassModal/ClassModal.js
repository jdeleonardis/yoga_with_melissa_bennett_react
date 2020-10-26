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

  // console.log(locations)

  return (
    <>
              {/*what goes here for ON HIDE??????? */}
              {/* <Modal dialogClassName="class-modal-regular" */}
        <Modal dialogClassName="class-modal-regular"
             show={props.data.modalVisible} 
             //onHide={props.hideModal}
             backdrop="static"
             keyboard={false}>
        <Modal.Body>

        {/* <form id="contact-form" onSubmit={handleSubmit}> */}
        <form id="class-form">
                <div className="class-form-group">
                    <label htmlFor="title">Title</label>
                    {/* <input type="text" id="name" className="form-control" required value={emailInfo.name} onChange={onNameChange} name="from_name"/> */}
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
                    // <input type="datetime-local" id="start" className="form-control" onChange={props.onChange} required value={Moment(props.data.dateStart).format('MM/DD/YYYY') + "  " + Moment(props.data.dateStart).format('h:mm A')} name="start"/>                    
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
                    // <input type="datetime-local" id="start" className="form-control" onChange={props.onChange} required value={Moment(props.data.dateStart).format('MM/DD/YYYY') + "  " + Moment(props.data.dateStart).format('h:mm A')} name="start"/>                    
                  />                 
                </div>                

                <div className="class-form-group">
                    <label htmlFor="locationName">Location:</label>
                    {/* <input type="text" id="name" className="form-control" required value={emailInfo.name} onChange={onNameChange} name="from_name"/> */}
                    {/* <input type="text" id="location" className="form-control" required value={props.data.location} name="location"/> */}
                    <select id="locationName" name="locationName" className="form-control" value={props.data.locationName} onChange={props.changeHandler}>
                      {locations}
                    </select>
                </div>                                
                <div className="class-form-group">
                    <label htmlFor="cancelled">cancelled:</label>
                    {/* <input type="text" id="name" className="form-control" required value={emailInfo.name} onChange={onNameChange} name="from_name"/> */}
                    <input type="checkbox" id="cancelled" className="form-control" required checked={props.data.cancelled} value={props.data.cancelled} onChange={props.changeHandler} name="cancelled"/>
                </div>       
                <div className={`class-form-group ${props.data.cancelled ? "" : "invisible"}`}>
                    <label htmlFor="cancelemail">cancel email:</label>
                    <textarea className="form-control" id="cancelemail" rows="5" required value={props.data.cancelemail} onChange={props.changeHandler} name="cancelemail"/>
                </div>                                                             


                {/* <button type="submit" className="btn greenbtn">Submit</button> */}
        </form>
        
        </Modal.Body>
        <Modal.Footer>
          {/* <button onClick={props.onHide} */}

          {/*what goes here???? */}

          <button 
            onClick={props.onSubmit}     
            className="btn greenbtn"
          >
            Submit
          </button>  

          <button 
            onClick={() => props.onHide(props.reload)}     
            className="btn greenbtn"
          >
            Close
          </button>   
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ClassModal;