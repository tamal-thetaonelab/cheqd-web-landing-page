import React, { useState } from "react";
import cx from "classnames";
import { Row, Col, Typography } from "antd";
import commonStyles from "~/component/common.module.css";
import styles from "./LandingPageLayout.module.css";
import strings from "../../i18n/en";

import {
  BulbTwoTone,
  SafetyCertificateTwoTone,
  SmileTwoTone,
  SlidersTwoTone,
} from "@ant-design/icons";

export default function FeaturesBlock({ className }: any) {
  const [features] = useState([
    {
      id: "compliance",
      Icon: (props: any) => <SafetyCertificateTwoTone {...props} />,
      title: strings.FEATURE_GST_HEADING,
      description: strings.FEATURE_GST_DESC,
    },
    {
      id: "ai",
      Icon: (props: any) => <BulbTwoTone {...props} />,
      title: strings.FEATURE_AI_HEADING,
      description: strings.FEATURE_AI_DESC,
    },
    {
      id: "employee",
      Icon: (props: any) => <SmileTwoTone {...props} />,
      title: strings.FEATURE_EMPLOYEE_HEADING,
      description: strings.FEATURE_EMPLOYEE_DESC,
    },
    {
      id: "cashflow",
      Icon: (props: any) => <SlidersTwoTone {...props} />,
      title: strings.FEATURE_ANALYTICS_HEADING,
      description: strings.FEATURE_ANALYTICS_DESC,
    },
  ]);
  return (
    <Row className={cx(className, styles.FeaturesBlock)} id="features">
      <Col span={24} flex={1} style={{ textAlign: "center" }}>
        <Typography.Title level={3} className={styles.HeadLineFeaturesBlock}>
          {strings.FEATURE_BLOCK_HEADING}
        </Typography.Title>
        {/* <Typography.Title
          level={5}
          className={cx(
            styles.subLineFeaturesBlock,
            commonStyles["text-grey-2"]
          )}
        >
          {strings.FEATURE_BLOCK_SUBHEADING}
        </Typography.Title> */}
        <div
          // direction="horizontal"
          // align="center"
          className={styles.FeaturesBlockWrapCenter}

          // size={30}
        >
          {features.map((feature) => {
            return (
              <div
                key={feature.id}
                // direction="vertical"
                className={styles.FeaturesBlockWrap}
                // size={15}
              >
                <feature.Icon
                  twoToneColor="#9B51E0"
                  className={styles.featureIcon}
                />
                <Typography.Title
                  level={4}
                  style={{
                    fontSize: 16,
                    marginTop: 15,
                    marginBottom: 15,
                    width: "100%",
                  }}
                  className={commonStyles["text-grey-1"]}
                >
                  {feature.title}
                </Typography.Title>
                <Typography.Title
                  level={5}
                  className={commonStyles["text-grey-2"]}
                >
                  {feature.description}
                </Typography.Title>
              </div>
            );
          })}
        </div>
      </Col>
    </Row>
  );
}
