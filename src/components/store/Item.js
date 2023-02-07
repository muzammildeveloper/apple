import React from "react";
import "./item.css";

function item(props) {
  console.log(props);

  return (
    <div className="item">
      <img src={props.imgsrc} alt="mypic" className="item_img" />
      <div className="item_info">
        <p className="item_title">{props.title}</p>
        <h4 className="item_price">{props.price}</h4>
        <div className="btn-item">
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
}

export default item;
