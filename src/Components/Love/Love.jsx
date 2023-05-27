import React from "react";
import { useState } from "react";
import Slider from "react-slick";
const Love = () => {
  const [blogData, setBlogData] = useState([]);
  fetch("./Data/LoveData.json")
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
    <div className="Love">
      <h1>
        Customers love the ease <br /> and simplicity
      </h1>
      <div className="Love_Main">
        <Slider {...settings}>
          {blogData.map((value, key) => (
            <div key={key} className="Love_Img">
              <h2>
                <img src={value.img} alt="" />
                {value.h2}
                <span>{value.span}</span>
              </h2>
              <p>{value.lorem}</p>
              <img src={value.img2} alt="" />
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
};

export default Love;
