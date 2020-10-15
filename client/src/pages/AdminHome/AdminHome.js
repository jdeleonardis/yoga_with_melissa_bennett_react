import React, { useState, useEffect } from "react";
import API from '../../utils/API'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

function AdminHome() {

    const [classData, setClassData] = useState([]);

    useEffect(() => {
        APIgetAllClasses();
    }, []);
    
    moment.locale("en");
    const localizer = momentLocalizer(moment)   
    const today = new Date();

    const logOut = () => {        
        document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        window.location.reload();
    }  

    const APIgetAllClasses = () => {
        API.getAllClasses()
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }

            let scheduledClasses = res.data;
            //console.log(scheduledClasses)
        
            for (let i = 0; i < scheduledClasses.length; i++) {
                scheduledClasses[i].start = moment.utc(scheduledClasses[i].dateStart).toDate()
                scheduledClasses[i].end = moment.utc(scheduledClasses[i].dateEnd).toDate()  
                scheduledClasses[i].allDay = false
            }
            
            setClassData(scheduledClasses);
          })
          .catch(err => console.log(err));
      }    

    const APIaddClass = () => {        
        API.insertClass({
            dateStart: "2020-10-22T17:00:00.000Z",
            dateEnd: "2020-10-22T18:00:00.000Z",
            title: "Yoga For Veterans",
            cancelled: false,
            location: [ 
                "5f7c6a86bfd22b14c03ba273"
            ]
          })
            .then(res => {
              if (res.data.status === "error") {
                throw new Error(res.data.message);
              }      
 
            })
            .catch(err => console.log(err)); 
    }       
 
    return (    
        <main className="container">
            <div className="row py-3">
                <section className="col-lg-12">
                        <header>
                            <h1>Admin Home</h1>
                        </header>        
                </section>
            </div>

            <div className="row">
                <section className="col-lg-12">
                    <div>
                        <p>test test test test</p>
                    </div>


                    <button type="submit" onClick={logOut} className="btn greenbtn">Log out</button>
                    <button type="submit" onClick={APIaddClass} className="btn greenbtn">Add Class</button>
                    {/* <div id="btnwrapper" class="pb-3">
                        <a href="/classes">
                            <button type="button" class="btn greenbtn">Class Information</button>
                        </a>
                    </div> */}
                </section>     
            </div>

            <div style={{ height: 700 }}>
                <Calendar
                    events={classData}
                    // startAccessor='dateStart'
                    // endAccessor='dateEnd'
                    // events={[
                    //     {
                    //       title: "Yoga Class!",
                    //       allDay: false,
                    //       start: new Date(2020, 9, 15, 15, 0), // 10/15 3pm
                    //       end: new Date(2020, 9, 15, 16, 0) // 10/15 4pm
                    //     }
                    //   ]}
                    localizer={localizer}
                    step={30}
                    timeslots={1}
                    defaultView='week'
                    views={['month','week','day']}
                    defaultDate={new Date()}
                    min={
                        new Date(
                          today.getFullYear(), 
                          today.getMonth(), 
                          today.getDate(), 
                          8
                        )
                      }
                    max={
                        new Date(
                          today.getFullYear(), 
                          today.getMonth(), 
                          today.getDate(), 
                          21
                        )
                      }
                />
            </div>

        </main>
    );
};

export default AdminHome;