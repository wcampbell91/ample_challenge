import React from "react"
import { Card } from "react-bootstrap"
import "./CharacterCard.css"

const CharacterCard = props => {
    const { character } = props
    return (
        <Card className="characterCard">
            <Card.Body>
                <Card.Title><h1>{character.name}</h1></Card.Title>
            </Card.Body>
        </Card>
    )
}

export default CharacterCard
