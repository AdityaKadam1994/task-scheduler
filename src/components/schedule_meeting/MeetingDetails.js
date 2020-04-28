import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { meetData } from "../../store/actions";
import "./schduler.css";
const MeetingDetails = () => {
  const loginDetails = useSelector((state) => state.userData);
  let { event } = useParams();
  const eventTypeData = useSelector((state) => state.eventType);
  const meetDetails = useSelector((state) => state.meetingDetails);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const dispatch = useDispatch();
  let temp = event.split("_");
  const singleData = eventTypeData
    ? eventTypeData.filter((item) => item.eventTypeName == temp[0])
    : null;
  let link = loginDetails ? loginDetails.username : "John Doe";
  console.log(meetDetails);

  console.log(temp[1]);
  //Back Click
  const handleBack = () => {
    window.location.href = "#/add_meeting/" + temp[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < meetDetails.length; i++) {
      if (meetDetails[i].date == temp[1]) {
        meetDetails[i].userDetails.push({
          firstName: firstName,
          lastName: lastName,
          email: email,
        });
        dispatch(meetData([...meetDetails]));
        window.location.href = "#/schedule_confirm/" + temp[0];
      }
    }
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
                    {item.day ? item.day + "," : null}{" "}
                    {item.month ? item.month : null}{" "}
                    {item.date ? item.date + "," : null}{" "}
                    {item.year ? item.year : null}
                  </p>
                ))
              : null}
          </div>
          <div className="calender-wrapper">
            <form className="meeting-form form" onSubmit={handleSubmit}>
              <h2>Enter Details</h2>
              <div className="field-wrapper">
                <div className="full-name">
                  <div>
                    <label>
                      First Name <sup>*</sup>
                    </label>
                    <br />
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label>
                      Last Name <sup>*</sup>
                    </label>
                    <br />
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label>
                    Email <sup>*</sup>
                  </label>
                  <br />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
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
