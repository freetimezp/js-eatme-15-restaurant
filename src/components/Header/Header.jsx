import React, { useState } from "react";
import "./Header.scss";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Logo from "../../assets/images/Logo.png";
import blackLogo from "../../assets/images/blackLogo.webp";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <nav>
        <span>Get the App</span>

        <div className="right">
          <span>Investor Relations</span>
          <span>Add restaurant</span>
          <span>Log in</span>
          <span>Sign up</span>
        </div>
      </nav>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon style={{ color: "black" }} /> : <MenuIcon />}
      </div>

      {open && (
        <div className="sideMenu">
          <img src={blackLogo} alt="logo" />
          <div className="innerMenu">
            <span>Investor Relations</span>
            <span>Add restaurants</span>
            <span>Log In</span>
            <span>Sign Up</span>
          </div>
        </div>
      )}

      <div className="headerContent">
        <img src={Logo} alt="logo" />

        <h3>Discover the best food & drinks in Kyiv</h3>

        <div className="input">
          <select name="" id="">
            <option value="Kyiv">Kyiv</option>
            <option value="Odesa">Odesa</option>
            <option value="Lviv">Lviv</option>
            <option value="Poltava">Poltava</option>
            <option value="IvanoFrankovsk">IvanoFrankovsk</option>
          </select>
          |
          <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
        </div>
      </div>
    </div>
  );
};

export default Header;
