import React from "react";
import SponsorsPingdom from "../img/SponsorsPingdom.png";
import SponsorsPendo from "../img/SponsorsPendo.png";
import SponsorsSensgird from "../img/SponsorsSensgird.png";
import SponsorsLattice from "../img/SponsorsLattice.png";
import SponsorsGitlab from "../img/SponsorsGitlab.png";
import Sponsorsimage from "../img/Sponsorsimage.png";

const Sponsors = () => {
  return (
    <div className="Sponsors">
      <div className="Sponsors_Main">
        <div className="Sponsors_Img">
        <div className="Sponsors_Main_Img">

        <img src={Sponsorsimage} alt="" />
        </div>
          <h1>
            Put the spotlight on the <br /> main features{" "}
          </h1>
        </div>

        <div className="Sponsors_text">
          <img src={SponsorsPingdom} alt="" />
          <img src={SponsorsPendo} alt="" />
          <img src={SponsorsSensgird} alt="" />
          <img src={SponsorsLattice} alt="" />
          <img src={SponsorsGitlab} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
