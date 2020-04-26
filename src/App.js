import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import ResetPassLink from "./components/reset_password/ResetPassLink";
import ResetPassword from "./components/reset_password/ResetPassword";
import Home from "./components/home/Home";
import AddEventTypes from "./components/event_types/AddEventTypes";
import EditEventTypes from "./components/event_types/EditEventType";
import ScheduleMeeting from "./components/schedule_meeting/ScheduleMeeting";
import AddMeeting from "./components/schedule_meeting/AddMeeting";
import MeetingDetails from "./components/schedule_meeting/MeetingDetails";
import ScheduleEvent from "./components/schedule_meeting/ScheduleEvent";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/" component={SignUp} exact />
        <Route path="/reset_link" component={ResetPassLink} exact />
        <Route path="/reset_password" component={ResetPassword} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/add_event_type" component={AddEventTypes} exact />
        <Route path="/schedule_meeting" component={ScheduleMeeting} exact />
        <Route path="/schedule_event" component={ScheduleEvent} exact />
        <Route
          path="/meeting_details/:event"
          component={MeetingDetails}
          exact
        />
        <Route path="/edit_event_type/:id" component={EditEventTypes} exact />
        <Route path="/add_meeting/:time" component={AddMeeting} exact />
      </Switch>
    </div>
  );
}

export default App;
