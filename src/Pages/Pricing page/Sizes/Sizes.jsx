import React from "react";
import Sizesimage from "../image/Sizesimage.png";
import Sizeschecked from "../image/Sizeschecked.png";
import Love from "../Love/Love";
import Frequently from "../Frequently/Frequently";

const Sizes = () => {
  return (
    <>
      <div className="Sizes">
        <div className="Sizes_Main">
          <div className="Sizes_top">
            <button>MEET OUR COMPANY</button>
            <h1>
              Pricing built to suits teams <br /> of all sizes
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              consectetur egestas mauris adipiscing dui.
            </p>
            <div className="Sizes_top_btn">
              <button>Monthly plan</button>
              <a href="/">Annual plan</a>
            </div>
          </div>
          <div className="Sizes_bottom_row">
            <div className="Sizes_bottom_first">
              <div className="Sizes_bottom_one">
                <img src={Sizesimage} alt="" />
              </div>
              <div className="Sizes_bottom_two">
                <h1>
                  $39<span>/ Month</span>
                </h1>
                <p>
                  Add Soem details here to describe <br /> the type of plan and
                  its particular benefits
                </p>
              </div>
              <div className="Sizes_bottom_three">
                <span>
                  <img src={Sizeschecked} alt="" />
                  <h1> All limited links</h1>
                </span>
                <span>
                  <img src={Sizeschecked} alt="" />
                  <h1> Own analytics Platform</h1>
                </span>
                <span>
                  <img src={Sizeschecked} alt="" />
                  <h1>Unlimited users</h1>
                </span>

                <span>
                  <img src={Sizeschecked} alt="" />
                  <h1>Chat support</h1>
                </span>
                <span>
                  <img src={Sizeschecked} alt="" />
                  <h1>Optimize hashtags</h1>
                </span>
              </div>

              <button>Get started</button>
            </div>
            <div className="Sizes_bottom_middle">
              <div className="Sizes_bottom_one">
                <img src={Sizesimage} alt="" />
              </div>
              <div className="Sizes_bottom_two">
                <h1>
                  $49<span>/ Month</span>
                </h1>
                <p>
                  Add Soem details here to describe <br /> the type of plan and
                  its particular benefits
                </p>
              </div>
              <div className="Sizes_bottom_three">
                <span>
                  <img src={Sizeschecked} alt="" />
                  <h1> All limited links</h1>
                </span>
                <span>
                  <img src={Sizeschecked} alt="" />
                  <h1> Own analytics Platform</h1>
                </span>
                <span>
                  <img src={Sizeschecked} alt="" />
                  <h1>Unlimited users</h1>
                </span>

                <span>
                  <img src={Sizeschecked} alt="" />
                  <h1>Chat support</h1>
                </span>
                <span>
                  <img src={Sizeschecked} alt="" />
                  <h1>Optimize hashtags</h1>
                </span>
              </div>

              <button>Get started</button>
            </div>
            <div className="Sizes_bottom_end">
              <div className="Sizes_bottom_one">
                <img src={Sizesimage} alt="" />
              </div>
              <div className="Sizes_bottom_two">
                <h1>
                  $99<span>/ Month</span>
                </h1>
                <p>
                  Add Soem details here to describe <br /> the type of plan and
                  its particular benefits
                </p>
              </div>
              <div className="Sizes_bottom_three">
                <span>
                  <img src={Sizeschecked} alt="" />
                  <h1> All limited links</h1>
                </span>
                <span>
                  <img src={Sizeschecked} alt="" />
                  <h1> Own analytics Platform</h1>
                </span>
                <span>
                  <img src={Sizeschecked} alt="" />
                  <h1>Unlimited users</h1>
                </span>

                <span>
                  <img src={Sizeschecked} alt="" />
                  <h1>Chat support</h1>
                </span>
                <span>
                  <img src={Sizeschecked} alt="" />
                  <h1>Optimize hashtags</h1>
                </span>
              </div>

              <button>Get started</button>
            </div>
          </div>
        </div>
      </div>
      <Love />
      <Frequently />
    </>
  );
};

export default Sizes;
