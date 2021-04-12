import React from "react"
import { Card, CardDeck } from "react-bootstrap"
import "./CharacterCard.css"

const CharacterCard = props => {
    const { characters } = props
    return (
        <CardDeck>
            {characters.map(character => {
                return <Card className="characterCard">
                    <Card.Body>
                        <Card.Title><h1>{character.name}</h1></Card.Title>
                    </Card.Body>
                </Card>
            })}
        </CardDeck>
    )
}

export default CharacterCard
