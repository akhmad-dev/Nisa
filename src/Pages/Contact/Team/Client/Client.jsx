import React from 'react'
import { useState } from "react";
import Slider from "react-slick";

const Client = () => {

    const [blogData, setBlogData] = useState([]);
    fetch("./Data/ClientData.json")
        .then((e) => {
            return e.json();
        })
        .then((data) => setBlogData(data));


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="Client">
            <div className="Client_Main">

                <div className="Client_top">
                    <button>Testimonial </button>
                    <h1>What our client says</h1>
                </div>

                <div className="Client_row">
                    <Slider {...settings}>
                        {blogData.map((value, key) => (
                            <div className="Client_middle" key={key}>
                                <h1>{value.h1}</h1>
                                <p>{value.p}</p>
                                <img src={value.img} alt="" />
                                <h2>{value.h2}
                                </h2>
                                <h4>{value.h4}</h4>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </div>
    )
}

export default Client
