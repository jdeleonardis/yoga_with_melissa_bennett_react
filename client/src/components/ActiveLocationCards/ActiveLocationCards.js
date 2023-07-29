import React from "react";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import "./ActiveLocationCards.css"


// function ActiveLocationCards(props) {      
//   return (
//     <CardDeck className="cardDeckList">
//         {props.data.map((location,i) => (          
//             <div className="individualCardDivList" key={i}>  

//                 <Card>
//                     <Card.Body>
//                         <b>
//                         <Card.Text>
//                             {location.name}<br></br>
//                             {location.addr1}<br></br>
//                             {location.city}, {location.state} {location.zip}
//                             <br></br>
//                         </Card.Text>
//                         </b>
//                     </Card.Body>
//                 </Card>
//             </div>
//         ))}
//     </CardDeck>
//     )
// }

// export default ActiveLocationCards;

function ActiveLocationCards(props) {   
    return (
        <div>
            {props.data.length > 0 ?                
                <CardDeck className="cardDeckList">
                    {props.data.map((location,i) => (          
                        <div className="individualCardDivList" key={i}>  
            
                            <Card>
                                <Card.Body>
                                    <b>
                                    <Card.Text>
                                        {location.name}<br></br>
                                        {location.addr1}<br></br>
                                        {location.city}, {location.state} {location.zip}
                                        <br></br>
                                    </Card.Text>
                                    </b>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </CardDeck>                    
            :
                <div>
                    <p>
                        <h5>
                            <ul>
                                <center><li style={{listStyleType:"none"}}>No classes currently scheduled</li></center>
                            </ul>
                        </h5>
                    </p>
                </div>
            }
    </div>
    )
  }
  
  export default ActiveLocationCards;



// {props.classData.length > 0
//     ?      
//     props.classData.map((classStuff,i) => (          
//        <div          
//          key={i}>
//          <Row>             
//            <Checkbox 
//              classInfo={classStuff}
//              onCheckboxChange={props.onCheckboxChange}
//            />    
//            <Address 
//              classInfo={classStuff}
//              mapClicked={props.mapClicked}
//            />                            
//          </Row>
//        </div>
//      ))
//      : 
//      <div>
//        <p>
//          <h5>
//            <ul>
//            <li style={{listStyleType:"none"}}>No classes currently scheduled</li>
//            </ul>
//          </h5>
//        </p>
//      </div>
//     }

