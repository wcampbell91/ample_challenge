import React, { useState } from "react"
import { Container } from "react-bootstrap"
import Search from "../search/Search"
import "./Home.css"


const Home = props => {
    const [ search, setSearch ] = useState('')

    return(
        <Container className="stars appContainer">
            <Container className="twinkling homeContainer">
                <h1>Star Wars Bio Hut</h1>
                <Search search={search} setSearch={setSearch}/>
            </Container>
        </Container>
    )
}

export default Home
