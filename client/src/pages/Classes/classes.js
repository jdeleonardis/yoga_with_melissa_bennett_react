import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import ContactNameContext from "../../utils/ContactNameContext";
import ContactEmailContext from "../../utils/ContactEmailContext";
import ClassesComponent from "../../components/ClassesComponent/ClassesComponent.js";
import SimpleModal from "../../components/SimpleModal/index.js";

function Classes() {
    const [classData, setClassData] = useState([]);    

    const [contactNameInfo, setContactNameInfo] = useState({
        name: "",
        handleNameChange: (e) => {   
            setContactNameInfo({...contactNameInfo, name: e.target.value})
        }
    }) 
    const [contactEmailInfo, setContactEmailInfo] = useState({
        email: "",
        handleEmailChange: (e) => {
            setContactEmailInfo({...contactEmailInfo, email: e.target.value})
        }
    })        

    const [isOpen, setIsOpen] = useState({
        modalVisible: false,
        modalText: "",
        reload: false
      });  

    useEffect(() => {
        APIGetNextClasses();
    }, []);    

    const showModal = (message,reload) => {
        setIsOpen({modalVisible: true, modalText: message, reload: reload});
    };
    
    const hideModal = (reload) => {
        setIsOpen(false);
        if (reload) {
            window.location.reload();
        }        
    };       

    const APIGetNextClasses = () => {        
        API.getNextClasses()
          .then(res => {
            if (res.data.length === 0) {
              throw new Error("No results found.");
            }
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            } 
            setClassData(res.data.map(obj=> ({ ...obj, selected: 'false' })))    
          })
          .catch(err => console.log(err));
      }    


    const processClassAttendancePromise = () => {
        return new Promise(resolve => {
            const contactInfo = {
                name: contactNameInfo.name,
                email: contactEmailInfo.email
            }
            classData.forEach(classData => {
                if (classData.selected === true) {    
                    API.updateClassAttendance(classData._id, contactInfo)
                    .then(res => {
                        if (res.data.status === "error") {
                            throw new Error(res.data.message);
                        }                    
                    })
                    .catch(err => console.log(err));                
                }
            })
        })

    }

    const handleFormSubmit = (e) => {
        e.preventDefault();          
        let somethingChecked = false
        for (let i=0; i < classData.length; i++) {
            if (classData[i].selected === true) {
                somethingChecked = true
                break;
            }
        }
        if (!somethingChecked) {
            showModal("Please select a class.",false)
        }
        else{
            processClassAttendancePromise().then(showModal("Class registration saved.",true)); 
        }        
    }

    const handleCheckboxChange = (e) => {
        let newArray = classData;
        for (let i=0; i < newArray.length; i++) {
            if (newArray[i].dateStart === e.target.name) { 
                newArray[i].selected = e.target.checked
                break;
            }
        }
        setClassData(newArray);
    }

    const showInMapClicked = (address) => {        
        API.getGeoLocation(address)
        .then(res => {
            if (res === undefined) {
                throw new Error("There was an error retrieving the map.");
            }        
            if (res.data.length === 0) {
                throw new Error("No results found.");
            }
            if (res.data.status === "error") {
                throw new Error(res.data.message);
            }
            return res
        })
        .then(res => {
            const lat = res.data.data[0].latitude
            const long = res.data.data[0].longitude
            window.open("https://maps.google.com?q="+lat+","+long);
        })        
        .catch(err => console.log(err));        
    };

 
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
                <ContactNameContext.Provider value={contactNameInfo}>
                    <ContactEmailContext.Provider value={contactEmailInfo}>
                        <ClassesComponent 
                            classData={classData}
                            formSubmit={handleFormSubmit}
                            onCheckboxChange={handleCheckboxChange}
                            mapClicked={showInMapClicked}
                        />
                    </ContactEmailContext.Provider>
                </ContactNameContext.Provider>
            </div> 
            <SimpleModal 
                show={isOpen.modalVisible}
                onHide={hideModal}
                body={isOpen.modalText}
                reload ={isOpen.reload}/>           
        </main>
    );
}

export default Classes;