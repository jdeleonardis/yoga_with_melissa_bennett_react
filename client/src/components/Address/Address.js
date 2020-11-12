import React from "react";
import Col from "react-bootstrap/Col";
import "./Address.css"

function Address(props) {
  return (
    <Col>
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
    </Col>
  );
}

export default Address;