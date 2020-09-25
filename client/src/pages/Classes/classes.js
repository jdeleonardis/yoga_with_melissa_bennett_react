import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function Classes() {

    useEffect(() => {
        APIGetNextClasses();
    }, []);

    const APIGetNextClasses = () => {
        API.getClasses()
          .then(res => {
            if (res.data.length === 0) {
              throw new Error("No results found.");
            }
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            //setPartsOfSpeech({ partOfSpeech: res.data });
            console.log(res.data)
          })
          .catch(err => console.log(err));
      }    
 
    return (    
        <main className="container">
            <div className="row py-3">
                <section className="col-lg-12">
                    <header>
                        <h1>Classes</h1>
                    </header>        
                </section>
            </div>

            <div className="row">
                <section className="col-lg-4 centered_text pb-3">
                    <img src="../../Assets/group_shot_1_300x397.jpg" className="img-fluid" alt="Class"></img>
                </section>

                <section className="col-lg-8">
                    <div>
                        <p>Currently, classes are being held every Sunday, from 3:00PM until 4:15PM at American Legion Post 138 in Roxboro, NC:</p>
                        <div className="bold_text centered_text my-3 mt-3">
                            American Legion Post 138<br></br>
                            218 Chub Lake Street<br></br>
                            Roxboro, NC 27573
                        </div>
                        <h4>What to expect</h4>
                        <p>Beatings.  Lots of beatings.</p>
                        <h4>What to wear</h4>  
                        <p>Even more beatings</p>                  
                        <h4>What to bring</h4>
                        <p>Still more</p>
                    </div>                    
                </section>
            </div>            
        </main>
    );
}

export default Classes;