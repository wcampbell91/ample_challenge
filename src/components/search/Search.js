import React from "react"
import SearchField from "react-search-field"
import { Container } from "react-bootstrap"
import "./Search.css"

const Search = props => {
    const { search, setSearch } = props


    const updateSearch = (value, event) => {
        event.preventDefault();
        setSearch(value)
    }


    return <>
    <Container className="searchContainer">
        <SearchField
            placeholder="Search"
            onChange={updateSearch}
            className="searchBar"
        />
    </Container>
    </>
}

export default Search
