import React, { Component, useState } from "react";
import { Row, Col, Card, Button, Typography, notification, Space } from "antd";
import styles from "~/component/SettingsMembership.module.css";
import localstyles from "./LandingPageLayout.module.css";
import Currency from "~/component/Currency";
import { registerEvent } from "~/analytics";
import cx from "classnames";

import * as ga from "~/contants/gaConstants";

const plans = [
  {
    name: "Small business",
    description: "When your business has presense in single state.",
    mrp_amount: 254,
    discount_rate: 22,
    discounted_amount: 198,
    features: [
      { feature: "Single GSTIN can be managed", is_active: true },
      { feature: "Gst billing", is_active: true },
      {
        feature: "AI based physical receipt scanning",
        is_active: true,
      },
      {
        feature: "Employee management, reimbursements & payroll",
        is_active: true,
      },
      {
        feature: "GST, TDS, PF, ESI, PTAX & MCA compliance dashboard",
        is_active: true,
      },
      { feature: "Unlimited number of users", is_active: true },
      { feature: "Email support", is_active: true },
    ],
    starts_from: false,
  },
  {
    name: "Professional",
    description: "For tax professionals and businesses having multiple GSTINs",
    mrp_amount: 590,
    discount_rate: 0,
    discounted_amount: 390,
    features: [
      {
        feature: 'All "Small business" features for 10+ GSTINs',
        is_active: true,
      },
      { feature: "Import from Tally", is_active: true },
      { feature: "GST filing", is_active: true },
      {
        feature: "GSTR 3B reconciliation & conflict resolution",
        is_active: true,
      },
      { feature: "Sync back to Tally", is_active: true },
      {
        feature:
          "Import Flipkart / Amazon / Meesho sales data and automatically draft GST",
        is_active: true,
      },
      { feature: "Client dashboard", is_active: true },
      { feature: "Phone & email support", is_active: true },
    ],
    starts_from: true,
  },
  {
    name: "Enterprise",
    description: "Businnesses of big size and pre-existing ERPs in place.",
    mrp_amount: 0,
    discount_rate: 0,
    discounted_amount: 0,
    features: [
      { feature: "Integration with ERP", is_active: true },
      { feature: "Self hosting", is_active: true },
      { feature: "Complete white labelling", is_active: true },
      {
        feature: "Feature customization",
        is_active: true,
      },
    ],
    starts_from: false,
  },
];

function PricingBlock({ className, showSignupModal }: any) {
  const [activeTerm, setActiveTerm] = useState("ANNUAL");

  const handeleMonthly = (e: any) => {
    setActiveTerm("MONTHLY");
  };
  const handeleAnnual = (e: any) => {
    setActiveTerm("ANNUAL");
  };

  const handleStart = async (e: any) => {
    registerEvent(
      ga.EVENT_CATEGORY_BUTTON_CLICK,
      ga.EVENT_CLICK,
      ga.events.pricingBlock286
    );
    /* this.props.showSignUpModal(); */
  };

  return (
    <Row className={cx(className, localstyles.blockWrapPricing)} id="pricing">
      <Col flex={1} sm={24} md={24} lg={24}>
        <div className={localstyles.HeadLineFeaturesBlock}>Pricing</div>
        <Space
          direction="horizontal"
          align="start"
          size={30}
          wrap
          className={localstyles.justifyCenter}
        >
          {plans.map((plan: any) => {
            return (
              <div key={plan.name} className={localstyles.pricingBlockItem}>
                <div className={localstyles.pricingBlockItemHeader}>
                  <div className={localstyles.pricingBlockItemHeaderPlanName}>
                    {plan.name}
                  </div>
                  <div className={localstyles.pricingBlockItemHeaderPlanDesc}>
                    {plan.description}
                  </div>
                </div>
                <div className={localstyles.pricingBlockItemBody}>
                  <>
                    {plan.features.map((feat: any) => {
                      return (
                        <div key={feat.feature}>
                          <span>[+] </span>
                          {feat.feature}
                        </div>
                      );
                    })}
                  </>
                  <div className={localstyles.pricingBlockItemAmountSubTexts}>
                    {plan.starts_from ? "Starts from" : "---"}
                  </div>
                  {plan.discounted_amount !== 0 ? (
                    <div className={localstyles.pricingBlockItemAmount}>
                      <Currency
                        value={plan.discounted_amount}
                        currencySymbol="₹"
                        roundoff
                      />
                      / month
                    </div>
                  ) : (
                    <div className={localstyles.pricingBlockItemAmount}>
                      (Contact us)
                    </div>
                  )}
                  <div className={localstyles.pricingBlockItemAmountSubTexts}>
                    {plan.discounted_amount !== 0
                      ? "(Excl. gst, Billed annually)"
                      : "---"}
                  </div>
                </div>
                <div className={localstyles.pricingBlockItemFooter}>
                  <span>Activate Free Trial</span>
                </div>
              </div>
            );
          })}
        </Space>
      </Col>
    </Row>
  );
}

/* export default connector(PricingBlock); */
export default PricingBlock;
