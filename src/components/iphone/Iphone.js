import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import "./iphone.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";

const Iphone = () => {
  let box = useRef("");

  const btnpressprev = () => {
    console.log(box);

    let width = box.current.clientWidth;
    box.current.scrollLeft = box.current.scrollLeft - width;
    console.log(box.current.scrollLeft);
  };

  const btnpressnext = () => {
    console.log(box);

    let width = box.current.clientWidth;
    box.current.scrollLeft = box.current.scrollLeft + width;
    console.log(box.current.scrollLeft);
  };

  return (
    <div id="iPhone" className="wrapper-iphone">
      <button className="pre-btn" onClick={btnpressprev}>
        <p>
          <ArrowBackIosNewOutlinedIcon />
        </p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>
          <ArrowForwardIosIcon />
        </p>
      </button>
      <div className="card-container" ref={box}>
        {
          Sdata.map((val) => {
            return (
              <Card imgsrc={val.imgsrc} title={val.title} price={val.price} />
            );
          })
          /*
           <Card
          imgsrc={Sdata[0].imgsrc}
          title={Sdata[0].title}
          price={Sdata[0].price}
        />
          <Card
          imgsrc={Sdata[1].imgsrc}
          title={Sdata[1].title}
          price={Sdata[1].price}
        />
        <Card
          imgsrc={Sdata[2].imgsrc}
          title={Sdata[2].title}
          price={Sdata[2].price}
        />
        <Card
          imgsrc={Sdata[3].imgsrc}
          title={Sdata[3].title}
          price={Sdata[3].price}
        />
        <Card
          imgsrc={Sdata[4].imgsrc}
          title={Sdata[4].title}
          price={Sdata[4].price}
        />
        <Card
          imgsrc={Sdata[5].imgsrc}
          title={Sdata[5].title}
          price={Sdata[5].price}
        /> */
        }
      </div>
    </div>
  );
};

export default Iphone;
