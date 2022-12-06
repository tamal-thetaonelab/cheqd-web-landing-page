import React, { Component } from "react";
import { Row, Col, Card, Button, Typography, notification } from "antd";
import styles from "~/component/SettingsMembership.module.css";
import Currency from "~/component/Currency";
/* import { getPlanFeature } from "~/api/license"; */
/* import {
  StoreState,
  action,
  StoreDispatch,
} from "../../app/LandingPageApp/store"; */
import { connect, ConnectedProps } from "react-redux";
import { registerEvent } from "~/analytics";

import * as ga from "~/contants/gaConstants";
import { RenderPlanSingle } from "~/component/PlanSingle";

/* const mapStateToProps = (_state: StoreState) => ({});
const mapDispatchToProps = (dispatch: StoreDispatch) => ({
  showSignUpModal: () => dispatch(action.signup.showModal()),
}); */

const connector = connect(/* mapStateToProps, mapDispatchToProps */);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props /* extends PropsFromRedux */ {
  history: any;
}

interface State {
  activeTerm: string;

  planList: any;
  userData: any;
  loadData: boolean;

  showAllPlans: boolean;
}

type PlanData = {
  plan_id: string;
  license_details_id: number;
  mrp_amount: number;
  description: string;
};

class PricingBlock extends Component<Props, {}> {
  state: State = {
    activeTerm: "ANNUAL",
    planList: [],
    userData: {},
    loadData: true,
    showAllPlans: false,
  };

  handeleMonthly = (e: any) => {
    this.setState({
      activeTerm: "MONTHLY",
    });
  };
  handeleAnnual = (e: any) => {
    this.setState({
      activeTerm: "ANNUAL",
    });
  };

  handleStart = async (e: any) => {
    registerEvent(
      ga.EVENT_CATEGORY_BUTTON_CLICK,
      ga.EVENT_CLICK,
      ga.events.pricingBlock286
    );
    /* this.props.showSignUpModal(); */
  };

  loadPlan = async () => {
    const plans = require("./pricing.json");
    plans.forEach((plan: any) => {
      plan.licenses.forEach((license: any) => {
        license.term = license.period === "30 days" ? "MONTHLY" : "ANNUAL";
      });
    });
    this.setState({
      planList: plans,
      loadData: false,
    });
    /* 
    const { ok, message, json } = await getPlanFeature();
    if (!ok) {
      notification.warning({
        message,
      });
    } else {
      json.forEach((plan) => {
        plan.licenses.forEach((license: any) => {
          license.term = license.period === "30 days" ? "MONTHLY" : "ANNUAL";
        });
      });
      this.setState({
        planList: json,
        loadData: false,
      });
    } */
  };
  componentDidMount() {
    this.loadPlan();
    const userData = JSON.parse(localStorage.getItem("imt__user") as any);
    this.setState({
      userData,
    });
  }

  render() {
    return (
      <div>
        <div className={styles.membership}>
          <div className={`${styles.wrapPlan} ${styles.dashboardWrap}`}>
            <div className={styles.plan}>Choose membership plan</div>

            <div className={styles.switch}>
              <div className={styles.switchWrap}>
                <input
                  id="toggle-on"
                  className={`${styles.toggle} ${styles.toggleleft}`}
                  name="toggle"
                  value="false"
                  type="radio"
                  checked={this.state.activeTerm === "ANNUAL"}
                  defaultChecked
                />
                <label
                  htmlFor="toggle-on"
                  className={`${styles.btn} ${styles.btnleft} `}
                  onClick={this.handeleAnnual}
                >
                  Annual plan
                </label>
                <input
                  id="toggle-off"
                  className={`${styles.toggle} ${styles.toggleright}`}
                  name="toggle"
                  value="true"
                  type="radio"
                  checked={this.state.activeTerm === "MONTHLY"}
                />
                <label
                  htmlFor="toggle-off"
                  className={`${styles.btn} ${styles.btnright}`}
                  onClick={this.handeleMonthly}
                >
                  Monthly plan
                </label>
              </div>
            </div>

            <div className={`site-card-wrapper ${styles.wrap}`}>
              <Row className={styles.planCardWrapper} gutter={46}>
                {this.state.planList.map((plan: any, planIndex: number) => {
                  if (!this.state.showAllPlans && planIndex >= 3) {
                    // Only show 3 plans if collapsed
                    return false;
                  }
                  if (!plan.display_on_ui) {
                    return false;
                  }

                  const periodBasedPlan = plan.licenses.find(
                    (it: any) => it.term === this.state.activeTerm
                  );
                  if (!periodBasedPlan) {
                    return false;
                  }
                  return (
                    <RenderPlanSingle
                      key={`${Math.random()}`}
                      plan={plan}
                      license={periodBasedPlan}
                      activeTerm={this.state.activeTerm}
                      purchaseMode={true}
                      currentPlanStatus="Activate"
                      isPurchaseEnabled={false}
                      /* handleActivate={this.handleActivate} */
                    />
                  );
                })}
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* export default connector(PricingBlock); */
export default PricingBlock;
