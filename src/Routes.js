import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import Panel from "./Dashboard";

export default function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/Panel" component={Panel} />
        {/* <Route component={page404} />*/}
      </Switch>
    </Router>
  );
}
