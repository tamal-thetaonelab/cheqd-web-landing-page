import React from "react";
import cx from "classnames";
import { Col, Row, Space } from "antd";
import Illustration2 from "./Illustration2";
import styles from "./LandingPageLayout.module.css";
import IMTMediaQueries from "~/component/IMTMediaQueries";

import OtherFeature1 from "./svg-icons/OtherFeature1";
import OtherFeature2 from "./svg-icons/OtherFeature2";
import OtherFeature3 from "./svg-icons/OtherFeature3";
import OtherFeature4 from "./svg-icons/OtherFeature4";
import OtherFeature5 from "./svg-icons/OtherFeature5";
import OtherFeature6 from "./svg-icons/OtherFeature6";
import Feat1 from "./svg-icons/Feat1";

import Lottie from "react-lottie";
import feat1 from "~/assets/lottie-animation/feat-1-invoicing.json";
import feat2 from "~/assets/lottie-animation/feat-2-ai.json";
import Feat2 from "./svg-icons/Feat2";

const defaultLottieOptions = {
  loop: false,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const features = [
  {
    title: "GST billing, vendor management",
    body: "Create GST compatible invoices quickly. Download and send invoice with few clicks. Add vendors directly from their GST number, no data entry is required.",
    image: "feat-1.png",
    illustration: <Feat1 style={{ position: "absolute" }} />,
    animation: feat1,
    forward: true,
  },
  {
    title: "Purchase booking with AI",
    body: "Just upload your incoming invoices in pdf / image format and the system automatically populates the required fields. Saves hours of manual data entry through powerful Artificial Intelligence.",
    image: "feat-2.png",
    animation: feat2,
    illustration: <Feat2 style={{ position: "absolute" }} />,
    forward: false,
  },
  {
    title: "People management & payroll",
    body: "Manage your full-time, contractual & intern employees. The platform offers Employee-self-service, salary structuring, investment declaration, payroll processing & reimbursement management. This platform also allows you to comply with PF and ESI.",
    image: "feat-3.png",
    animation: feat1,
    illustration: null,
    forward: true,
  },
  {
    title: "Automated compliance booking",
    body: "Cheqd auto-draft compliances from your usual operations such as, creating invoice, purchase booking, payroll etc. You can see complete compliance calander along with filing fees, deadline, late fines & penalties.",
    image: "feat-4.png",
    illustration: <Feat2 style={{ position: "absolute" }} />,
    animation: feat2,
    forward: false,
  },
];

const otherFeatures = [
 {
    icon: "of-5.svg",
    text: "Sync data to/fro GST, Tally & others",
    iconComponent: OtherFeature5,
  },
  /* {
    icon: "of-2.svg",
    text: "",
    iconComponent: OtherFeature2,
  }, */
  {
    icon: "of-3.svg",
    text: "Reconcile bank statement with Sales / Purchase",
    iconComponent: OtherFeature3,
  },
  {
    icon: "of-1.svg",
    text: "Provide access to your CA for tax filing",
    iconComponent: OtherFeature1,
  },
  {
    icon: "of-4.svg",
    text: "Financial analytics, receivables and AP",
    iconComponent: OtherFeature4,
  },
  /* ,
  {
    icon: "of-6.svg",
    text: "Always up, access from anywhere",
    iconComponent: OtherFeature6,
  }, */
];
export default function FeatureBlock({ className, showSignupModal }: any) {
  return (
    <IMTMediaQueries>
      {(matches) => {
        return (
          <Row className={cx(className, styles.featureBlock)} id="features">
            <Col sm={24} md={24} lg={24} xl={24} xxl={24}>
              <div className={styles.HeadLineFeaturesBlock}>
                Why <span className={styles.primaryTextColor}>Cheqd ?</span> but
                not others
              </div>
              {features.map((feat, idx) => {
                const [firstWord, ...rest] = feat.title.split(" ");
                const col1 = (
                  <Col sm={24} md={11} xxl={8}>
                    <Space direction="vertical" size={10}>
                      <div className={styles.featureTitle}>
                        <span className={styles.primaryTextColor}>
                          {firstWord}
                        </span>{" "}
                        {rest.join(" ")}
                      </div>
                      <div className={styles.featureBody}>{feat.body}</div>
                    </Space>
                  </Col>
                );
                const col2 = (
                  <Col sm={24} md={11} xxl={8}>
                    {
                      <div
                        className={`${styles.featureBackGraphics} ${
                          !feat.forward ? styles.graphicsRotateReverse : ""
                        }`}
                      ></div>
                    }
                    {feat.image && (
                      <img
                        src={feat.image}
                        className={`${styles.featureImg} ${
                          !feat.forward ? styles.featureImgReverse : ""
                        }`}
                      />
                    )}
                    {/*  <video src="feat-01.webm" className={styles.featureImg} autoPlay/> */}
                    {/* {illustrationComponent && illustrationComponent} */}
                    {/* <Lottie
                      options={{
                        ...defaultLottieOptions,
                        animationData: feat.animation,
                      }}
                      height={300}
                      width={300}
                    /> */}
                  </Col>
                );
                let columns;
                if (feat.forward) {
                  columns = (
                    <Row className={styles.featureItem}>
                      <Col xxl={3} />
                      {col1}
                      <Col sm={0} md={2} />
                      {col2}
                      <Col sm={0} md={0} lg={0} xxl={3} />
                    </Row>
                  );
                } else {
                  columns = (
                    <Row className={styles.featureItem}>
                      <Col xxl={3} />
                      {col2}
                      <Col sm={0} md={2} />
                      {col1}
                      <Col sm={0} md={0} lg={0} xxl={3} />
                      {/* <div style={{border: "1px var(--primary-color) dashed", width:"70%", position: "absolute", left:0, bottom: 0}}></div> */}
                    </Row>
                  );
                }
                return <Row>{columns}</Row>;
              })}
              <div className={styles.otherFeatureItemsWrapper}>
                {otherFeatures.map((feat: any) => {
                  return (
                    <div className={styles.otherFeatureItem}>
                      <feat.iconComponent />
                      <div>{feat.text}</div>
                    </div>
                  );
                })}
              </div>
              <div style={{ position: "absolute", bottom: -40, right: 20 }}>
                <Illustration2 />
              </div>
            </Col>
          </Row>
        );
      }}
    </IMTMediaQueries>
  );
}
