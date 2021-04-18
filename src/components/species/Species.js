import React, { useState, useEffect, useContext } from "react"
import { Container, ListGroup } from "react-bootstrap"


const Species = props => {
    const { species, character } = props
    
    // const charSpecies = species ? species.find((s) => s.url === character.species[0]) : ""


    return(
                <ListGroup.Item>
                    {/* Species: {charSpecies.name} */}
                </ListGroup.Item>
    )
}

export default Species
