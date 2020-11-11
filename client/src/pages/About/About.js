import React from "react";

function About() {
 
    return (    
        <main className="container">
            <div className="row py-3">
                <section className="col-lg-12">
                        <header>
                            <h1>About Melissa</h1>
                        </header>        
                </section>
            </div>

            <div className="row">
                <section className="col-lg-12">
                    <div>
                        <p>I teach a free Warriors at Ease yoga class for veterans, active duty military, and their family members. This class is my way of giving back to our military community. I am a RYT-200 and a Certified Warriors at Ease yoga teacher. Warriors at Ease classes are based on methods that are trauma-sensitive, evidence-based, and informed by military culture. My classes incorporate full body stretching, breathing meditation, balance practice, and strength building. Classes are for all ability levels with various modifications provided.</p>
                        <p>Currently, classes are being held every Sunday, from 3:00PM until 4:15PM at American Legion Post 138 in Roxboro, NC:</p>
                        <div className="bold_text centered_text my-3 mt-3">
                            American Legion Post 138<br></br>
                            218 Chub Lake Street<br></br>
                            Roxboro, NC 27573
                        </div>
                    </div>

                    <div id="btnwrapper" className="pb-3">
                        <a href="/classes">
                            <button type="button" className="btn greenbtn">Class Information</button>
                        </a>
                    </div>
                </section>     
            </div>    
        </main>
    );
}

export default About;
