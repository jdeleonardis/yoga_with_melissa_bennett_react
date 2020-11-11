import React from "react";

function Resources() {
 
    return (    
        <main className="container">
            <div className="row py-3">
                <section className="col-lg-12">
                    <header>
                        <h1>Resources</h1>
                    </header>        
                </section>
            </div>    

            <div className="row">
                <section className="col-lg-12">
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th>Resource</th>
                                <th>Website</th>
                                <th>Phone Number</th>
                            </tr>
                            <tr>
                                <td>Warriors At Ease</td>
                                <td><a href="http://warriorsatease.org/" target="_blank" rel="noopener noreferrer">Warriors At Ease</a></td>
                                <td>555-121-1212</td>
                            </tr>
                            <tr>
                                <td>Suicide Prevention Lifeline</td>
                                <td><a href="https://suicidepreventionlifeline.org/" target="_blank" rel="noopener noreferrer">Suicide Prevention Lifeline</a></td>              
                                <td>555-121-1212</td>
                            </tr>
                        </tbody>
                    </table>
                </section>     
            </div>  
    
      </main>
    );
}

export default Resources;
