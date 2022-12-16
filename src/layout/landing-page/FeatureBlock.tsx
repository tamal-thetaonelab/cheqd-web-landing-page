import React from "react";
import cx from "classnames";
import { Button, Col, Row, Space, Typography, Carousel } from "antd";
import Illustration2 from "./Illustration2";
import styles from "./LandingPageLayout.module.css";
import IMTMediaQueries from "~/component/IMTMediaQueries";
import commonStyles from "~/component/common.module.css";
import strings from "../../i18n/en";
import PoulomiImage from "~/assets/testimonials/poulomi.webp";
import RajaImage from "~/assets/testimonials/raja-bhowmick.webp";
import DeepImage from "~/assets/testimonials/deep-biswas.webp";
import { registerEvent } from "~/analytics";

import * as ga from "~/contants/gaConstants";

const features = [
  {
    title: "Automated compliance preparation",
    body: "Cheqd helps us in managing GST and other compliances. It also reminds about upcoming receivables. PF and ESI are also big pain for us and eagerly waiting for those to be available ",
    image: "hero-image-3.jpeg",
    forward: true,
  },
  {
    title: "Seamlessly syncs with Tally et. al.",
    body: "Cheqd helps us in managing GST and other compliances. It also reminds about upcoming receivables. PF and ESI are also big pain for us and eagerly waiting for those to be available ",
    image: "hero-image-4.jpeg",
    forward: false,
  },
  {
    title: "Instant purchase booking with AI",
    body: "Cheqd helps us in managing GST and other compliances. It also reminds about upcoming receivables. PF and ESI are also big pain for us and eagerly waiting for those to be available ",
    image: "hero-image-3.jpeg",
    forward: true,
  },
  {
    title: "Integrated, all-in-one",
    body: "Cheqd helps us in managing GST and other compliances. It also reminds about upcoming receivables. PF and ESI are also big pain for us and eagerly waiting for those to be available ",
    image: "hero-image-3.jpeg",
    forward: false,
  },
];
export default function FeatureBlock({ className, showSignupModal }: any) {
  return (
    <IMTMediaQueries>
      {(matches) => {
        return (
          <Row className={cx(className, styles.featureBlock)}>
            <Col flex={1} sm={24} md={24} lg={24}>
              <div className={styles.HeadLineFeaturesBlock}>Features</div>
              {features.map((feat, idx) => {
                const [firstWord, ...rest] = feat.title.split(" ");
                const col1 = (
                  <Col flex={1} sm={24} md={10} lg={10}>
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
                  <Col flex={1} sm={24} md={14} lg={14}>
                    <div
                      className={`${styles.featureBackGraphics} ${
                        !feat.forward ? styles.graphicsRotateReverse : ""
                      }`}
                    ></div>
                    <img src={feat.image} className={styles.featureImg} />
                  </Col>
                );
                let columns;
                if (feat.forward) {
                  columns = (
                    <Row className={styles.featureItem}>
                      {col1} {col2}
                    </Row>
                  );
                } else {
                  columns = (
                    <Row className={styles.featureItem}>
                      {col2} {col1}
                    </Row>
                  );
                }
                return <Row>{columns}</Row>;
              })}
              <div style={{ position: "absolute", bottom: -30, right: 20 }}>
                <Illustration2 />
              </div>
            </Col>
          </Row>
        );
      }}
    </IMTMediaQueries>
  );
}
