import React from "react";
import Freedomimage from "../img/Freedomimage.png";

const Freedom = () => {
  return (
    <div className="Freedom">
      <div className="Freedom_Main">
        <div className="Freedom_text">
          <h1>
            Discover the power of <br /> creative freedom with <br /> Nisa.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Pretium consectetur egestas mauris adipiscing dui.
          </p>
          <button>Explore Section   </button>
        </div>
        <div className="Freedom_Img">
          <img src={Freedomimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Freedom;
