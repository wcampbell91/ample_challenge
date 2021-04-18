import React, { useEffect, useContext, useState } from "react"
import Films from "../films/Films"
import Ships from "../ships/Ships"
import Species from "../species/Species"
import { infoContext } from "../data/InfoProvider"
import "./SingleCharacter.css"
import { Container, ListGroup, Button } from "react-bootstrap"

const SingleCharacter = props => {
    const { getSingleCharacter, films, ships, species } = useContext(infoContext)
    const [character, setCharacter ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)

    const charId = props.match.params.characterId

    useEffect(() => {
        getSingleCharacter(charId)
        .then(res => setCharacter(res))
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
                            <ListGroup.Item>Species: {character.species && character.species.name}</ListGroup.Item>
                        </ListGroup>
                    </Container>
                    <Films films={films} character={character} />
                    <Ships ships={ships} character={character} />
                    {/* <Container className="films">
                        <h3>Films</h3>
                        <ListGroup>
                            {filmList}
                        </ListGroup>
                    </Container> */}
                    {/* <Container className="starships">
                        <h3>Starships flown</h3>
                        <ListGroup>
                            {shipList}
                        </ListGroup>
                    </Container> */}
                </div> 
                }
            </Container>
        </Container>
    )
}

export default SingleCharacter
