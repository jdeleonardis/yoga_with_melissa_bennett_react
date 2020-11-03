import React from "react";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import "./LocationCards.css"


function LocationCards(props) {  

  return (
    
    <>
        <CardDeck className="cardDeck">
            {props.locations.map((location,i) => (          
                <div className="individualCardDiv" key={i}>                         
                    <Card className="card">
                        <Card.Body>
                            <Card.Title>{location.name}</Card.Title>                            
                            <Card.Text>
                                {location.addr1}
                                <br></br>
                                {location.city}, {location.state} {location.zip}
                                <br></br>
                            </Card.Text>
                        </Card.Body>
                        <div id="editButtonDiv">
                            <button className="btn greenbtn cardEditBtn">Edit</button>
                        </div>
                        
                        
                        {!location.active ? 
                            <Card.Footer>                        
                                <small id="locationInactive">This location is inactive.</small>                            
                            </Card.Footer>
                        :null}
                    </Card>

                </div>
            ))}
        </CardDeck>
    </>
)
}

export default LocationCards;