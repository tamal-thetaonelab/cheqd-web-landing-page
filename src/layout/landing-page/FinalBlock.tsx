import React from "react";
import cx from "classnames";
import { Row, Col, Typography, Button } from "antd";
import Illustration3 from "./Illustration3";
import commonStyles from "~/component/common.module.css";
import styles from "./LandingPageLayout.module.css";
import strings from "../../i18n/en";
import { registerEvent } from "~/analytics";

import * as ga from "~/contants/gaConstants";

export default function FinalBlock({ className, showSignUpModal }: any) {
  return (
    <div className={cx(className)} style={{ display: "block" }}>
      <Row
        style={{
          background: "#F2F2F2",
          position: "relative",
        }}
      >
        <Col span={24} className={styles.finalBlockOnlyCol}>
          <div
            // direction="vertical"
            className={styles.finalBlockWrap}
          >
            <Typography.Title
              level={4}
              style={{ whiteSpace: "pre" }}
              className={commonStyles["text-error"]}
            >
              Enjoy no commitment free trial
            </Typography.Title>
            <Typography.Title
              level={3}
              className={commonStyles["text-grey-1"]}
              style={{ paddingLeft: 10, paddingRight: 10 }}
            >
              {strings.JOIN_HAPPY_FACES}
            </Typography.Title>
            <Button
              type="primary"
              size="large"
              ghost
              style={{ marginTop: 15 }}
              className={`${commonStyles["text-color-processing"]} ${commonStyles["border-color-processing"]}  ${styles.hoverTransparancy}`}
              onClick={() => {
                registerEvent(
                  ga.EVENT_CATEGORY_BUTTON_CLICK,
                  ga.EVENT_CLICK,
                  ga.events.finalBlock277
                );
                showSignUpModal();
              }}
            >
              {strings.GET_STARTED}
            </Button>
          </div>
        </Col>
        <div className={styles.girlIllustration}>
          <Illustration3 />
        </div>
      </Row>
    </div>
  );
}
