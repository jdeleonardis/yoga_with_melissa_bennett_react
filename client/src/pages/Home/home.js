import React, { useState, useEffect } from "react";
import "./home.css"

function home() {
 
    return (    
        <main className="container">
            <div className="row py-3">
                <section className="col-lg-12">
                    <header>
                        <h1>Yoga With Melissa Bennett</h1>
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
            <div className="row">
                <section className="col-lg-12 centered_text pb-3">
                    <img id="melissapic" src="../../Assets/group_shot_2.jpg" className="img-fluid" alt="Group"></img>
                </section>
           </div>                       

           <div className="row py-3 greenbackground">
                <section className="col-lg-12">
                    <header>
                        <h1>Warriors At Ease</h1>
                    </header>        
                </section>
            </div>    
            <div className="row greenbackground">
                <section className="col-lg-9">
                    <p>The mission of Warriors at Ease is to “increase awareness about the power of yoga and meditation and educate a network of professionals qualified to share evidence-based practices through programs that support the health and healing of service members, veterans, and their families.”  For more information about Warriors At Ease and other resources, click the Resources button.</p>
                    <div id="btnwrapper" className="pb-3">
                        <a href="/resources">
                            <button type="button" className="btn beigebtn">Resources</button>
                        </a>            
                    </div>
                </section>

                <section className="col-lg-3 centered_text">
                    <img id="warriorpic" src="../../Assets/warriors_logo100x324.png" className="img-fluid" alt="warriors at ease logo"></img>
                </section>     
            </div>

            <div className="row py-3">
                <section className="col-lg-12">
                    <header>
                        <h1>About Melissa</h1>
                    </header>        
                </section>
            </div> 

            <div className="row">
                <section className="col-lg-4 centered_text pb-3">
                    <img id="melissapic" src="../../Assets/marge_simpson.jpg" className="img-fluid" alt="Melissa"></img>   
                </section>
                <section className="col-lg-8">
                    <div>
                        <p>Lots of stuff about melissa</p>
                    </div>
                    <div id="btnwrapper" className="pb-3">
                        <a href="/aboutmelissa">
                            <button type="button" className="btn greenbtn mr-5">About Melissa</button>
                        </a>
                        <a href="/contact">
                            <button type="button" className="btn greenbtn">Contact</button>
                        </a>          
                    </div>
                </section>     
            </div>

        </main>
    );
}

export default home;