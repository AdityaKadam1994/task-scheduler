import React, { useEffect } from "react";
import "./schduler.css";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const ScheduleMeeting = () => {
  const loginDetails = useSelector((state) => state.userData);
  const eventTypeData = useSelector((state) => state.eventType);

  let link = loginDetails ? loginDetails.username : "John Doe";
  console.log(loginDetails);

  return (
    <div className="container">
      <section className="meeting-schedule">
        <div className="scheduler-wrapper">
          <div>
            <h3>{link}</h3>
            <p>
              Welcome to my scheduling page. Please follow the instructions to
              add an event to any calender
            </p>
          </div>
        </div>
        <div className="created-event-types">
          <div>
            {eventTypeData
              ? eventTypeData.map((item) => (
                  <Link to={"/add_meeting/" + item.eventTypeName} key={item.id}>
                    <div>
                      <h3>
                        <span></span> {item.eventTypeName}
                      </h3>
                      <span>&rsaquo;</span>
                    </div>
                  </Link>
                ))
              : null}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScheduleMeeting;
