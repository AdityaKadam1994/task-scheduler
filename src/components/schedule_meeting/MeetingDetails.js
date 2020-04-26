import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import "./schduler.css";
const MeetingDetails = () => {
  const loginDetails = useSelector((state) => state.userData);
  let { event } = useParams();
  const eventTypeData = useSelector((state) => state.eventType);
  const meetDetails = useSelector((state) => state.meetingDetails);
  const singleData = eventTypeData
    ? eventTypeData.filter((item) => item.eventTypeName == event)
    : null;
  let link = loginDetails ? loginDetails.username : "John Doe";
  console.log(meetDetails);
  //Back Click
  const handleBack = () => {
    window.location.href = "#/add_meeting/" + event;
  };

  return (
    <div className="container">
      <section className="meeting-schedule">
        <div className="scheduler-wrapper add-meet-wrapper event-details">
          <div>
            <span className="back-page" onClick={handleBack}>
              &#10229;
            </span>
            <h4>{link}</h4>
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
                    {item.day}, {item.month}, {item.year}
                  </p>
                ))
              : null}
          </div>
          <div className="calender-wrapper">
            <form className="meeting-form form">
              <h2>Enter Details</h2>
              <div className="field-wrapper">
                <div className="full-name">
                  <div>
                    <label>
                      First Name <sup>*</sup>
                    </label>
                    <br />
                    <input type="text" value="" required />
                  </div>

                  <div>
                    <label>
                      Last Name <sup>*</sup>
                    </label>
                    <br />
                    <input type="text" value="" required />
                  </div>
                </div>
                <div>
                  <label>
                    Email <sup>*</sup>
                  </label>
                  <br />
                  <input type="email" value="" required />
                </div>

                <button type="submit" className="submit-btn">
                  Schedule Event
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetingDetails;
