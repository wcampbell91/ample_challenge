import React, { useEffect, useContext, useState } from "react"
import { infoContext } from "../home/InfoProvider"

const SingleCharacter = props => {
    const { getSingleCharacter } = useContext(infoContext)
    const [character, setCharacter ] = useState({})

    const charId = props.match.params.characterId

    useEffect(() => {
        getSingleCharacter(charId)
        .then(res => setCharacter(res))
    }, [])

    

    return(
        <h1>FARTS!!!</h1>
    )
}

export default SingleCharacter
