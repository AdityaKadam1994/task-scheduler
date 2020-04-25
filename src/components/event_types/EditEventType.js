import React, { useEffect, useState } from "react";

import Navbar from "../navbar/Navbar";
import { editEventType } from "../../store/actions";
import "./event_type.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EditEventTypes = (props) => {
  const [timeDurations, setTimeDurations] = useState([
    {
      value: "15 mins",
      active: false,
      id: 1,
      custom: false,
    },
    {
      value: "30 mins",
      active: false,
      id: 2,
      custom: false,
    },
    {
      value: "45 mins",
      active: false,
      id: 3,
      custom: false,
    },
    {
      value: "60 mins",
      active: false,
      id: 4,
      custom: false,
    },
  ]);
  const [eventType, setEventType] = useState(null);
  const [customTime, setCustomTime] = useState(null);
  const [selectedTime, setSelectedTime] = useState({});
  const dispatch = useDispatch();
  const eventTypeData = useSelector((state) => state.eventType);
  let { id } = useParams();

  useEffect(() => {
    const eventDuration = eventTypeData
      ? eventTypeData.filter((item, index) => {
          return item.id == id;
        })
      : null;
    const activeDuration = timeDurations.map((item, index) => {
      if (item.id == eventDuration[0].eventDuration[0].id) {
        setSelectedTime([eventDuration[0].eventDuration[0]]);
        return { ...item, active: eventDuration[0].eventDuration[0].active };
      } else {
        return { ...item, active: false };
      }
    });
    if (eventDuration[0].eventDuration[0].id == 5) {
      setCustomTime(eventDuration[0].eventDuration[0].value);
    }

    setTimeDurations(activeDuration);
    setEventType(eventDuration[0].eventTypeName);
  }, []);

  const handleCLick = (status, id) => {
    setCustomTime("");
    let durationsCopy = [...timeDurations];
    let formattedDuration = durationsCopy.map((item) => {
      if (item.id == id) {
        return { ...item, active: status };
      } else {
        return { ...item, active: false };
      }
    });
    let filteredDuration = formattedDuration.filter(
      (item) => item.active == true
    );

    setTimeDurations(formattedDuration);
    setSelectedTime(filteredDuration);
    // console.log(setTimeDurations);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (customTime !== null && customTime != "") {
      let customTimeFormat = [
        {
          id: 5,
          active: true,
          custom: true,
          value: customTime,
        },
      ];
      dispatch(
        editEventType([
          {
            id: parseInt(id),
            eventTypeName: eventType,
            eventDuration: customTimeFormat,
          },
        ])
      );
      alert("Event Type Created");
      window.location.href = "#/home";
    } else {
      dispatch(
        editEventType([
          {
            id: parseInt(id),
            eventTypeName: eventType,
            eventDuration: selectedTime,
          },
        ])
      );
    }
    alert("Event Type Created");
    window.location.href = "#/home";
  };

  const handleBack = () => {
    window.location.href = "#/home";
  };

  const handleChange = (e) => {
    setCustomTime(e.target.value);
    let durationsCopy = [...timeDurations];
    let formattedDuration = durationsCopy.map((item) => {
      return { ...item, active: false };
    });
    setTimeDurations(formattedDuration);
  };

  return (
    <div>
      <Navbar />
      <div className="form-header container">
        <div>
          <button type="button" className="back-btn" onClick={handleBack}>
            {" "}
            &#8249; Back{" "}
          </button>
        </div>
        <div>
          <h2 className="form-heading">Add Event Type</h2>
        </div>
      </div>
      <div className="container">
        <form className="form event-type-form" onSubmit={handleSubmit}>
          <div className="field-wrapper">
            <div>
              <label>
                Event Name <sup>*</sup>
              </label>
              <br />
              <input
                type="text"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
              />
            </div>
            <div>
              <label>
                Event Duration <sup>*</sup>
              </label>
              <br />
              <div className="time-duration-wrapper">
                {timeDurations
                  ? timeDurations.map((item) => (
                      <input
                        key={item.id}
                        type="text"
                        value={item.value}
                        onClick={() => handleCLick(!item.active, item.id)}
                        className={item.active == true ? "active" : null}
                        readOnly
                      />
                    ))
                  : null}
                <input
                  type="text"
                  value={customTime}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="form-actions">
            <button className="cancel-btn">Cancel</button>
            <button className="save-btn" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEventTypes;
