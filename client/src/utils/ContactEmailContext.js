import React from "react";

const ContactEmailContext = React.createContext({
    email: "",
    handleEmailChange: () => undefined    
});

export default ContactEmailContext;