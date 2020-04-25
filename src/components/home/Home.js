import React, { useEffect, useRef } from "react";
import Navbar from "../navbar/Navbar";
import { useSelector } from "react-redux";
import Card from "../common/Card";
import "./home.css";
import SecondaryNav from "../navbar/SecondaryNav";

const Home = () => {
  const loginDetails = useSelector((state) => state.userData);
  const eventTypeData = useSelector((state) => state.eventType);
  console.log(eventTypeData);
  // const localData = JSON.parse(localStorage.getItem("eventType"));
  // console.log(localData);

  let link = loginDetails
    ? loginDetails.username.replace(" ", "-")
    : "john-doe";

  const addTypeHandler = () => {
    window.location.href = "#/add_event_type";
  };

  return (
    <div>
      <Navbar />
      <SecondaryNav />
      <div className="home-wrapper container">
        <div className="top-section">
          <div>
            <p>My Link</p>
            <a href="#" target="_blank" className="booking-link">
              appointment.com/{link.toLowerCase()}-bookings
            </a>
          </div>
          <div>
            <button
              type="button"
              className="add-event-btn"
              onClick={addTypeHandler}
            >
              + New Event Type
            </button>
          </div>
        </div>
        <div className="event-type-wrapper">
          {eventTypeData
            ? eventTypeData.map((item, index) => (
                <Card
                  key={item.id}
                  eventId={item.id}
                  eventTitle={item.eventTypeName}
                  eventHead={item.eventDuration.filter((fl) => {
                    return fl.active == true;
                  })}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
