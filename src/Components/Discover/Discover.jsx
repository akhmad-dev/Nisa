import React from "react";
import Discovericon1 from "../img/Discovericon1.png";
import Discovericon2 from "../img/Discovericon2.png";
import Diskoverimage from "../img/Diskoverimage.png";

const Discover = () => {
  return (
    <div className="Discover">
      <div className="Discover_Main">
        <div className="Discover_Img">
          <img src={Diskoverimage} alt="" />
        </div>
        <div className="Discover_text">
          <div className="Discover_text_one">
            <h1>
              Discover the power of <br /> creative freedom with <br /> Nisa.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Pretium consectetur egestas mauris adipiscing dui.
            </p>
            <div className="Discover_text_one_button">
              <button>
                <h3>Explore Section</h3>
              </button>

              <h2>
                Get Started{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="white" />
                  <path
                    d="M16.5 11.134C17.1667 11.5189 17.1667 12.4811 16.5 12.866L10.5 16.3301C9.83333 16.715 9 16.2339 9 15.4641L9 8.5359C9 7.7661 9.83333 7.28497 10.5 7.66987L16.5 11.134Z"
                    fill="#FF3C78"
                  />
                </svg>
              </h2>
            </div>
          </div>
          <div className="Discover_text_two">
            <div className="Discover_text_two_icon_1">
              <img src={Discovericon1} alt="" />
              <h2>
                {" "}
                Built to be customise <br /> with complete ease.
              </h2>
            </div>
            <div className="Discover_text_two_icon_2">
              <img src={Discovericon2} alt="" />
              <h2>
                {" "}
                All the pages you <br /> need to go live.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
