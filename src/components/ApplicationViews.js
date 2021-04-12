import React from "react"
import { Route } from "react-router-dom"


import Home from "./home/Home"
import InfoProvider from "./home/InfoProvider"

const ApplicationViews = () => {
    return <>
        <main>
            <InfoProvider>
                <Route exact path="/" render={props => <Home {...props}/>} />
            </InfoProvider>
        </main>
    </>
}

export default ApplicationViews
