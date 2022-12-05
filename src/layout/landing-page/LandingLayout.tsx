import React, { Component } from "react";
import { Layout, notification, Button } from "antd";

import styles from "./LandingPageLayout.module.css";

/* import { StoreState, action, StoreDispatch } from "~/app/LandingPageApp/store"; */
import { connect, ConnectedProps } from "react-redux";

/* import SignupModal from "../../app/LandingPageApp/SignupModal"; */
import IMTLPHeader from "./IMTLPHeader";
import HeroBlock from "./HeroBlock";
import FeaturesBlock from "./FeaturesBlock";
import FinalBlock from "./FinalBlock";
import PricingBlock from "./PricingBlock";
import Testimonial from "./Testimonial";
import DataSafety from "./DataSafety";
import Footer from "./Footer";
import IMTMediaQueries from "~/component/IMTMediaQueries";
import { registerEvent } from "~/analytics";

import * as ga from "~/contants/gaConstants";

/* const mapStateToProps = (_state: StoreState) => ({});
const mapDispatchToProps = (dispatch: StoreDispatch) => ({
  showSignUpModal: () => dispatch(action.signup.showModal()),
  showLoginModal: () => dispatch(action.login.showModal()),
}); */

/* const connector = connect();

type PropsFromRedux = ConnectedProps<typeof connector>;
*/ 
interface Props /* extends PropsFromRedux */ {
  doNotUseMe?: never;
  emailVerified: boolean | undefined | null;
  email: string | undefined | null;
  logoutReason?: "session_expired";
  history: any;
}

class LandingLayout extends Component<Props> {
  state = {};

  componentDidMount() {
    const { email, emailVerified, logoutReason } = this.props;
    const key = "emailVerifiedKey";
    const notificationBtnOnClick = () => {
      registerEvent(
        ga.EVENT_CATEGORY_BUTTON_CLICK,
        ga.EVENT_CLICK,
        ga.events.landingLayout285
      );
      /* this.props.showLoginModal(); */
      notification.close(key);
    };
    const btn = (
      <Button type="primary" size="middle" onClick={notificationBtnOnClick}>
        {`Login & complete profile`}
      </Button>
    );
    if (email && emailVerified) {
      setTimeout(() => {
        notification.success({
          message: "Woohoo!",
          description: `Your email ${email} verified successfully. Next step: login and complete your business profile.`,
          duration: 5000,
          key,
          btn,
        });
      }, 1000);
    }

    if (logoutReason === "session_expired") {
      /* this.props.showLoginModal(); */
    }
  }

  handleSignUpOk = (e: any) => {
    this.setState({
      signUpVisible: false,
    });
  };

  handleSignUpCancel = (e: any) => {
    this.setState({
      signUpVisible: false,
    });
  };

  render() {
    return (
      <IMTMediaQueries>
        {(matches:any) => (
          <Layout>
            <IMTLPHeader />
            <div className={styles.bodyWrap}>
              <HeroBlock
                className={styles.blockWrap}
                showSignUpModal={()=>{}}
              />
              <FeaturesBlock className={styles.blockWrap} />
              <Testimonial
                className={styles.blockWrap}
                showSignupModal={()=>{}}
              />
              <DataSafety
                className={styles.blockWrap}
                showSignupModal={()=>{}}
              />
              {/* <PricingBlock
                history={this.props.history}
               
              /> */}
              <FinalBlock showSignUpModal={()=>{}} />
            </div>
            <Footer />
            {/* <SignupModal /> */}
          </Layout>
        )}
      </IMTMediaQueries>
    );
  }
}

export default LandingLayout /* connector(LandingLayout) */;
