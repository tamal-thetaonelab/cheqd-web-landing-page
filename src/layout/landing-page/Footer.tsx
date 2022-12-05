import React from "react";
import { Row, Col, Typography } from "antd";

import commonStyles from "~/component/common.module.css";

export default function Footer(props: any) {
  return (
    <Row
      style={{
        height: "70px",
        background: "#FFF",
        position: "relative",
      }}
      className={commonStyles["bg-grey-3"]}
      id="contact"
    >
      <Col
        span={10}
        offset={2}
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography.Title level={4} className={commonStyles["text-grey-2"]}>
          Write{" "}
          <span role="img" aria-label="Write">
            ✍️
          </span>{" "}
          to us at <a href="mailto:support@cheqd.in">support@cheqd.in</a>
        </Typography.Title>
      </Col>
      <Col span={3} />
      <Col
        span={7}
        style={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "right",
        }}
      >
        <Typography.Title level={4} className={commonStyles["text-grey-2"]}>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by <a href="https://thetaonelab.com">Theta One</a>
        </Typography.Title>
      </Col>
      <Col span={2} />
    </Row>
  );
}
