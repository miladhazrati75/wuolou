import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import Timeline from "./Timeline";
import Profile from "./Profile";
import Notifications from "./Notifications";
export default function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Timeline} />
        <Route path="/profile" component={Profile} />
        <Route path="/notifications" component={Notifications} />

        {/* <Route component={page404} />*/}
      </Switch>
    </Router>
  );
}
