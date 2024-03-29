import React, { useState, useEffect } from "react";
import API from '../../utils/API'
import ActiveLocations from "../../components/ActiveLocationCards/ActiveLocationCards"
import "./Home.css"

function Home() {

    const [activeLocations, setActiveLocations] = useState([]);

    useEffect(() => {
        APIgetActiveLocations();
    }, []);

    const APIgetActiveLocations = () => {        
        API.getActiveLocations()
          .then(res => {
            if (res.data.length === 0) {
              throw new Error("No results found.");
            }
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            } 
            setActiveLocations(res.data)    
          })
          .catch(err => console.log(err));
      }    

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
                        <p>I teach a free Warriors at Ease yoga class for veterans and active duty military members. This class is my way of giving back to our military community. Warriors at Ease classes are based on methods that are trauma-sensitive, evidence-based, and informed by military culture. My classes incorporate full body stretching, breathing meditation, balance practice, and strength building. Classes are for all ability levels with various modifications provided.</p>
                        <p>Classes are currently being held at the following location(s): </p>
                        <ActiveLocations 
                            data={activeLocations}
                        />
                    </div>  
                    <div id="btnwrapper" className="pb-3">
                        <a href="/classes">
                            <button type="button" className="btn greenbtn">Click Here To Register For A Class</button>
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
                    <p>The mission of Warriors at Ease is to “increase awareness about the power of yoga and meditation and educate a network of professionals qualified to share evidence-based practices through programs that support the health and healing of service members, veterans, and their families.”  For more information about Warriors At Ease visit their website, or visit the Resources page.</p>
                    <div id="btnwrapper" className="m-3">
                        <a href="http://warriorsatease.org/" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn beigebtn m-2">Warriors At Ease</button>
                        </a>            
                        <a href="/resources">
                            <button type="button" className="btn beigebtn m-2">Resources</button>
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
                    <img id="melissapic" src="../../Assets/IMG_1007_modified.JPG" className="img-fluid" alt="Melissa"></img>   
                </section>
                <section className="col-lg-8">
                    <div>
                        <p>I found yoga at the age of 40, seeking more flexibility in my body and relief from anxiety. Once I had experienced the positive effects of yoga on my body
                            and my mind, I wanted to share this practice with our veterans and active duty military who have given so much to all of us. I am a Yoga Alliance Registered Yoga Teacher (RYT-200) and a Warriors at Ease
                            Certified Teacher. I have also done additional training in teaching yoga to older adults and teaching trauma-sensitive yoga. </p>         </div>
                    <div id="btnwrapper" className="pb-3">
                        {/* <a href="/aboutmelissa">
                            <button type="button" className="btn greenbtn m-3">About Melissa</button>
                        </a> */}
                        <a href="/contact">
                            <button type="button" className="btn greenbtn m-3">Contact</button>
                        </a>          
                    </div>
                </section>     
            </div>

        </main>
    );
}

export default Home;
