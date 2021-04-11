import React from "react"
import { Route } from "react-router-dom"
import Home from "./home/Home"

const ApplicationViews = () => {
    return <>
        <main>
            <Route exact path="/" render={props => <Home {...props}/>} />
        </main>
    </>
}

export default ApplicationViews
