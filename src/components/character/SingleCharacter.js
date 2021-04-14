import React, { useEffect, useContext, useState } from "react"
import { infoContext } from "../home/InfoProvider"
import "./SingleCharacter.css"
import { Container, ListGroup } from "react-bootstrap"

const SingleCharacter = props => {
    const { getSingleCharacter, films, ships, species } = useContext(infoContext)
    const [character, setCharacter ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)

    const charId = props.match.params.characterId

    useEffect(() => {
        const updateCharacterState = async (charId) => {
            setIsLoading(true)
            const fetcher = await getSingleCharacter(charId)
            setCharacter(fetcher)
            setIsLoading(false)
        }
        updateCharacterState(charId)
    }, [])

    const filmList = films.map((film) => <ListGroup.Item>{film.title}</ListGroup.Item>)

    const shipList = ships.map((ship) => <ListGroup.Item>{ship.name}</ListGroup.Item>)
    

    return(
        <Container fluid className="stars singleCharContainer">
            <Container fluid className="twinkling name">
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
                            <ListGroup.Item>Species Info: {species.name}</ListGroup.Item>
                        </ListGroup>
                    </Container>
                    <Container className="films">
                        <h3>Films</h3>
                        <ListGroup>
                            {filmList}
                        </ListGroup>
                    </Container>
                    <Container className="starships">
                        <h3>Starships flown</h3>
                        <ListGroup>
                            {shipList}
                        </ListGroup>
                    </Container>
                </div> 
                }
        </Container>
        </Container>
    )
}

export default SingleCharacter
