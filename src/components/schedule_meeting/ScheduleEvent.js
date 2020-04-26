import React from "react";
import Navbar from "../navbar/Navbar";
import { useSelector } from "react-redux";
import Card from "../common/Card";
import SecondaryNav from "../navbar/SecondaryNav";
import { Link } from "react-router-dom";

const ScheduleEvent = () => {
  const loginDetails = useSelector((state) => state.userData);
  const eventTypeData = useSelector((state) => state.eventType);
  const meetDetails = useSelector((state) => state.meetingDetails);
  console.log(meetDetails);
  console.log(eventTypeData);
  // const localData = JSON.parse(localStorage.getItem("eventType"));
  // console.log(localData);

  const addTypeHandler = () => {
    window.location.href = "#/add_event_type";
  };

  return (
    <div>
      <Navbar />
      <SecondaryNav />
      <div className="home-wrapper container">
        <div className="meeting-schedule scheduled-event">
          <div className="headers">
            <p>Events</p>
          </div>
          <div className="event-list">
            {meetDetails
              ? meetDetails.map((item, index) => (
                  <div key={index}>
                    {item.timeDetails.map((td, idx) => (
                      <h5 className="event-date" key={idx}>
                        {td.day}, {td.date} {td.month} {td.year}
                      </h5>
                    ))}
                    <div className="scheduled-meet">
                      {item.timeDetails[0].timeslot.map((td, ind) => (
                        <div key={ind}>
                          <p>{td.time}</p>
                        </div>
                      ))}

                      <div>
                        <h4>
                          {item.userData.firstName} {item.userData.lastName}
                        </h4>
                        <p>
                          Event type <span>{item.eventName}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleEvent;
