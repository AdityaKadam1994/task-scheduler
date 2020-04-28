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
  // const filteredmeetDetails = meetDetails
  //   ? meetDetails.filter((item, index) => index !== 1)
  //   : null;
  console.log(meetDetails);
  // console.log(eventTypeData);
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
                    <h5 className="event-date">
                      {item.day}, {item.date} {item.month} {item.year}
                    </h5>
                    {item.timeslot.map((ts, index) => (
                      <div className="scheduled-meet" key={index}>
                        <div>
                          <p>{ts.time}</p>
                        </div>

                        <div>
                          <h4>
                            {item.userDetails[index].firstName}{" "}
                            {item.userDetails[index].lastName}
                          </h4>
                          <p>
                            Event type: <b>{item.eventType[index]}</b>
                          </p>
                        </div>
                      </div>
                    ))}
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
