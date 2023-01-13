import React from "react";
import cx from "classnames";
import { Row, Space, Typography } from "antd";
import styles from "./LandingPageLayout.module.css";
import IMTMediaQueries from "~/component/IMTMediaQueries";
import strings from "../../i18n/en";

const dsItems = [
  {
    title: "In-transit & at-rest encryption",
    icon: "data-safety-icons/ds-1.png",
  },
  {
    title: "Frequent data backup",
    icon: "data-safety-icons/ds-2.png",
  },
  {
    title: "Strict access control",
    icon: "data-safety-icons/ds-3.png",
  },
  {
    title: "Touchless deployment",
    icon: "data-safety-icons/ds-4.png",
  },
];
export default function Testimonials({ className, showSignupModal }: any) {
  return (
    <IMTMediaQueries>
      {(matches) => (
        <Row className={cx(className, styles.dataSafetyWrap)} id="testimonials">
          <Space direction="vertical" align="center">
            <div className={styles.dataSafetyHeaderText}>
              {strings.DATA_SAFETY}
            </div>
            <Space
              direction="horizontal"
              align="center"
              size={matches.xs || matches.justWidePhone ? 5 : 80}
              style={{
                marginTop: 20,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {dsItems.map((ds: any, idx: number) => {
                return (
                  <Space
                    direction="vertical"
                    align="center"
                    key={`space-datasafety-${idx}`}
                  >
                    <img
                      className={styles.dataSafetyItemImg}
                      src={ds.icon}
                      alt={ds.title}
                    />
                    <div className={styles.dataSafetyItemText}>{ds.title}</div>
                  </Space>
                );
              })}
            </Space>
          </Space>
        </Row>
      )}
    </IMTMediaQueries>
  );
}
