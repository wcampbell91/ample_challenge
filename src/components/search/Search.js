import React from "react"
import SearchField from "react-search-field"
import { Container } from "react-bootstrap"
import "./Search.css"

const Search = props => {
    const { search, setSearch, updateSearch } = props


    const updateInput = (value, event) => {
        event.preventDefault();
        setSearch(value)
        updateSearch(search)
    }


    return <>
    <Container className="searchContainer">
        <SearchField
            placeholder="Search"
            onChange={updateInput}
            className="searchBar"
        />
    </Container>
    </>
}

export default Search
