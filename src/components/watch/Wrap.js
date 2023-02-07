import React from "react";
import "./wrap.css";

function Wrap(props) {
  console.log(props);

  return (
    <div className="wrap">
      <img src={props.imgsrc} alt="mypic" className="wrap_img" />
      <div className="wrap_info">
        <p className="wrap_title">{props.title}</p>
        <h4 className="wrap_price">{props.price}</h4>
        <div className="btn-wrap">
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
}

export default Wrap;
