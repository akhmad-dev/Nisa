import React from "react";
import Powerimage from "../img/Power.png";
import Powerbutton from "../img/Powerbutton.png";

const Power = () => {
  return (
    <div className="Power">
      <div className="Power_Main">
        <div className="Power_Img">
          <img src={Powerimage} alt="" />
        </div>
        <div className="Power_text">
          <h1>Discover the power of <br /> creative freedom with Nisa.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br />
            tincidunt finibus tortor. Donec lobortis augue sed ante molestie,
            vitae <br /> maximus nunc semper.
          </p>
          <button>Explore Section</button>
          <h2>Add some additional details about your product</h2>
          <div className="Power_text_button">
            <img src={Powerbutton} alt="" />
            <h3>
              Motiur Leeman <br /> <span>Markating Manager</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Power;
