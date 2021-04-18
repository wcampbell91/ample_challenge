/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"

export const infoContext = React.createContext()

const InfoProvider = props => {
    const [ character, setCharacter ] = useState({})
    const [ characters, setCharacters ] = useState([])
    const [ films, setFilms ] = useState()
    const [ ships, setShips ] = useState([])
    const [ species, setSpecies ] = useState({})

    useEffect(() => {
        getCharacters()
        getFilms()
        getShips()
    }, [])
    
    const getFilms = (filmList = [], url = "https://swapi.py4e.com/api/films") => {
        return new Promise ((resolve, reject) => fetch(url)
        .then(res => {
            res.json().then(res => {
                setFilms(res)
                resolve(res)
            }).catch(reject)
        }).catch(reject)
    )}

    const getShips = (shipList = [], url = "https://swapi.py4e.com/api/starships") => {
        return new Promise ((resolve, reject) => fetch(url)
        .then(res => {
            res.json().then(res => {
                shipList = shipList.concat(res.results)
                if(res.next) {
                    getShips(shipList, res.next).then(resolve).catch(reject)
                } else {
                    shipList = shipList.concat(res.results)
                    setShips(shipList)
                    resolve(shipList)
                }
            }).catch(reject)
        }).catch(reject)
    )}

    // const getSpecies = (speciesList = [], url="https://swapi.py4e.com/api/species") => {
    //     return new Promise ((resolve, reject) => fetch(url)
    //     .then(res => {
    //         res.json().then(res => {
    //             speciesList = speciesList.concat(res.results)
    //             if(res.next) {
    //                 getSpecies(speciesList, res.next).then(resolve).catch(reject)
    //             } else {
    //                 speciesList = speciesList.concat(res.results)
    //                 setSpecies(speciesList)
    //                 resolve(speciesList)
    //             }
    //         }).catch(reject)
    //     }).catch(reject)
    // )}

    const getSpecies = (url) => {
        return fetch(url).then(res => res.json())
    }



    const getSingleCharacter = (charId) => {
        return new Promise((resolve, reject) => fetch(`https://swapi.py4e.com/api/people/${charId}`)
            .then(res => res.json())
            .then(res => {
                getSpecies(res.species)
                .then(species => setSpecies(species))
                setCharacter(res)
                resolve(res)}).catch(err => reject(err))
        )
    }

    const getCharacters = (characterList = [], url = "https://swapi.py4e.com/api/people/") => {
        return new Promise((resolve, reject) => fetch(url)
            .then(res => {
                res.json().then(res => {
                    characterList = characterList.concat(res.results)
                    if(res.next) {
                        getCharacters(characterList, res.next).then(resolve).catch(reject)
                    } else {
                        characterList = characterList.concat(res.results)
                        setCharacters(characterList)
                        resolve(characterList)
                    }
                }).catch(reject)
            }).catch(reject)
        )}

    return (
        <infoContext.Provider value={{
            getSingleCharacter,
            getCharacters,
            getFilms,
            getShips,
            character,
            characters,
            films,
            ships,
            species,
        }}>
            {props.children}
        </infoContext.Provider>
    )
}

export default InfoProvider
