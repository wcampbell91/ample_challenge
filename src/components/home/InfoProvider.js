import React, { useState } from "react"

export const infoContext = React.createContext()

const InfoProvider = props => {
    const [ characters, setCharacters ] = useState({})
    
    const getCharacters = () => {
        const charactersList = []
        return fetch(`https://swapi.py4e.com/api/people/`)
        .then(res => res.json())
        .then(res => {
            res.results.map(result => charactersList.push(result))
            for (let i = 1; i < 10; i++) {
                fetch(`https://swapi.py4e.com/api/people/?page=${i}`)
                res.results.map(result => charactersList.push(result))
            }
            setCharacters(charactersList)
        })
    }

    return (
        <infoContext.Provider value={{
            characters,
            getCharacters
        }}>
            {props.children}
        </infoContext.Provider>
    )
}

export default InfoProvider
