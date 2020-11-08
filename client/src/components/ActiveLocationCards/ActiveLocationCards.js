import React from "react";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import "./ActiveLocationCards.css"


function ActiveLocationCards(props) {      
  return (
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
)
}

export default ActiveLocationCards;