import React, { useState, useEffect } from "react";

function resources() {
 
    return (    
        <main class="container">
            <div class="row py-3">
                <section class="col-lg-12">
                    <header>
                        <h1>Resources</h1>
                    </header>        
                </section>
            </div>    

            <div class="row">
                <section class="col-lg-12">
                    <table class="table table-striped">
                        <tr>
                            <th>Resource</th>
                            <th>Website</th>
                            <th>Phone Number</th>
                        </tr>
                        <tr>
                            <td>Warriors At Ease</td>
                            <td><a href="http://warriorsatease.org/" target="_blank">Warriors At Ease</a></td>
                            <td>555-121-1212</td>
                        </tr>
                        <tr>
                            <td>Suicide Prevention Lifeline</td>
                            <td><a href="https://suicidepreventionlifeline.org/" target="_blank">Suicide Prevention Lifeline</a></td>              
                            <td>555-121-1212</td>
                        </tr>
                    </table>
                </section>     
            </div>  
    
      </main>
    );
}

export default resources;