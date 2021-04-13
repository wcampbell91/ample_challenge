import React, { useState } from "react"

export const infoContext = React.createContext()

const InfoProvider = props => {
    const [ character, setCharacter ] = useState({})

    const getFilmData = (filmUrl) => {
        return new Promise((resolve, reject) => fetch(filmUrl)
        .then(film => film.json())
        .then(film => {
            resolve(film)
        }).catch(reject)
    )}

    const getShipData = (shipUrl) => {
        return new Promise((resolve, reject) => fetch(shipUrl)
        .then(ship => ship.json())
        .then(ship => {
            resolve(ship)
        }).catch(reject)
    )}

    const getSpeciesData = (speciesUrl) => {
        return new Promise((resolve, reject) => fetch(speciesUrl)
        .then(species => species.json())
        .then(species => resolve(species)).catch(reject)
    )}

    const getSingleCharacter = (charId) => {
        return new Promise((resolve, reject) => fetch(`https://swapi.py4e.com/api/people/${charId}`)
        .then(res => {
            res.json().then(res => {
                const filmList = []
                if (res.films) {
                    res.films.map((film) => {
                        return getFilmData(film)
                        .then(film => filmList.push(film))
                    })
                }
                const shipList = []
                if(res.starships) {
                    res.starships.map((ship) => {
                        return getShipData(ship)
                        .then(ship => shipList.push(ship))
                    })
                }
                if (res.species) {
                    getSpeciesData(res.species)
                    .then(species => res.species = species)
                }
                res.films = filmList
                res.starships = shipList
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
            // .then(setCharacters(characterList)).catch(reject)
        )}

    // const getCharacters = (progress, url = "https://swapi.py4e.com/api/people/", characterList = []) => {
    //     return new Promise((resolve, reject) => fetch(url)
    //     .then(response => {
    //         if (response.status !== 200) {
    //             throw `${response.status}: ${response.statusText}`;
    //         }
    //         response.json().then(res => {
    //             characterList = characterList.push(res.results);

    //             if (res.next) {
    //                 // progress && progress(characterList);
    //                 // setCharacters(characterList)
    //                 getCharacters(progress, res.next, characterList).then(resolve).catch(reject)
    //             } else {
    //                 // setCharacters(characterList)
    //                 resolve(characterList)
    //             }
    //         }).catch(reject)
    //     }).catch(reject))
    // }

    return (
        <infoContext.Provider value={{
            character,
            getSingleCharacter,
            getCharacters
        }}>
            {props.children}
        </infoContext.Provider>
    )
}

export default InfoProvider
