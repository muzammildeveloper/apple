import React from "react";
import "./sample.css";

function Sample(props) {
  console.log(props);
  return (
    <div className="Sample">
      <img src={props.imgsrc} alt="" className="sample_img" />
      <div className="sample_info">
        <p className="sample-title">{props.title}</p>
        <h4 className="sample-price">{props.price}</h4>
        <div className="sample-btn">
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
}
export default Sample;
