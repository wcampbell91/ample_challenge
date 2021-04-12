import React from "react"

export const infoContext = React.createContext()

const InfoProvider = props => {
    // const [ characters, setCharacters ] = useState({})
    
    // const getCharacters = async => {
    //     const charactersList = []
    //     return fetch(`https://swapi.py4e.com/api/people/`)
    //     .then(res => res.json())
    //     .then(res => {
    //         res.results.map(result => charactersList.push(result))
    //         for (let i = 1; i < 10; i++) {
    //             fetch(`https://swapi.py4e.com/api/people/?page=${i}`)
    //             res.results.map(result => charactersList.push(result))
    //         }
    //         setCharacters(charactersList)
    //     })
    // }

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
