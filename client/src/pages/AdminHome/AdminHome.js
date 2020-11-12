import React, { useState, useEffect } from "react";
import API from '../../utils/API'
import { Calendar, momentLocalizer } from "react-big-calendar";
import ClassModal from "../../components/ClassModal/ClassModal";
import LocationModal from "../../components/LocationModal/LocationModal";
import LocationCards from "../../components/LocationCards/LocationCards"
import moment from "moment";
//import moment from 'moment-timezone'

import emailjs from 'emailjs-com';
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
      maxParticipants: null,
      showAttendees: false,
      attendeeNames: [],
      attendeeEmailAddresses: [],
      errors: {}
    });

    const [locationModal, setLocationModal] = useState({
      id: "",
      name: "",
      addr1: "",
      addr2: "",
      city: "",
      state: "",
      zip: "",
      active: false,
      modalVisible: false,
      reload: false,
      modalTitle: "",
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
        APIcreateKeyToken();
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

    const APIcreateKeyToken = () => {    
      const tokenPayload = {
          keys: "keys"
      }
      API.createKeyToken(tokenPayload)
      .then(res => console.log("token created"))
      .catch(err => console.log(err));
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

            scheduledClasses[i].start = new Date(scheduledClasses[i].dateStart.toLocaleString("en-US", {timeZone: "America/New_York" }))
            scheduledClasses[i].end = new Date(scheduledClasses[i].dateEnd.toLocaleString("en-US", {timeZone: "America/New_York" }))
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
          setValidated(false);
          return res
        })   
        .then(res => {
          setDateToLandOn(classModal.dateStart)      
        })
        .catch(err => console.log(err)); 
    }     

    //update the class, send a cancellation email if necessary, reretrieve info.
    const APIupdateClass = () => {        
      API.updateClassInfo(classModal.id, classModal)
      .then(res => {
          if (res.data.status === "error") {
              throw new Error(res.data.message);
          }        
          return res          
      })
      .then(res => {
        if (classModal.cancelled) {
          //if there is at least one attendee signed up for a class, send an email.
          if (classModal.attendeeEmailAddresses.length > 0) {
            //format all of the email addresses into one string with ";" suitable to be sent to emailjs
            let emailAddresses = ""
            let i=0

            for (i=0; i<classModal.attendeeEmailAddresses.length;i++) {
              emailAddresses += classModal.attendeeEmailAddresses[i] + ";"
            }

            //format the text with <br/> for new lines so it is displayed correctly when sent.
            let message = ""
            let lines = classModal.cancelemail.split('\n')

            for (i=0; i<lines.length; i++) {
              if (i === lines.length-1){
                message += lines[i]
              }
              else {
                message += lines[i] + "<br/>"
              }              
            } 

            //extra check, probably overkill, to make sure everything is ready to go before sending the email
            if (message !== "") {
              
              let emailInfo = {
                message: message,
                to_name: emailAddresses,
                date: moment(classModal.dateStart).format("MMMM Do, YYYY"),
                time: moment(classModal.dateStart).format("h:mm A")
              }

              API.getEmailJSUser()
              .then(res => {
                emailjs.send('gmail', 'template_p7oukag', emailInfo, res.data)
                .then((result) => {
                  console.log("success");
                }, (error) => {
                    console.log(error.text);                
                    alert(`The cancellation email has has encountered an error with message ${error.text}`);
                });
              })

            }
          }
        }        
        return res          
      })
      .then(res => {
        APIgetAllClasses();
        return res
      })
      .then(res => {
        setValidated(false);
        return res
      })         
      .then(res => {
        setDateToLandOn(classModal.dateStart)      
      })
      .catch(err => console.log(err));
    }    

    const APIaddLocation = () => {        
      API.insertLocation(locationModal)
      .then(res => {
          if (res.data.status === "error") {
              throw new Error(res.data.message);
          }        
          return res          
      })
      .then(res => {
        APIgetAllLocations();
        return res
      })
      .then(res => {
        APIgetActiveLocations();
        return res
      })    
      .then(res => {
        setValidated(false);
        return res
      })     
      .catch(err => console.log(err));
    }     
    
    const APIupdateLocation = () => {        
      API.updateLocation(locationModal.id, locationModal)
      .then(res => {
          if (res.data.status === "error") {
              throw new Error(res.data.message);
          }        
          return res          
      })
      .then(res => {
        APIgetAllLocations();
        return res
      })
      .then(res => {
        APIgetActiveLocations();
        return res
      })      
      .then(res => {
        setValidated(false);
        return res
      })         
      .catch(err => console.log(err));
    } 

    const selectSlot = (event) => {     
      setClassModal({modalTitle: "Create a Class",
        dateStart: moment(event.start).format().slice(0,19),
        dateEnd: moment(event.end).format().slice(0,19),
        location: "",
        attendeeNames: [],
        attendeeEmailAddresses: [],
        modalVisible: true, 
        maxParticipants: null, 
        reload: false,
        errors: {}
      });
    }

    const selectEvent = (event) => {    
      setClassModal({...classModal,
        modalTitle: "Update a Class",
        id: event._id, 
        title: event.title, 
        dateStart: moment(event.dateStart).format().slice(0,19),
        dateEnd: moment(event.dateEnd).format().slice(0,19),       
        location: event.location[0]._id, 
        locationName: event.location[0].name, 
        attendeeNames: event.names,
        attendeeEmailAddresses: event.emailAddresses,
        maxParticipants: event.maxParticipants,
        cancelled: event.cancelled, 
        modalVisible: true, 
        reload: false,
        errors: {}
      });
    }    
  
    const hideModal = (reload) => {
      setClassModal({...classModal, modalVisible: false, reload: false, showAttendees: false, errors:{}});
        if (reload) {
            pageReload();
        }        
    }; 

    const hideLocationModal = (reload) => {
      setLocationModal({...locationModal, modalVisible: false, reload: false, errors:{}});
        if (reload) {
            pageReload();
        }        
    };     

    const changeHandler = (event) => {
      let valueChanged = event.target.name
      switch(valueChanged) {
        case "title":
        case "cancelemail":
        case "maxParticipants":
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
      setClassModal({...classModal, dateStart: event.target.value})
    } 

    const onEndChange = (event) => {
      setClassModal({...classModal, dateEnd: event.target.value})
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

    const validateLocation = () => {
      setValidated(false);
      console.log(locationModal.state)

      if (locationModal.name === "" || locationModal.name === undefined) {
        allErrors.name = true;        
      }

      if (locationModal.addr1 === "" || locationModal.addr1 === undefined) {
        allErrors.addr1 = true;        
      }
      
      if (locationModal.city === "" || locationModal.city === undefined) {
        allErrors.city = true;        
      }
      
      if (locationModal.state === "Choose...") {
        allErrors.state = true;        
      }     

      var REGEX_PATTERN = "^[0-9][0-9][0-9][0-9][0-9]$"      
      if (!locationModal.zip.match(REGEX_PATTERN))
      {
        allErrors.zip = true;        
      }  

    }    

    const onClassSubmit = async event => {

      event.preventDefault();
      event.stopPropagation();
      
      //validate the class modal
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
      setLocationModal({modalVisible: true, 
      modalTitle: "Add Location",
      name:"",
      addr1:"",
      addr2:"",
      city:"",
      state:"",
      zip:"",
      active:true,
      errors:{}})
    }    

    const editLocation = (data) => {      
      setLocationModal({modalVisible: true, 
      id: data._id,
      modalTitle: "Edit Location",
      name: data.name,
      addr1: data.addr1,
      addr2: data.addr2,
      city: data.city,
      state: data.state,
      zip: data.zip,
      active: data.active,
      errors:{}})
    }        

    const onLocationSubmit = async event => {

      event.preventDefault();
      event.stopPropagation();

      //validate the location modal
      validateLocation();

      //if there are no errors, reset everything and save data
      if (Object.keys(allErrors).length === 0) {
        setValidated(true);
        setLocationModal({...locationModal, modalVisible: false, reload: false, errors: {}});    
        if (locationModal.id === "" || locationModal.id === undefined) {
          APIaddLocation();        
        }
        else {
          APIupdateLocation();
        }    
      }
      else{
        setLocationModal({...locationModal, errors: allErrors})        
      }
    } 

    const locationChangeHandler = (event) => {
      let valueChanged = event.target.name
      if (valueChanged === "active") {
        setLocationModal({...locationModal, active: event.target.checked})
      }
      else {
        setLocationModal({...locationModal, [valueChanged]: event.target.value})
      }  
    }             

    const pageReload = () => {
      window.location.reload();
    }

    const eventStyleGetter = (event) => {;
      let backgroundColor
      if (event.cancelled) {
        backgroundColor = 'red';
      }
      else {
        backgroundColor = '#647474';
      }  

      var style = {
          backgroundColor: backgroundColor,
          border: 'none',
          boxSizing: 'border-box',
          boxShadow: 'none',
          margin: 0,
          padding: '2px 5px',
          borderRadius: '5px',
          color: '#d8d8c8',
          cursor: 'pointer',
          width: '100%',
          textAlign: 'left'
      };
      return {
          style: style
      };
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
                    eventPropGetter={eventStyleGetter}  
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
              editLocation = {editLocation}
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

            <LocationModal 
                data={locationModal}
                onLocationSubmit={onLocationSubmit}
                onHide={hideLocationModal}
                locationChangeHandler={locationChangeHandler}
                validated={validated}/>
                
        </main>
    );
};

export default AdminHome;