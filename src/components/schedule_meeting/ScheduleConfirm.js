import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import "./schduler.css";

const ScheduleConfirm = () => {
  const loginDetails = useSelector((state) => state.userData);
  let { cat } = useParams();
  const eventTypeData = useSelector((state) => state.eventType);
  const meetDetails = useSelector((state) => state.meetingDetails);

  const singleData = eventTypeData
    ? eventTypeData.filter((item) => item.eventTypeName == cat)
    : null;
  let link = loginDetails ? loginDetails.username : "John Doe";
  console.log(meetDetails);
  return (
    <div className="container">
      <section className="meeting-schedule">
        <div className="scheduler-wrapper add-meet-wrapper schedule-confirm-wrapper">
          <div>
            <h3>Confirmed</h3>
            <h4>You are scheduled with {link}</h4>
            {singleData
              ? singleData.map((item) => (
                  <div key={item.id}>
                    <h1>{item.eventTypeName}</h1>
                    <h4>{item.eventDuration[0].value}</h4>
                  </div>
                ))
              : null}
            {meetDetails
              ? meetDetails.map((item, index) => (
                  <p key={index}>
                    {item.day ? item.day + "," : null}{" "}
                    {item.month ? item.month : null}{" "}
                    {item.date ? item.date + "," : null}{" "}
                    {item.year ? item.year : null}
                  </p>
                ))
              : null}
            <Link to="/schedule_meeting"> Schedule another event</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScheduleConfirm;
