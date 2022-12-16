// tslint-disable-file jsx-no-lambda
import React, { useState } from "react";
import cx from "classnames";
import { Row, Col, Typography, Space, Button, Drawer } from "antd";
import commonStyles from "~/component/common.module.css";
import Illustration from "./Illustration";
import styles from "./LandingPageLayout.module.css";
import IMTMediaQueries from "~/component/IMTMediaQueries";
import HubspotScheduler from "./HubspotScheduler";
import strings from "../../i18n/en";
import VideoDrawer from "~/component/VideoDrawer";
import VanillaButton from "~/component/VanillaButton";
import { registerEvent } from "~/analytics";

import * as ga from "~/contants/gaConstants";

const useCases = [
  {
    title: "E-commerce seller",
    Subtitle: "Selling your products on Amazon, Flipkart etc. ? ",
    body: "Also have local sales? Too many sales reports at the month end to compile? Reports are of different formats? Compilation of all these to make a GST ready file is entirely manual and takes huge effort.",
    bullets: [
      "Automate compilation of sales reports from various eCommerce platforms with high precision and making GST file ready in just 10 minutes.",
      "Automate TCS calculations Advanced reconciliation features to help you file your compliance accurately",
    ],
  },
  {
    title: "Tax professionals",
    Subtitle: "Are you selling your products on various eCommerce platforms? ",
    body: "Also have local sales? Too many sales reports at the month end to compile? Reports are of different formats? Compilation of all these to make a GST ready file is entirely manual and takes huge effort.",
    bullets: [
      "Automate compilation of sales reports from various eCommerce platforms with high precision and making GST file ready in just 10 minutes.",
      "Automate TCS calculations Advanced reconciliation features to help you file your compliance accurately",
      "No missing of compliance deadlines as there will be automated reminders from Cheqd Separately manage local sales efficiently with solutions from Cheqd",
    ],
  },
  {
    title: "Startups",
    Subtitle: "Are you selling your products on various eCommerce platforms? ",
    body: "Also have local sales? Too many sales reports at the month end to compile? Reports are of different formats? Compilation of all these to make a GST ready file is entirely manual and takes huge effort.",
    bullets: [
      "Automate compilation of sales reports from various eCommerce platforms with high precision and making GST file ready in just 10 minutes.",
      "Automate TCS calculations Advanced reconciliation features to help you file your compliance accurately",
      "No missing of compliance deadlines as there will be automated reminders from Cheqd Separately manage local sales efficiently with solutions from Cheqd",
    ],
  },
];
export default function UseCasesBlock({ className, showSignUpModal }: any) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <IMTMediaQueries>
      {(matches) => (
        <Row className={cx(className, styles.FeaturesBlock)} id="features">
          <Col span={24} flex={1} style={{ textAlign: "center" }}>
            <div className={styles.HeadLineFeaturesBlock}>
              Use <span className={styles.primaryTextColor}>Cases</span>
            </div>
            <Space align="center" direction="horizontal" size={20}>
              {useCases.map((val, idx) => {
                return (
                  <div
                    className={`${styles.tabHeaderRounded} ${
                      activeSlide === idx ? styles.tabHeaderRoundedActive : ""
                    }`}
                    onClick={() => setActiveSlide(idx)}
                  >
                    {val.title}
                  </div>
                );
              })}
            </Space>
            <Row>
              <Col span={12} flex={1}>
                {
                  <div className={styles.useCasesTextWrapper}>
                    <div className={styles.useCasesSubtitle}>
                      {useCases[activeSlide].Subtitle}
                    </div>
                    <div className={styles.useCasesBody}>
                      {useCases[activeSlide].body}
                    </div>
                    <div className={styles.useCasesBulletWrapper}>
                      {useCases[activeSlide].bullets.map((bul) => {
                        return (
                          <div className={styles.useCasesBulletItem}>
                            <span className={styles.useCasesBulletSpan}>
                              {" "}
                              []{" "}
                            </span>{" "}
                            {bul}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                }
              </Col>
              <Col span={12} flex={1}>
                <div className={styles.useCasesImageWrapper}>
                  <img src="/ecomm.gif" style={{ width: "100%" }} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </IMTMediaQueries>
  );
}
