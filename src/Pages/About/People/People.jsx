import React from 'react'
import { useState } from "react";

const People = () => {

    const [blogData, setBlogData] = useState([]);
    fetch("./Data/PeopleData.json")
        .then((e) => {
            return e.json();
        })
        .then((data) => setBlogData(data));




    return (
        <div className="People">
            <div className="People_Main">
                <div className="People_Top">
                    <button>Our team</button>
                    <h1>People with all the skills you need <br /> are in Nisa! </h1>
                </div>
                <div className="People_row">
                    {blogData.map((value, key) => (
                        <div className="People_midlle" key={key}>
                            <img src={value.img} alt="" />
                            <h1>{value.h1}</h1>
                            <p>{value.p}</p>
                            <img src={value.img2} alt="" />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default People
