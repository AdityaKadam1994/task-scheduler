import React from "react";

const TimeSlot = (props) => {
  return props.selected == false ? (
    <div className="timeslot-wrapper" onClick={() => props.onClick()}>
      <p>{props.time}</p>
    </div>
  ) : null;
};

export default TimeSlot;
