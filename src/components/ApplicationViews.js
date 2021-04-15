import React from "react"
import { Route } from "react-router-dom"


import Home from "./home/Home"
import SingleCharacter from "./character/SingleCharacter"
import InfoProvider from "./home/InfoProvider"

const ApplicationViews = () => {
    return <>
        <main>
            <InfoProvider>
                <Route exact path="/" render={props => <Home {...props}/>} />
                <Route exact path="/characters/:characterId(\d+)" render={props => <SingleCharacter {...props}/>} />
            </InfoProvider>
        </main>
    </>
}

export default ApplicationViews
