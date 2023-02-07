import React from "react";
import "./template.css";

function Template(props) {
  console.log(props);

  return (
    <div className="template">
      <img src={props.imgsrc} alt="mypic" className="temp_img" />
      <div className="temp_info">
        <p className="temp_title">{props.title}</p>
        <h4 className="temp_price">{props.price}</h4>
        <div className="btn-temp">
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
}

export default Template;
