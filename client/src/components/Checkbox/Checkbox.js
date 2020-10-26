import React from "react";
import Moment from "moment";
import "./Checkbox.css"

Moment.locale('en')

const Checkbox = ({ classInfo, onCheckboxChange }) => (
  <div className="col-lg-6">
    <div className="form-check">
      <label className="checkboxDate">
        <input        
          type="checkbox"
          name={classInfo.dateStart}
          onChange={onCheckboxChange}
          className="form-check-input"
        />
        {/* remove the .utc to show local... */}
        {/* {Moment.utc(classInfo.dateStart).format('MM/DD/YYYY') + "  " + Moment.utc(classInfo.dateStart).format('h:mm A') + "-" + Moment.utc(classInfo.dateEnd).format('h:mm A')}  */}
        {/* {Moment(classInfo.dateStart).format('MM/DD/YYYY') + "  " + Moment(classInfo.dateStart).format('h:mm A') + "-" + Moment(classInfo.dateEnd).format('h:mm A')} */}
        {Moment(classInfo.dateStart).format('MM/DD/YYYY')}<br></br>
        {Moment(classInfo.dateStart).format('h:mm A') + "-" + Moment(classInfo.dateEnd).format('h:mm A')}
      </label>
    </div>
  </div>
);

export default Checkbox;