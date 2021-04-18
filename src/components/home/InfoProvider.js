import React, { useState } from "react"

export const infoContext = React.createContext()

const InfoProvider = props => {
    const [ character, setCharacter ] = useState({})
    const [ films, setFilms ] = useState([])
    const [ ships, setShips ] = useState([])
    const [ species, setSpecies ] = useState({})

    const getFilmData = (filmUrl) => {
        return fetch(filmUrl).then(film => film.json())}

    const getShipData = (shipUrl) => {
        return fetch(shipUrl).then(ship => ship.json())
    }

    const getSpeciesData = (speciesUrl) => {
        return fetch(speciesUrl).then(species => species.json())
}


    const getSingleCharacter = (charId) => {
        return new Promise((resolve, reject) => fetch(`https://swapi.py4e.com/api/people/${charId}`)
        .then(res => {
            res.json().then(res => {
                const filmList = []
                const getFilms = async (res) => {
                    return await res.films.map((film) => {
                        return getFilmData(film)
                        .then(film => filmList.push(film))
                })}
                
                getFilms(res)
                setFilms(filmList)

                const shipList = []
                const getships = async (res) => {
                    return await res.starships.map((ship) => {
                            return getShipData(ship)
                            .then(ship => shipList.push(ship))
                })}
                
                getships(res)
                setShips(shipList)
                
                
                const getSpecies = async (res) => {
                    return await getSpeciesData(res.species)
                    .then(species => setSpecies(species)
                )}
                getSpecies(res)

                resolve(res)
            }).catch(err => reject(err))
        })
    )}

    const getCharacters = (characterList = [], url = "https://swapi.py4e.com/api/people/") => {
        return new Promise((resolve, reject) => fetch(url)
            .then(res => {
                res.json().then(res => {
                    characterList = characterList.concat(res.results)
                    if(res.next) {
                        getCharacters(characterList, res.next).then(resolve).catch(reject)
                    } else {
                        characterList = characterList.concat(res.results)
                        resolve(characterList)
                    }
                }).catch(reject)
            }).catch(reject)
        )}

    return (
        <infoContext.Provider value={{
            getSingleCharacter,
            getCharacters,
            getFilmData,
            getShipData,
            getSpeciesData,
            character,
            films,
            ships,
            species
        }}>
            {props.children}
        </infoContext.Provider>
    )
}

export default InfoProvider
