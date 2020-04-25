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
        <Route path="/edit_event_type/:id" component={EditEventTypes} exact />
      </Switch>
    </div>
  );
}

export default App;
