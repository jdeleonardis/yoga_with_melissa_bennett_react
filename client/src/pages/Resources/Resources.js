import React from "react";
import "./Resources.css";

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
                    <table id="resourceTable" className="table table-striped">
                        <tbody>
                            <tr>
                                <th>Resource</th>
                                <th>Website</th>
                                <th>Contact</th>
                            </tr>
                            <tr>
                                <td>Warriors At Ease</td>
                                <td><a href="http://warriorsatease.org/" target="_blank" rel="noopener noreferrer">Warriors At Ease</a></td>
                                <td id='resourceColumn'>info@warriorsatease.org</td>
                            </tr>
                            <tr>
                                <td>Veterans Crisis Line</td>
                                <td><a href="https://veteranscrisisline.net/" target="_blank" rel="noopener noreferrer">Veterans Crisis Line</a></td>              
                                <td id='resourceColumn'>1-800-273-8255</td>
                            </tr>
                            <tr>
                                <td>Military OneSource</td>
                                <td><a href="https://www.militaryonesource.mil/" target="_blank" rel="noopener noreferrer">Mililary OneSource</a></td>              
                                <td id='resourceColumn'>1-800-342-9647</td>
                            </tr>
                        </tbody>
                    </table>
                </section>     
            </div>  
    
      </main>
    );
}

export default Resources;
