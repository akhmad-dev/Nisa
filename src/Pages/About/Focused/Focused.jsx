import React from "react";
import Client from "../Client/Client";
import People from "../People/People";
import Aricles from "./Aricles/Aricles";

import ImageFocused from "../image/ImageFocused.png";
import ImageFocused1 from "../image/ImageFocused1.png";
import ImageFocused2 from "../image/ImageFocused2.png";
import ImageFocused3 from "../image/ImageFocused3.png";
import ImageFocused4 from "../image/ImageFocused4.png";



// import { useState } from "react";
const Focused = () => {
  return (
    <>
      <div className="Focused">
        <div className="Focused_Main">
          <div className="Focused_top">
            <button>MEET OUR COMPANY</button>
            <h1>We’re a people focused <br /> organisation</h1>
          </div>
          <div className="Focused_bottom_card">
            <img src={ImageFocused} alt="" />
            <img src={ImageFocused1} alt="" />
            <img src={ImageFocused2} alt="" />
            <img src={ImageFocused3} alt="" />
            <img src={ImageFocused4} alt="" />
          </div>
          <div className="Focused_bottom">

            <h1>98 <span>%</span>
              <p>Customer satisfaction </p>
            </h1>

            <h2>120M <span>+</span>
              <p>CLIENT RETENTION </p>
            </h2>


            <h3>32K <span>+</span>
              <p > EMAILS PER MONTH </p>
            </h3>

            <h4>48M <span>+</span>
              <p>MONTHLY CAMAIGNS  </p>
            </h4>



          </div>
        </div>
      </div>
      <Client />
      <People />
      <Aricles />

    </>
  );
};

export default Focused;
