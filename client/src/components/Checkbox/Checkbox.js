import React from "react";
import Moment from "moment";
import "./Checkbox.css"

const Checkbox = ({ classInfo, onCheckboxChange }) => (
  <div className="col-lg-5">
    <div className="form-check">
      <label className="checkboxDate">
        <input        
          type="checkbox"
          name={classInfo.dateStart}
          onChange={onCheckboxChange}
          className="form-check-input"
        />
        {/* remove the .utc to show local... */}
        {Moment.utc(classInfo.dateStart).format('MM/DD/YYYY') + "  " + Moment.utc(classInfo.dateStart).format('h:mm A') + "-" + Moment.utc(classInfo.dateEnd).format('h:mm A')} 
      </label>
    </div>
  </div>
);

export default Checkbox;