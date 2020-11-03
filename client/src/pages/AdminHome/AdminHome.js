//todo: 
//add dotenv
//add location maintenance
//set the event if clicking on a month or day
//add sending email with cancellation
//  --https://www.npmjs.com/package/emailjs for instructions on sending one email to mulitiple recipients
//  --https://www.emailjs.com/docs/sdk/send/
//change colors on calendar - normal, cancelled
//figure out how to add first user securely
//"pretty up" attendees
//add in maximum attendees
//put app in strict mode? Index.js
//fix calendar fonts and colors

import React, { useState, useEffect } from "react";
import API from '../../utils/API'
import { Calendar, momentLocalizer } from "react-big-calendar";
import ClassModal from "../../components/ClassModal/ClassModal";
import LocationCards from "../../components/LocationCards/LocationCards"
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./AdminHome.css";

function AdminHome() {

    const allErrors = {};

    const [classData, setClassData] = useState([]);

    const [classModal, setClassModal] = useState({
      id: "",
      title: "",
      location: "",
      locationName: "",
      dateStart: new Date(),
      dateEnd: new Date(),
      cancelled: false,
      cancelemail: "",
      modalVisible: false,
      reload: false,
      modalTitle: "",
      showAttendees: false,
      attendeeNames: [],
      attendeeEmailAddresses: [],
      errors: {}
    });

    const [activeLocations, setActiveLocations] = useState([]);
    
    const [allLocations, setAllLocations] = useState([]);

    const [dateToLandOn, setDateToLandOn] = useState(new Date());

    const [validated, setValidated] = useState(false);

    useEffect(() => {
        APIgetAllClasses();
        APIgetActiveLocations();
        APIgetAllLocations();
    }, []);
    
    moment.locale("en");
    const localizer = momentLocalizer(moment)   
    const today = new Date();

    const logOut = () => {        
        document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        pageReload();
    }  

    const APIgetAllClasses = () => {
      API.getAllClasses()
        .then(res => {
          if (res.data.status === "error") {
            throw new Error(res.data.message);
          }

          let scheduledClasses = res.data;
          // console.log(scheduledClasses)
      
          for (let i = 0; i < scheduledClasses.length; i++) {
              scheduledClasses[i].start = moment.utc(scheduledClasses[i].dateStart).toDate()
              scheduledClasses[i].end = moment.utc(scheduledClasses[i].dateEnd).toDate()  
              scheduledClasses[i].allDay = false
          }
          
          setClassData(scheduledClasses);
          setValidated(false)
        })
        .catch(err => console.log(err));
    }  
      
    const APIgetActiveLocations = () => {        
      API.getActiveLocations()
        .then(res => {
          if (res.data.length === 0) {
            throw new Error("No results found.");
          }
          if (res.data.status === "error") {
            throw new Error(res.data.message);
          } 
          //console.log(res.data)
          setActiveLocations(res.data)    
        })
        .catch(err => console.log(err));
    }      
    
    const APIgetAllLocations = () => {        
      API.getAllLocations()
        .then(res => {
          if (res.data.length === 0) {
            throw new Error("No results found.");
          }
          if (res.data.status === "error") {
            throw new Error(res.data.message);
          } 
          //console.log(res.data)
          setAllLocations(res.data)    
        })
        .catch(err => console.log(err));
    }   

    const APIaddClass = () => {        
      API.insertClass(classModal)
      .then(res => {
          if (res.data.status === "error") {
              throw new Error(res.data.message);
          }        
          return res          
      })
      .then(res => {
        APIgetAllClasses();
        return res
      })
      .then(res => {
        setDateToLandOn(classModal.dateStart)      
      })
      .catch(err => console.log(err));
    }     

    const APIupdateClass = () => {        
      API.updateClassInfo(classModal.id, classModal)
      .then(res => {
          if (res.data.status === "error") {
              throw new Error(res.data.message);
          }        
          return res          
      })
      .then(res => {
        APIgetAllClasses();
        return res
      })
      .then(res => {
        setDateToLandOn(classModal.dateStart)      
      })
      .catch(err => console.log(err));
    }    

    const selectSlot = (event) => {      
      setClassModal({modalTitle: "Create a Class",
        //dateStart: new Date(event.start), 
        dateStart: moment(event.start).format("YYYY-MM-DDThh:mm"),
        //dateEnd: new Date(event.end), 
        dateEnd: moment(event.end).format("YYYY-MM-DDThh:mm"),
        location: "",
        attendeeNames: [],
        attendeeEmailAddresses: [],
        modalVisible: true, 
        reload: false,
        errors: {}
      });
    }

    const selectEvent = (event) => {    
      setClassModal({...classModal,
        modalTitle: "Update a Class",
        id: event._id, 
        title: event.title, 
        //dateStart: new Date(event.dateStart), 
        dateStart: moment(event.dateStart).format("YYYY-MM-DDThh:mm"),
        //dateEnd: new Date(event.dateEnd), 
        dateEnd: moment(event.dateEnd).format("YYYY-MM-DDThh:mm"),        
        location: event.location[0]._id, 
        locationName: event.location[0].name, 
        attendeeNames: event.names,
        attendeeEmailAddresses: event.emailAddresses,
        cancelled: event.cancelled, 
        modalVisible: true, 
        reload: false,
        errors: {}
      });
    }    
  
    const hideModal = (reload) => {
      setClassModal({...classModal, modalVisible: false, reload: false, showAttendees: false});
        if (reload) {
            pageReload();
        }        
    }; 

    const changeHandler = (event) => {
      let valueChanged = event.target.name
      switch(valueChanged) {
        case "title":
        case "cancelemail":
          setClassModal({...classModal, [valueChanged]: event.target.value})
          break;
        case "locationName":          
          let locationID = event.target.options[event.target.options.selectedIndex].getAttribute('data_key')
          setClassModal({...classModal, location: locationID, locationName: event.target.value})
          break;
        case "cancelled":
          setClassModal({...classModal, cancelled: event.target.checked})
          break;
        default:
      }      
    }

    const onStartChange = (event) => {
      //console.log(event.target.value)
      setClassModal({...classModal, dateStart: event.target.value})
      //setClassModal({...classModal, dateStart: new Date(event)})
    } 

    const onEndChange = (event) => {
      setClassModal({...classModal, dateEnd: event.target.value})
      //setClassModal({...classModal, dateEnd: new Date(event)})
    } 

    const validateClass = () => {
      setValidated(false);

      if (classModal.title === "" || classModal.title === undefined) {
        allErrors.title = true;        
      }

      if (classModal.location === "" || classModal.location === undefined) {
        allErrors.location = true;
      }

      if (classModal.dateStart > classModal.dateEnd) {
        allErrors.date = true;        
      } 
      
      if (classModal.cancelled && classModal.cancelemail === "") {
        allErrors.email = true;
      }
    }

    const onClassSubmit = async event => {

      event.preventDefault();
      event.stopPropagation();
      
      //validate date in class modal
      validateClass();

      //if there are no errors, reset everything and save data
      if (Object.keys(allErrors).length === 0) {
        setValidated(true);
        setClassModal({...classModal, modalVisible: false, reload: false, errors: {}, showAttendees: false});    
        if (classModal.id === "" || classModal.id === undefined) {
          APIaddClass();        
        }
        else {
          APIupdateClass();
        }    
      }
      else{
        setClassModal({...classModal, errors: allErrors})        
      }
    } 

    const showAttendees = () => {      
      setClassModal({...classModal, showAttendees: !classModal.showAttendees})
    }

    const addLocation = () => {      
      alert("nothing yet")
    }    

    const pageReload = () => {
      window.location.reload();
    }

    return (    
        <main className="container">
            <div className="row py-3">
                <section className="col-lg-10">
                        <header>
                            <h1>Class Calendar</h1>
                        </header>        
                </section>
                <section className="col-lg-2">
                  <button 
                    onClick={logOut}     
                    className="btn greenbtn logoutbtn">
                    Log Out
                  </button>       
                </section>                
            </div>
            {/* height 1150 shows entire calendar */}
            <div style={{ height: 589 }}> 
                <Calendar
                    events={classData}
                    localizer={localizer}
                    step={30}
                    timeslots={1}
                    defaultView='week'
                    views={['month','week','day']}
                    // defaultDate={new Date()}
                    defaultDate={dateToLandOn}
                    date={dateToLandOn}
                    onNavigate={dateToLandOn => {
                      setDateToLandOn(dateToLandOn);
                    }}
                    //min and max are min and max times - 8am to 9pm
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
                    onSelectEvent={selectEvent}
                    onSelectSlot={selectSlot}  
                    selectable={true}
                />
            </div>

            <div className="row py-3">
                <section className="col-lg-10">
                        <header>
                            <h1>Locations</h1>
                        </header>        
                </section>
                <section className="col-lg-2">
                  <button 
                    onClick={addLocation}     
                    className="btn greenbtn logoutbtn">
                    Add Location
                  </button>       
                </section>
            </div>
            <LocationCards
              locations={allLocations}
            />

            <ClassModal 
                data={classModal}
                locations={activeLocations}
                onStartChange={onStartChange}
                onEndChange={onEndChange}
                onClassSubmit={onClassSubmit}
                onHide={hideModal}
                changeHandler={changeHandler}
                validated={validated}
                showAttendees={showAttendees}/>
                
        </main>
    );
};

export default AdminHome;