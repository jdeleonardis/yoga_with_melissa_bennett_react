import React from "react";

function RegistrantContactInfo(props) {

  return (
    <>
        <input 
            type="text" 
            className="form-control" 
            id="inputName" 
            placeholder="John Smith"
            onChange={props.onNameChange}
            ref={props.nameRef}      
            required>
        </input>
        <input 
            type="email" 
            className="form-control" 
            id="inputEmail" 
            placeholder="YourName@email.com"      
            onChange={props.onEmailChange}
            ref={props.emailRef}
            required>
        </input>        
    </>
  );
}

export default RegistrantContactInfo;