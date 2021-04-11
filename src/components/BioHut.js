import './BioHut.css';
import React from "react"
import { Route } from "react-router-dom"
import ApplicationViews from "./ApplicationViews"

const BioHut = () => (
    <>
        <Route render={props => <ApplicationViews {...props} />} />
    </>
)

export default BioHut;
