import React from "react";
import "./Address.css"

function Address(props) {

  console.log(props)

  return (
    <div className="col-lg-7">
        <p>
        {props.classInfo.title}
        <br></br>
        {props.classInfo.location[0].name}
        <br></br>
        {props.classInfo.location[0].addr1}
        <br></br>
        {props.classInfo.location[0].city + ", " + props.classInfo.location[0].state + " " + props.classInfo.location[0].zip}
        <br></br>
        <button 
          type="button"
          className="link-button" 
          onClick={() => props.mapClicked(props.classInfo)}>
            Map
        </button>
        </p>
  </div> 
  );
}

export default Address;