import React, { useRef } from "react";
import "./mac.css";
import "./Template";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Template from "./Template";
import Tdata from "./Tdata";
const Mac = () => {
  let box = useRef("");

  const btnpressbackward = () => {
    console.log(box);

    let width = box.current.clientWidth;
    box.current.scrollLeft = box.current.scrollLeft - width;
    console.log(box.current.scrollLeft);
  };
  const btnpressforward = () => {
    console.log(box);

    let width = box.current.clientWidth;
    box.current.scrollLeft = box.current.scrollLeft + width;
    console.log(box.current.scrollLeft);
  };
  return (
    <div id="Mac" className="mac-wrapper">
      <button className="backward-btn" onClick={btnpressbackward}>
        <p>
          <ArrowBackIosNewOutlinedIcon />
        </p>
      </button>
      <button className="forward-btn" onClick={btnpressforward}>
        <p>
          <ArrowForwardIosIcon />
        </p>
      </button>

      <div className="mac-container" ref={box}>
        {Tdata.map((val) => {
          return (
            <Template imgsrc={val.imgsrc} title={val.title} price={val.price} />
          );
        })}
      </div>
    </div>
  );
};

export default Mac;
