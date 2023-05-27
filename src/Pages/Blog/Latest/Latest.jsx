import React from 'react'
import { useState } from "react";
import Article from "./Aricles/Aricles"
import Align from "./Align/Align"

const Latest = () => {

    const [blogData, setBlogData] = useState([]);
    fetch("./Data/LatestData.json")
        .then((e) => {
            return e.json();
        })
        .then((data) => setBlogData(data));




    return (
        <>

            <div className="Latest">
                <div className="Latest_Main">
                    <div className="Latest_top">
                        <div className="Latest_top_one">
                            <button>BLOG & ARTICLE</button>
                            <h1>Our latest articles</h1>
                        </div>
                        <div className="Latest_top_two">
                            <button id='first' >
                                STORIES
                            </button>
                            <button id='middle' >   TECHNOLOGY</button>
                            <button id='end' >DESIGN</button>
                        </div>
                    </div>
                    <div className="Latest_btm_row">
                        {blogData.map((value, key) => (

                            <div className="Latest_btm" key={key}>
                                <img src={value.img} alt="" />
                                <h1>{value.data}</h1>
                                <p>{value.p}</p>
                            </div>
                        ))}


                    </div>

                </div>
            </div>

            <Article />
            <Align/>

        </>
    )
}

export default Latest