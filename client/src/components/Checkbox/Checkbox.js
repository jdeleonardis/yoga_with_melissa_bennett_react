import React from "react";
import Moment from "moment";
import "./Checkbox.css"

Moment.locale('en')

function Checkbox({ classInfo, onCheckboxChange }) {  

  let checkAvailability = true
  let availableSpots = 0

  //if there are no maxPartipants selected for the class, dont bother checking anything
  if (classInfo.maxParticipants === undefined || classInfo.maxParticipants === null) {
    checkAvailability = false
  }  
  //if maxParticipants are set, but there are no participants yet, set the available to max
  else if (classInfo.currentParticipants === undefined) {
    availableSpots = classInfo.maxParticipants;
  }
  //otherwise, max - current
  else {
    availableSpots = classInfo.maxParticipants - classInfo.currentParticipants
  }
  
  return (
  <div className="col-lg-6">
    <div className="form-check">
      <label className="checkboxDate">
        <input        
          type="checkbox"
          name={classInfo.dateStart}
          onChange={onCheckboxChange}
          // if the available spots = 0, dont show the checkbox
          className={`${checkAvailability && availableSpots === 0 ? "invisible" : "form-check-input"}`}/>
        
        {Moment(classInfo.dateStart).format('dddd, MMMM Do, YYYY')}<br></br>
        {Moment(classInfo.dateStart).format('h:mm A') + "-" + Moment(classInfo.dateEnd).format('h:mm A')}
        {/* less than 3 spots, make the available text red. */}
        {checkAvailability
           ?<div 
           id={`${checkAvailability && availableSpots < 3 ? "availableSpots" : ""}`}>              
              {`${availableSpots} spot(s) remaining`}
           </div> 
           : false
        }

      </label>
    </div>
  </div>
  )
};

export default Checkbox;