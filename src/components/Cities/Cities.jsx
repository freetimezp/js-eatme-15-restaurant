import React from "react";
import "./Cities.scss";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Cities = () => {
  return (
    <div className="cities">
      <h1>
        Popular localities in and around <span>Ukraine</span>
      </h1>

      <div className="cityContainer">
        <div className="city">
          <div className="cityLeft">
            <h3>Kyiv</h3>
            <span>345 Places</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Odessa</h3>
            <span>336 Places</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Lviv</h3>
            <span>83 Places</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>IvanoFrankovsk</h3>
            <span>302 Places</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Poltava</h3>
            <span>217 Places</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Kharkov</h3>
            <span>222 Places</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Nikolaev</h3>
            <span>181 Places</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Kherson</h3>
            <span>94 Places</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>See more</h3>
          </div>
          <div className="icon">
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
