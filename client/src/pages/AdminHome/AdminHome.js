import React, { useState, useEffect } from "react";
import API from '../../utils/API'
import { Calendar, momentLocalizer } from "react-big-calendar";
import ClassModal from "../../components/ClassModal/ClassModal";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

function AdminHome() {

    const [classData, setClassData] = useState([]);

    const [classModal, setClassModal] = useState({
      id: "",
      title: "",
      locationID: "",
      locationName: "",
      dateStart: new Date(),
      dateEnd: new Date(),
      cancelled: false,
      cancelemail: "",
      modalVisible: false,
      reload: false
    });

    const [activeLocations, setActiveLocations] = useState([]);

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
    
    //const selectSlot = ({ start, end }) => {
    const selectSlot = (event) => {      
      //console.log(event)
      //showModal("Select Slot",false)
      
      // const title = window.prompt('New Event name')
      // if (title)
      //   this.setState({
      //     events: [
      //       ...this.state.events,
      //       {
      //         start,
      //         end,
      //         title,
      //       },
      //     ],
      //   })
    }

    const selectEvent = (event) => {            
      //console.log(event)
      setClassModal({...classModal,
        id: event._id, 
        title: event.title, 
        dateStart: new Date(event.dateStart), 
        dateEnd: new Date(event.dateEnd), 
        locationID: event.location[0]._id, 
        locationName: event.location[0].name, 
        cancelled: event.cancelled, 
        modalVisible: true, 
        reload: false});
      //showModal("Select event",false)
      // const title = window.prompt('New Event name')
      // if (title)
      //   this.setState({
      //     events: [
      //       ...this.state.events,
      //       {
      //         start,
      //         end,
      //         title,
      //       },
      //     ],
      //   })
    }    

    // const showModal = (message,reload) => {
    //   setClassModal({...classModal,modalVisible: true, reload: reload});
    // };
  
    const hideModal = (reload) => {
      // console.log(classModal)
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
          setClassModal({...classModal, locationID: locationID, locationName: event.target.value})
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

    return (    
        <main className="container">
            <div className="row py-3">
                <section className="col-lg-12">
                        <header>
                            <h1>Class Calendar</h1>
                        </header>        
                </section>
            </div>

            {/* <div className="row">
                <section className="col-lg-12">
                    <div>
                        <p>test test test test</p>
                    </div>


                    <button type="submit" onClick={logOut} className="btn greenbtn">Log out</button>
                    <button type="submit" onClick={APIaddClass} className="btn greenbtn">Add Class</button>
                </section>     
            </div> */}

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
                    onSelectEvent={selectEvent}
                    onSelectSlot={selectSlot}  
                    selectable={true}
                />
            </div>

            <ClassModal 
                data={classModal}
                locations={activeLocations}
                onStartChange={onStartChange}
                onEndChange={onEndChange}
                onHide={hideModal}
                changeHandler={changeHandler}/>
                {/* show={classModal.modalVisible}
                onHide={hideModal}
                body={classModal.modalText}
                reload ={classModal.reload}/>    */}

        </main>
    );
};

export default AdminHome;