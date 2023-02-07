import React from "react";
import { useRef } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./watch.css";
import Wdata from "./Wdata";
import Wrap from "./Wrap";

const Watch = () => {
  let box = useRef("");

  const btnpressbackarrow = () => {
    console.log(box);

    let width = box.current.clientWidth;
    box.current.scrollLeft = box.current.scrollLeft - width;
    console.log(box.current.scrollLeft);
  };
  const btnpressforarrow = () => {
    console.log(box);

    let width = box.current.clientWidth;
    box.current.scrollLeft = box.current.scrollLeft + width;
    console.log(box.current.scrollLeft);
  };

  return (
    <div id="Watch" className="watch-wrapper">
      <button className="forarrowarrow-btn" onClick={btnpressforarrow}>
        <p>
          <ArrowForwardIosIcon />
        </p>
      </button>
      <button className="backarrow-btn" onClick={btnpressbackarrow}>
        <p>
          <ArrowBackIosNewOutlinedIcon />
        </p>
      </button>
      <div className="watch-container" ref={box}>
        {Wdata.map((val) => {
          return (
            <Wrap imgsrc={val.imgsrc} title={val.title} price={val.price} />
          );
        })}
      </div>
    </div>
  );
};

export default Watch;
