import React from "react";
import './Error.scss'
import notfound from "./img/notfound.png";
import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <div className="Error_container">
            <div className="Error_top">
                <img src={notfound} alt="" />
            </div>
            <div className="Error_bottom">
                <h1>Oops! This page was not found.</h1>
                <p>
                    Not all who wander are lost. Unfortunately, in this case it look like you are. This <br />   page does not seem to exist. Don’t feel bad, let us help you get back on your way!
                </p>
                <button>
                <Link to="/home">
                    Head Back To Home Page
                </Link>
                </button>
            </div>

        </div>
    );
};
export default Error;