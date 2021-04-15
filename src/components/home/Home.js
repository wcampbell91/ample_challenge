import React, { useState, useEffect, useContext } from "react"
import { Container } from "react-bootstrap"

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const dynamicSearch = () => characters.filter((character) => character.name.toLowerCase().includes(search.toLowerCase()))


    return(
        <Container fluid className="stars">
            <Container fluid className="twinkling appContainer">
                <Container className="homeContainer">
                    <h1 className="title">Star Wars Bio Hut</h1>
                    <Search className="searchBar" search={search} setSearch={setSearch} dynamicSearch={dynamicSearch}/>
                    <CharacterCard characters={dynamicSearch()} />
                </Container>
            </Container>
        </Container>
    )
}

export default Home
