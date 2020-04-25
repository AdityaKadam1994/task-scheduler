import React from "react";
import { NavLink } from "react-router-dom";

const SecondaryNav = () => {
  return (
    <div>
      <nav className="secondary-nav container">
        <div>
          <h1>My Schedule </h1>
          <ul className="nav-list">
            <li>
              <NavLink to="/home" exact active>
                Event Types
              </NavLink>
            </li>
            <li>
              <NavLink to="/schedule_event">Scheduled Events</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default SecondaryNav;
