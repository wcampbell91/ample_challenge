import React, { useState, useEffect, useContext } from "react"
import { Container, CardColumns } from "react-bootstrap"

import { infoContext } from "./InfoProvider"
import Search from "../search/Search"
import CharacterCard from "../character/CharacterCards"
import "./Home.css"


const Home = props => {
    const [ search, setSearch ] = useState('')
    const [ characters, setCharacters ] = useState([])
    const { getCharacters } = useContext(infoContext)

    useEffect(() => {
        getCharacters()
        .then(characterList => setCharacters(characterList))
    }, [])

    const updateSearch = (search) => {
        const filteredList = characters && characters.filter((character) => character.name.toLowerCase().includes(search.toLowerCase()))
        setCharacters(filteredList)
    }

    const characterCards = characters.map((character) => <CharacterCard key={character.url} character={character} />)

    return(
        <Container className="stars">
            <Container className="twinkling appContainer">
                <Container className="homeContainer">
                    <h1>Star Wars Bio Hut</h1>
                    <Search search={search} setSearch={setSearch} updateSearch={updateSearch}/>
                    <Container className="cardContainer">
                        <CardColumns>
                            {characterCards}
                        </CardColumns>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default Home
