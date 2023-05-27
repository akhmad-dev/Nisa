import React from "react";
import { useState } from "react";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  fetch("./data/BlogData.json")
    .then((e) => {
      return e.json();
    })
    .then((data) => setBlogData(data));
  return (
    <div className="Blog">
      <div className="Blog_Main">
        <div className="Blog_img">
          <h1>
            Share the features that <br /> help your customers
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Pretium consectetur egestas mauris adipiscing dui. <br /> Cursus
            facilisis diam turpis leo netus consequat <br /> phasellus. Netus
            ipsum sed faucibus enim.
          </p>
          <button>Explore Section</button>
        </div>
        <div className="Blog_text">
          <div className="Blog_text_Main">
            {blogData.map((value, key) => (
              <div key={key} className="Blog_one">
                <img src={value.img} alt="" />
                <h1>{value.name}</h1>
                <p>{value.lorem}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
