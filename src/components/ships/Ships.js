import React from "react"
import { Container, ListGroup } from "react-bootstrap"


const Ships = props => {
    const { ships, character } = props
    
    const shipList = ships && ships.filter((ship) => character.starships && character.starships.includes(ship.url.toLowerCase()))

    const newShipList = shipList.filter((elem, pos) => shipList.indexOf(elem) === pos)
        
    const shipItems = newShipList && newShipList.map((ship) => <ListGroup.Item>{ship.name}: {ship.model}</ListGroup.Item>)

    return(
            <Container className="ships">
                <h3>ships</h3>
                <ListGroup>
                    {shipItems}
                </ListGroup>
            </Container>
    )
}

export default Ships
