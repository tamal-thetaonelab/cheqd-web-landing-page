import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";
// import loadable from "@loadable/component";

import LandingPageApp from "./LandingPageApp";
// import MembershipPlan from "~/feature/membership/MembershipPlan";

// const LoadableLandingPage = loadable(() => import("./LandingPageApp"), {
//   fallback: <FullpageSpinner />,
// });
// const LoadableMainApp = loadable(() => import("./MainApp"), {
//   fallback: <FullpageSpinner />,
// });
// const LoadableOnboardCompany = loadable(() => import("./OnboardCompany"), {
//   fallback: <FullpageSpinner />,
// });

export default class App extends Component<{}, {}> {
  state = {};

  render() {
    return (
      <Router>
        {/* <Route path="/" exact component={LoadableLandingPage} />
        <Route path="/onboard" component={LoadableOnboardCompany} />
        <Route path="/app" component={LoadableMainApp} /> */}
        <Route path="/"  component={LandingPageApp} />
        {/* <Route path="/membership-plan" component={MembershipPlan} /> */}
      </Router>
    );
  }
}
