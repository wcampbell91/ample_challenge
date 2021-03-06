import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import BioHut from "./components/BioHut";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <BioHut />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
