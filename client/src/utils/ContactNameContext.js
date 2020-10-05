import React from "react";

const ContactNameContext = React.createContext({
    name: "",
    handleNameChange: () => undefined
});

export default ContactNameContext;