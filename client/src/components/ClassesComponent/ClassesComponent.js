import React from "react";
import Checkbox from "../Checkbox/Checkbox"
import Address from "../Address/Address"
import RegistrantContactInfo from "../RegistrantContactInfo/RegistrantContactInfo"
import Row from "react-bootstrap/Row";
import "./ClassesComponent.css"


function ClassesComponent(props) {  

  // console.log(props)
  return (
    <section className="content-form">
      <h1>Registration</h1>
      <h5 className="headers">Step 1: Select any of the upcoming classes you would like to attend:</h5>

      
       {props.classData.map((classStuff,i) => (          
          <div          
            key={i}>
            <Row>             
              <Checkbox 
                classInfo={classStuff}
                onCheckboxChange={props.onCheckboxChange}
              />    
              <Address 
                classInfo={classStuff}
                mapClicked={props.mapClicked}
              />                            
            </Row>
          </div>
        ))}

        <h5 className="headers">Step 2: Enter your name and email address:</h5>
        <RegistrantContactInfo/>
        <div id="btnwrapper" className="pb-3">
            <button type="button" onClick={props.formSubmit} className="btn greenbtn">Save</button>            
        </div> 
    </section>
)

    // //console.log(props.matches.length)
    // //console.log(props.matches.data)
    // if (props.matches.data === undefined || props.matches.data.length === 0) {
    //     return (
    //         <section className="content">
    //           <section>
    //             <div data-testid="no-result">No Matches Found</div>
    //           </section> 
    //         </section>            
    //     )
    // }
    // else {
    //     return (
    //         <section className="content">
    //           <section>
    //             <div className="total-matches" data-testid="total-matches">Total Matches: {props.matches.total}</div>
                
    //             <ul className="mr-20 matches styled" data-testid="match-list">
    //               {props.matches.data.map((match,i) => (
    //                   <li className="slide-up-fade-in" key={i}> Match {match.name} won by {match.winner} </li>
    //               ))}
    //             </ul>
    //           </section>
    
    //           <div data-testid="no-result" className="slide-up-fade-in no-result"></div>
    //         </section>
    //     )
    // }
}

export default ClassesComponent;