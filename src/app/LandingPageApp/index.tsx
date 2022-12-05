import React, { FC } from "react";
import { RouteComponentProps } from "react-router";
/* import { Provider } from "react-redux"; */
/* import { store } from "./store"; */
import LandingPageApp from "./LandingPageApp";
/* import useGoogleAnalytics from "~/lib/hook/useGoogleAnalytics"; */

const ConfiguredLandingPageApp: FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  /* useGoogleAnalytics(); */
  return <LandingPageApp {...props} />;
};

export default ConfiguredLandingPageApp;
