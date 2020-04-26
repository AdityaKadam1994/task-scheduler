import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Calendar from "react-calendar";
import TimeSlot from "./TimeSlot";
import { storeTime } from "../../store/actions";
import moment from "moment";
import "./schduler.css";
import "react-calendar/dist/Calendar.css";

const AddMeeting = () => {
  const { time } = useParams();
  const [date, setDate] = useState(new Date());
  const [timeSlotVisibility, setTimeSlotVisibility] = useState(false);
  const [timeSlot, setTimeSlot] = useState([]);
  const [day, setDay] = useState(null);
  const loginDetails = useSelector((state) => state.userData);
  const eventTypeData = useSelector((state) => state.eventType);
  const dispatch = useDispatch();
  const singleData = eventTypeData
    ? eventTypeData.filter((item) => item.eventTypeName == time)
    : null;

  let link = loginDetails ? loginDetails.username : "John Doe";
  let selectedDate, month, dayName, year;
  console.log(singleData);
  console.log(time);

  useEffect(() => {
    let timeStops = getTimeStops("10:00", "19:00");
    setTimeSlot(timeStops);
    console.log(timeStops);
  }, []);

  //Back Click
  const handleBack = () => {
    window.location.href = "#/schedule_meeting/";
  };

  //Calendar click
  const handleChange = (e) => {
    setDate(e);
    setTimeSlotVisibility(true);
    let clickedDate = new Date(e);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    selectedDate = clickedDate.getDate();
    month = monthNames[clickedDate.getMonth()];
    dayName = dayNames[clickedDate.getDay()];
    year = clickedDate.getFullYear();
    setDay({ dayname: dayName, month: month, date: selectedDate, year: year });
  };

  //Handle Timeslot
  const handleTimeSlot = (status, timeID) => {
    console.log("Executed");
    console.log(status, timeID);
    let trueData = timeSlot
      ? timeSlot.map((item) => {
          if (item.time_id == timeID) {
            return { ...item, selected: status };
          } else {
            return { ...item, selected: false };
          }
        })
      : null;
    let filteredTime = trueData.filter((item) => item.selected == true);
    console.log(trueData);
    setTimeSlot(trueData);
    console.log(day.month, day.dayName);
    dispatch(
      storeTime([
        {
          month: day.month,
          day: day.dayname,
          date: day.date,
          year: day.year,
          timeslot: filteredTime,
        },
      ])
    );
    window.location.href = "#/meeting_details/" + time;
  };

  //Timeslots
  function getTimeStops(start, end) {
    let startTime = moment(start, "HH:mm");
    let endTime = moment(end, "HH:mm");

    if (endTime.isBefore(startTime)) {
      endTime.add(1, "day");
    }
    let counter = 0;
    let timeStops = [];

    while (startTime <= endTime) {
      timeStops.push({
        time: new moment(startTime).format("hh:mm A"),
        selected: false,
        time_id: counter++,
      });
      startTime.add(15, "minutes");
    }
    return timeStops;
  }
  return (
    <div className="container">
      <section className="meeting-schedule">
        <div className="scheduler-wrapper add-meet-wrapper">
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
          </div>
          <div className="calender-wrapper">
            <Calendar
              onChange={(e) => handleChange(e)}
              value={date}
              minDate={new Date()}
              tileDisabled={({ activeStartDate, date, view }) =>
                date.getDay() === 0 || date.getDay() - 6 === 0
              }
            />
          </div>
          <div>
            {timeSlotVisibility && (
              <React.Fragment>
                <div>
                  <h3>
                    {day.dayname},{day.month} {day.date}
                  </h3>
                </div>
                <div className="time-box">
                  {timeSlot
                    ? timeSlot.map((item) => (
                        <TimeSlot
                          time={item.time}
                          selected={item.selected}
                          time_id={item.time_id}
                          key={item.time_id}
                          onClick={() =>
                            handleTimeSlot(!item.selected, item.time_id)
                          }
                        />
                      ))
                    : null}
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddMeeting;
