import React from "react";
import { VideoHub } from "../components/pages/video-hub";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path="/" component={VideoHub} />
    </Switch>
  </Router>
);
