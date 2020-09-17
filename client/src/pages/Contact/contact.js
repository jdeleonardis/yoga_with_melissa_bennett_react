import React, { useState } from "react";
import emailjs from 'emailjs-com';
import SimpleModal from "../../components/SimpleModal/index.js";

function Contacts() {    

    const [emailInfo, setEmailInfo] = useState({
        name: "",
        email: "",
        message: ""
      });

      const [isOpen, setIsOpen] = useState({
        modalVisible: false,
        modalText: ""
      });  
    
      const showModal = (message) => {
        setIsOpen({modalVisible: true, modalText: message});
      };
    
      const hideModal = () => {
        setIsOpen(false);
      };        

    const onNameChange = (event) => {
        setEmailInfo({...emailInfo, name: event.target.value})
    }    

    const onEmailChange = (event) => {
        setEmailInfo({...emailInfo, email: event.target.value})
    }         

    const onMessageChange = (event) => {
        setEmailInfo({...emailInfo, message: event.target.value})
    }      
    
    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm('gmail', 'template_jo8svjd', event.target, 'user_GT9KfgNxRsk5DWBzg400j')
        .then((result) => {
            showModal("The contact form has been submitted.");
            setEmailInfo({emailInfo, name: "", email: "", message: ""});
        }, (error) => {
            console.log(error.text);
            showModal(`The contact form has encountered an error with message ${error.text}`);
        });
        
    }
    

    return (
        <main className="container py-3">
    
            <div className="row">
                <section className="col-lg-12">
                    <header>
                        <h1>Contact Melissa</h1>
                    </header>        
                </section>
            </div> 

            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" required value={emailInfo.name} onChange={onNameChange} name="from_name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Your email address</label>
                    <input type="email" id="email" className="form-control" required value={emailInfo.email} onChange={onEmailChange} name="from_email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="5" required value={emailInfo.message} onChange={onMessageChange} name="message"/>
                </div>
                <button type="submit" className="btn greenbtn">Submit</button>
            </form>

            <SimpleModal 
                show={isOpen.modalVisible}
                onHide={hideModal}
                body={isOpen.modalText}/>
         </main>
    );
}

export default Contacts;