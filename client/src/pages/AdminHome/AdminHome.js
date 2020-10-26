//todo: 
//add logout
//add dotenv
//add location maintenance
//format the modal form using react-bootstrap form
//set the event if clicking on a month or day
//add validation to the modal
//  --add a title
//  --add a location
//  --add an email message when cancelled selected
//  --add end date after start date
//  --if end date is odd, display
//add sending email with cancellation
//change colors on calendar

import React, { useState, useEffect } from "react";
import API from '../../utils/API'
import { Calendar, momentLocalizer } from "react-big-calendar";
import ClassModal from "../../components/ClassModal/ClassModal";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./AdminHome.css";

function AdminHome() {

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
      modalTitle: ""
    });

    const [activeLocations, setActiveLocations] = useState([]);

    const [dateToLandOn, setDateToLandOn] = useState(new Date());

    useEffect(() => {
        APIgetAllClasses();
        APIgetActiveLocations();
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
          // console.log(scheduledClasses)
      
          for (let i = 0; i < scheduledClasses.length; i++) {
              scheduledClasses[i].start = moment.utc(scheduledClasses[i].dateStart).toDate()
              scheduledClasses[i].end = moment.utc(scheduledClasses[i].dateEnd).toDate()  
              scheduledClasses[i].allDay = false
          }
          
          setClassData(scheduledClasses);
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
      //console.log(event)
      setClassModal({modalTitle: "Create a Class",
        dateStart: new Date(event.start), 
        dateEnd: new Date(event.end), 
        location: "",
        modalVisible: true, 
        reload: false});
    }

    const selectEvent = (event) => {            
      //console.log(event)
      setClassModal({...classModal,
        modalTitle: "Update a Class",
        id: event._id, 
        title: event.title, 
        dateStart: new Date(event.dateStart), 
        dateEnd: new Date(event.dateEnd), 
        location: event.location[0]._id, 
        locationName: event.location[0].name, 
        cancelled: event.cancelled, 
        modalVisible: true, 
        reload: false});
    }    
  
    const hideModal = (reload) => {
      setClassModal({...classModal, modalVisible: false, reload: false});
        if (reload) {
            window.location.reload();
        }        
    }; 

    const changeHandler = (event) => {
      let valueChanged = event.target.name
      // console.log(valueChanged)
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
      setClassModal({...classModal, dateStart: new Date(event)})
    } 

    const onEndChange = (event) => {
      setClassModal({...classModal, dateEnd: new Date(event)})
    } 

    const onSubmit = () => {
      setClassModal({...classModal, modalVisible: false, reload: false});
      
      if (classModal.id === "" || classModal.id === undefined) {
        APIaddClass();        
      }
      else {
        APIupdateClass();
      }
    } 

    return (    
        <main className="container">
            <div className="row py-3">
                <section className="col-lg-12">
                        <header>
                            <h1>Class Calendar</h1>
                        </header>        
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
                <section className="col-lg-12">
                        <header>
                            <h1>Locations</h1>
                        </header>        
                </section>
            </div>

            <ClassModal 
                data={classModal}
                locations={activeLocations}
                onStartChange={onStartChange}
                onEndChange={onEndChange}
                onSubmit={onSubmit}
                onHide={hideModal}
                changeHandler={changeHandler}/>
                
        </main>
    );
};

export default AdminHome;