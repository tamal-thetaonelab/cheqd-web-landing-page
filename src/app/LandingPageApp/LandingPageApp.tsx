import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { RouteChildrenProps } from "react-router";
import { titles } from "~/contants/titles";
import LandingLayout from "~/layout/landing-page/LandingLayout";
/* import LoginModal from "./LoginModal"; */

export default class LandingPageApp extends Component<RouteChildrenProps, {}> {
  state = {};

  render() {
    const search = this.props.location?.search;
    const params = search
      .replace("?", "")
      .split("&")
      ?.reduce((a: any, v: any) => {
        const splNameValue = v.split("=");
        a[splNameValue[0]] = splNameValue[1];
        return a;
      }, {});
    return (
      <div id="landing-page">
        <Helmet>
          <title>{titles.LandingPage}</title>
        </Helmet>
        <LandingLayout
          emailVerified={params?.verified === "true"}
          email={params?.email}
          logoutReason={params?.reason}
          history={this.props.history}
        />
        {/* <LoginModal /> */}
      </div>
    );
  }
}
