import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <button
            type="button"
            className="nav-btn"
            onClick={() => setOpen(!open)}
          >
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={open ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
