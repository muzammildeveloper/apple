import React from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="top-navbar">
        <a href="#Home">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/1/1b/20220821122205%21Apple_logo_grey.svg/101px-Apple_logo_grey.svg.png"
            alt=""
          />
        </a>

        <a className="anchor-tag" href="#Store">
          Store
        </a>
        <a className="anchor-tag" href="#iPhone">
          iPhone
        </a>

        <a className="anchor-tag" href="#iPad">
          iPad
        </a>
        <a className="anchor-tag" href="#Mac">
          Mac
        </a>

        <a className="anchor-tag" href="#Watch">
          Watch
        </a>

        <span className="search">
          <SearchIcon />
          <input type="text" placeholder="search.." />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
