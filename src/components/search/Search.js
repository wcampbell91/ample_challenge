import React from "react"
import SearchField from "react-search-field"
import "./Search.css"

const Search = props => {
    const { search, setSearch } = props


    const updateSearch = (value, event) => {
        event.preventDefault();
        setSearch(value)
    }


    return <>
        <SearchField
            placeholder="Search"
            onChange={updateSearch}
            className="searchBar"
        />
    </>
}

export default Search
