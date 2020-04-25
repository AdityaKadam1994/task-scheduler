import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./nav.css";

const Navbar = (props) => {
  const loginDetails = useSelector((state) => state.userData);
  let username = loginDetails ? loginDetails.username : "John Doe";
  return (
    <div>
      <nav className="navbar container">
        <ul className="nav-list">
          <li>{username}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
