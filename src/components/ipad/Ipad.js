import React, { useRef } from "react";
import "./ipad.css";
import Sample from "./Sample";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Idata from "./Idata";

const Ipda = () => {
  let box = useRef("");
  const btnpressback = () => {
    console.log(box);

    let width = box.current.clientWidth;
    box.current.scrollLeft = box.current.scrollLeft - width;
    console.log(box.current.scrollLeft);
  };

  const btnpressforw = () => {
    console.log(box);

    let width = box.current.clientWidth;
    box.current.scrollLeft = box.current.scrollLeft + width;
    console.log(box.current.scrollLeft);
  };

  return (
    <div id="iPad" className="wrapper-Ipad">
      <button onClick={btnpressback} className="back-btn">
        <p>
          <ArrowBackIosNewOutlinedIcon />
        </p>
      </button>

      <button onClick={btnpressforw} className="forw-btn">
        <p>
          <ArrowForwardIosIcon />
        </p>
      </button>

      <div className="ipad-container" ref={box}>
        <Sample
          imgsrc={Idata[0].imgsrc}
          title={Idata[0].title}
          price={Idata[0].price}
        />
        <Sample
          imgsrc={Idata[1].imgsrc}
          title={Idata[1].title}
          price={Idata[1].price}
        />
        <Sample
          imgsrc={Idata[2].imgsrc}
          title={Idata[2].title}
          price={Idata[2].price}
        />
        <Sample
          imgsrc={Idata[3].imgsrc}
          title={Idata[3].title}
          price={Idata[3].price}
        />
      </div>
    </div>
  );
};

export default Ipda;
