import React, { useState, useEffect } from "react";

function Contacts() {    

    const [emailInfo, setEmailInfo] = useState({
        name: "",
        email: "",
        message: ""
      });

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
        console.log(emailInfo);
    }
    

    return (
        <main class="container py-3">
    
            <div class="row">
                <section class="col-lg-12">
                    <header>
                        <h1>Contact Melissa</h1>
                    </header>        
                </section>
            </div> 

            <form id="contact-form" onSubmit={handleSubmit} method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" value={emailInfo.name} onChange={onNameChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" value={emailInfo.email} onChange={onEmailChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5" value={emailInfo.message} onChange={onMessageChange} />
                </div>
                <button type="submit" className="btn greenbtn">Submit</button>
            </form>
         </main>
    );
}

export default Contacts;