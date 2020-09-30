import React from "react";
import Checkbox from "../Checkbox/Checkbox"


function ClassesComponent(props) {  

  // console.log(props)
  return (
    <section className="content">
      <h5>Step 1 - Select any of the upcoming classes you would like to attend:</h5>

      <form onSubmit={props.formSubmit}>
       {props.classData.map((classStuff,i) => (          
          <div key={i}>
            <p>{classStuff.location[0].name}</p>
            <Checkbox 
              label={classStuff.dateStart}
              key={classStuff.dateStart}
              // keyValue={i}
              onCheckboxChange={props.onCheckboxChange}
            />                      
          </div>
        ))}

        <h5>Step 2 - Enter your name and email address:</h5>
        <input 
              type="text" 
              className="form-control" 
              id="inputName" 
              placeholder="John Smith"
              onChange={props.onNameChange}
              ref={props.nameField}>      
              {/* required>                                 */}
        </input>
        <input 
              type="text" 
              className="form-control" 
              id="inputEmail" 
              placeholder="YourName@email.com"      
              onChange={props.onEmailChange}
              ref={props.emailField}>
              {/* required>                                 */}
        </input>        
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
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