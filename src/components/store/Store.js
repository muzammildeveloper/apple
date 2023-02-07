import React, { useRef } from "react";
import Item from "./Item";
import "./store.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Storedata from "./Storedata";

const Store = () => {
  let box = useRef("");

  const btnpresspreviousitem = () => {
    console.log(box);

    let width = box.current.clientWidth;
    box.current.scrollLeft = box.current.scrollLeft - width;
    console.log(box.current.scrollLeft);
  };
  const btnpressnextitem = () => {
    let width = box.current.clientWidth;
    box.current.scrollLeft = box.current.scrollLeft + width;
    console.log(box.current.scrollLeft);
  };

  return (
    <div id="Store" className="store-wrapper">
      <button className="previousitem-btn" onClick={btnpresspreviousitem}>
        <p>
          <ArrowBackIosNewOutlinedIcon />
        </p>
      </button>
      <button className="nextitem-btn" onClick={btnpressnextitem}>
        <p>
          <ArrowForwardIosIcon />
        </p>
      </button>

      <div className="store-container" ref={box}>
        {Storedata.map((val) => {
          return (
            <Item imgsrc={val.imgsrc} title={val.title} price={val.price} />
          );
        })}
      </div>
    </div>
  );
};

export default Store;
