import React from "react";
import Banners from "../img/Banners.png";
import firstimage from "../img/firstimage.png";

const Banner = () => {
  return (
    <div className="Banner">
      <div className="Banner_Main">
        <div className="Banner_Text">
          <h1>
            Nisa boosts team <br /> product excellence
          </h1>
          <p>
            Nisa is constantly improving to move forward through <br />
            dashboard, statistics, data and verify and superior <br /> human
            resources.
          </p>
          <button>
            <h6>
              Get Started{" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </h6>
          </button>
        </div>
        <div className="Banner_Img">
          <img src={Banners} alt="" />

          <div className="Banner_Img_two">
            <img src={firstimage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

