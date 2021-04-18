import React, { useEffect, useContext, useState } from "react"
import Films from "../films/Films"
import Ships from "../ships/Ships"
import { infoContext } from "../data/InfoProvider"
import "./SingleCharacter.css"
import { Container, ListGroup, Button } from "react-bootstrap"

const SingleCharacter = props => {
    const { getSingleCharacter, films, ships, species, character } = useContext(infoContext)
    const [ isLoading, setIsLoading ] = useState(false)

    const charId = props.match.params.characterId

    useEffect(() => {
        const UpdateCharacterPage = async (charId) => {
            setIsLoading(true)
            return await getSingleCharacter(charId)
        }
        UpdateCharacterPage(charId)
        setIsLoading(false)


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <Container fluid className="stars singleCharContainer">
            <Container fluid className="twinkling name">
                <Button className="homeButton" variant="warning" href="/">Home</Button>
                {isLoading 
                ? <h1>Loading...</h1>
                : 
                <div>
                    <h1>{character.name}</h1>
                    <Container className="about_me">
                        <h3>About Me</h3>
                        <ListGroup>
                            <ListGroup.Item>Height: {character.height}</ListGroup.Item>
                            <ListGroup.Item>Weight: {character.mass}</ListGroup.Item>
                            <ListGroup.Item>Hair Color: {character.hair_color} </ListGroup.Item>
                            <ListGroup.Item>DOB: {character.birth_year}</ListGroup.Item>
                            <ListGroup.Item>Species: {species && species.name}</ListGroup.Item>
                        </ListGroup>
                    </Container>
                    <Films key={character.id} films={films} character={character} />
                    <Ships key={character.id} ships={ships} character={character} />
                </div> 
                }
            </Container>
        </Container>
    )
}

export default SingleCharacter
