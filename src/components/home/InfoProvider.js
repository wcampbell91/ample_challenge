import React, { useState } from "react"

export const infoContext = React.createContext()

const InfoProvider = props => {
    const [ films, setFilms ] = useState([])
    const [ ships, setShips ] = useState([])

    const getSingleCharacter = (charId) => {
        return new Promise((resolve, reject) => fetch(`https://swapi.py4e.com/api/people/${charId}`)
        .then(res => {
            res.json().then(res => {
                const filmList = []
                res.films.map((film) => {
                    return fetch(film).then(filmList.push(res))
                    // Continue to add for starships
                })
            })
        }))
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
            // characters,
            getCharacters
        }}>
            {props.children}
        </infoContext.Provider>
    )
}

export default InfoProvider
