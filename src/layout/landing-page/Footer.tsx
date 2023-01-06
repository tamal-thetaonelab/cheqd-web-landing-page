import React from "react";
import { Row, Col, Typography } from "antd";
import styles from "./LandingPageLayout.module.css";
import commonStyles from "~/component/common.module.css";
import IMTMediaQueries from "~/component/IMTMediaQueries";
import cx from "classnames";
import facebookIcon from "~/assets/social-icons/facebook.png";
import youtubIcon from "~/assets/social-icons/youtube.png";
import linkedinIcon from "~/assets/social-icons/linkedin.png";

export default function Footer({ className, showSignupModal }: any) {
  return (
    <IMTMediaQueries>
      {(matches) => (
        <>
          <Row
            className={cx(className)}
            style={{ paddingTop: "30px", paddingBottom: "30px" }}
            justify="center"
            id="footer"
          >
            <Col xs={24} md={6}>
              <div className={styles.footerColumn1}>
                <img src="logo-white@1x.png" className={styles.footerLogo} />
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
                  id amet, vulputate mauris. Et sit consequat egestas quis
                  maecenas adipiscing. Aliquet mauris viverra parturient nunc
                  tortor.
                </div>
                <div>
                  <a style={{ color: "#f6ebff" }} href="#">
                    Privacy policy
                  </a>{" "}
                  |{" "}
                  <a style={{ color: "#f6ebff" }} href="#">
                    Terms of use
                  </a>
                </div>
              </div>
              {/*  <Typography.Title level={4} className={commonStyles["text-grey-2"]}>
          Write{" "}
          <span role="img" aria-label="Write">
            ✍️
          </span>{" "}
          to us at <a href="mailto:support@cheqd.in">support@cheqd.in</a>
        </Typography.Title> */}
            </Col>
            <Col md={2} xs={0} />
            <Col xs={24} md={4}>
              <div className={styles.footerColumn2}>
                {[
                  "Home",
                  "Features",
                  "Premium services",
                  "Partners",
                  "Pricing",
                  "Team",
                  "Contact us",
                ].map((link: string) => {
                  return (
                    <div>
                      <a style={{ color: "#f6ebff" }} href="#">
                        {link}
                      </a>
                    </div>
                  );
                })}
              </div>
            </Col>
            <Col xs={0} md={2}></Col>
            <Col xs={24} md={3}>
              <div className={styles.footerColumn3}>
                <div>Social media</div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  {[facebookIcon, youtubIcon, linkedinIcon].map(
                    (icon: string) => {
                      return <img src={icon} />;
                    }
                  )}
                </div>
              </div>
              {/* <Typography.Title level={4} className={commonStyles["text-grey-2"]}>
              Made with{" "}
              <span role="img" aria-label="heart">
                ❤️
              </span>{" "}
              by <a href="https://thetaonelab.com">Theta One</a>
            </Typography.Title> */}
            </Col>
            <Col xs={0} md={2}></Col>
            <Col xs={0} md={5}>
              <div className={styles.footerColumn4}>
                <div>
                  Mail us at{" "}
                  <a
                    style={{ color: "#f6ebff" }}
                    href="mailTo:support@cheqd.in"
                  >
                    support@cheqd.in
                  </a>
                </div>
                <div>View all pricing plans</div>
              </div>
            </Col>
          </Row>
          <Row
            className={cx(className)}
            justify="center"
            style={{
              height: "80px",
              paddingTop: 0,
              paddingBottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "white",
              fontSize: "13px",
              fontWeight: 600,
              backgroundColor: "var(--processing-color)",
              opacity: "80%",
            }}
          >
            <Col span={24}>
              <div style={{ color: "var(--grey-3)", fontWeight: "400" }}>
                Copyright © 2022 Cheqd. All rights reserved
              </div>
              <div>
                Made with ❤️ at{" "}
                <a
                  style={{ color: "#f6ebff" }}
                  href="https://thetaonelab.com"
                  target="_blank"
                >
                  Theta One
                </a>
              </div>
            </Col>
          </Row>
        </>
      )}
    </IMTMediaQueries>
  );
}
