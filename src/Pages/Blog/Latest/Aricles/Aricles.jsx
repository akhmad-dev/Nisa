import React from "react";
import { useState } from "react";

const Aricles = () => {
  const [blogData, setBlogData] = useState([]);
  fetch("./Data/AriclesData.json")
    .then((e) => {
      return e.json();
    })
    .then((data) => setBlogData(data));

  return (
    <div className="Aricles">
      <div className="Aricles_Main">
        <div className="Aricles_Main_top">
          <button>BLOG & ARTICLE</button>
          <h1>
            Take a look at the lastest <br /> aricles
          </h1>
        </div>
      </div>
      <div className="Aricles_Row">
        {blogData.map((value, key) => (
          <div className="Aricles_Img" key={key}>
            <img src={value.img} alt="rasm" />
            <h1>{value.data}</h1>
            <p>{value.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aricles;
