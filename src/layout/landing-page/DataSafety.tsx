import React from "react";
import cx from "classnames";
import { Row, Space, Typography } from "antd";
import styles from "./LandingPageLayout.module.css";
import IMTMediaQueries from "~/component/IMTMediaQueries";
import strings from "../../i18n/en";

export default function Testimonials({ className, showSignupModal }: any) {
  return (
    <IMTMediaQueries>
      {(matches) => (
        <Row className={cx(className, styles.dataSafetyWrap)} id="testimonials">
          <Space direction="vertical" align="center">
            <Typography.Title level={matches.xl ? 3 : matches.lg ? 3 : 4}>
              {strings.DATA_SAFETY}
            </Typography.Title>
            <Space
              direction="horizontal"
              align="center"
              style={{
                marginTop: 20,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Space direction="vertical" align="center">
                <img
                  style={{ width: 40, padding: 5, marginTop: 5 }}
                  src={require("~/assets/shield.webp")}
                  alt="In-transit &amp; at-rest encryption"
                />
                <Typography.Title
                  level={5}
                  style={{ width: 100, textAlign: "center" }}
                >
                  In-transit &amp; at-rest encryption
                </Typography.Title>
              </Space>
              <Space direction="vertical" align="center">
                <img
                  style={{ width: 40, padding: 5, marginTop: 5 }}
                  src={require("~/assets/backup.webp")}
                  alt="Frequent data backup"
                />
                <Typography.Title
                  level={5}
                  style={{ width: 100, textAlign: "center" }}
                >
                  Frequent data backup
                </Typography.Title>
              </Space>
              <Space direction="vertical" align="center">
                <img
                  style={{ width: 40, padding: 5, marginTop: 5 }}
                  src={require("~/assets/access.webp")}
                  alt="Strict access control"
                />
                <Typography.Title
                  level={5}
                  style={{ width: 100, textAlign: "center" }}
                >
                  Strict access control
                </Typography.Title>
              </Space>
              <Space direction="vertical" align="center">
                <img
                  style={{ width: 35, padding: 5, marginTop: 5 }}
                  src={require("~/assets/startup.webp")}
                  alt="Touchless deployment"
                />
                <Typography.Title
                  level={5}
                  style={{ width: 100, textAlign: "center" }}
                >
                  Touchless deployment
                </Typography.Title>
              </Space>
            </Space>
          </Space>
        </Row>
      )}
    </IMTMediaQueries>
  );
}
