import React from "react"
import { Container, ListGroup } from "react-bootstrap"


const Films = props => {
    const { films, character } = props
    
    const filmList = films && films.results.filter((film) => character.films && character.films.includes(film.url))
    
    const filmItems = filmList && filmList.map((film) => <ListGroup.Item>{film.title}</ListGroup.Item>)

    return(
            <Container className="films">
                <h1>Films</h1>
                <ListGroup>
                    {filmItems}
                </ListGroup>
                
            </Container>
    )
}

export default Films
