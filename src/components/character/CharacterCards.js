import React from "react"
import { Card, Button, Container, CardColumns } from "react-bootstrap"
import "./CharacterCard.css"

const CharacterCard = props => {
    const { characters } = props
    
    return (
        <Container className="cardContainer">
            <CardColumns>
                {characters.map(character => {
                    character.id = character.url.split("/")[5]
                    return <Card className="characterCard">
                        <Card.Body>
                            <Card.Title><h1>{character.name}</h1></Card.Title>
                            <Button variant="warning" href={`/characters/${character.id}`}>More Info</Button>
                        </Card.Body>
                    </Card>
                })}
            </CardColumns>
        </Container>
    )
}

export default CharacterCard
