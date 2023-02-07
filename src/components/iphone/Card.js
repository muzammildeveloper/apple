import React from "react";
import "./card.css";

function Card(props) {
  console.log(props);

  return (
    <div className="card">
      <img src={props.imgsrc} alt="mypic" className="card_img" />
      <div className="card_info">
        <p className="card_title">{props.title}</p>
        <h4 className="card_price">{props.price}</h4>
        <div className="btn-card">
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
