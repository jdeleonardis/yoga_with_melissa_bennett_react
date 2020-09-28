import React from "react";
const moment = require ("moment");

const Checkbox = ({ label, onCheckboxChange }) => (
  <div className="form-check">
    <label>
      <input        
        type="checkbox"
        name={label}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      {/* {label} */}
      {moment(label).format('MM/DD/YYYY h:mm A')}
    </label>
  </div>
);

export default Checkbox;