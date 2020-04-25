import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
const Card = (props) => {
  return (
    <div className="card-wrapper">
      <div className="card-body">
        <div>
          <h3 className="card-title">{props ? props.eventTitle : null}</h3>
          <p className="card-time">{props ? props.eventHead[0].value : null}</p>
        </div>
      </div>
      <div className="card-footer">
        <Link to={"/edit_event_type/" + props.eventId}>Edit</Link>
      </div>
    </div>
  );
};

export default Card;
