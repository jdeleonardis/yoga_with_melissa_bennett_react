import React, { useContext } from "react";
import ContactNameContext from "../../utils/ContactNameContext";
import ContactEmailContext from "../../utils/ContactEmailContext";

function RegistrantContactInfo() {

  const {handleNameChange} = useContext(ContactNameContext);
  const {handleEmailChange} = useContext(ContactEmailContext);

  return (
    <>
        <input 
            type="text" 
            className="form-control" 
            id="inputName" 
            placeholder="John Smith"
            onChange={handleNameChange}
            required>
        </input>
        <input 
            type="email" 
            className="form-control" 
            id="inputEmail" 
            placeholder="YourName@email.com"      
            onChange={handleEmailChange}
            required>
        </input>        
    </>
  );
}

export default RegistrantContactInfo;