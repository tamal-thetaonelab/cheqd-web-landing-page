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

const renderIllustration = () => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <div className={styles.illustrationSvg}>
      <Illustration />
      <div className={styles.heroBlockImg4}></div>
    </div>
  </div>
);

export default function HeroBlock({ className, showSignUpModal }: any) {
  const [showScheduler, setShowScheduler] = useState(false);
  const [openVideoPlayer, setOpenVideoPlayer] = useState(false);

  return (
    <IMTMediaQueries>
      {(matches) => (
        <Row
          className={cx(className, styles.heroblockRow)}
          justify="center"
          style={{
            height: matches.xxl ? "75vh" : matches.lg ? "92vh" : "unset",
          }}
        >
          <Col
            span={matches.justWidePhone ? 24 : 24}
            sm={24}
            style={matches.md ? { display: "none" } : {}}
            /* className={styles.illustrationCol} */
          >
            {renderIllustration()}
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Space
              direction="vertical"
              size={20}
              style={{ display: "flex", alignItems: "flex-start" }}
            >
              <div
                /* level={matches.lg ? 1 : matches.md ? 2 : 3} */
                className={styles.HeadLine}
              >
                Integrated{" "}
                <span className={styles.primaryTextColor}> Finance, HRMS </span>
                and{" "}
                <span className={styles.primaryTextColor}>
                  {" "}
                  Compliance{" "}
                </span>{" "}
                for your{" "}
                <span className={styles.primaryTextColor}> startup</span>
              </div>
              <div className={styles.subLine}>
                The platform <b>streamlines</b> financial operations, HR
                processes, and compliance for startups and IT / ITES businesses.
                It's <b>simple</b>,<b> intuitive</b> and <b>automates</b>{" "}
                mundane operations so that you can focus on <b>growing</b> your
                business.
              </div>
              <Space
                style={{ marginTop: matches.md ? 30 : 5 }}
                size={
                  matches.md ? "small" : matches.xs || matches.sm ? 4 : "middle"
                }
                direction={matches.lg ? "horizontal" : "vertical"}
              >
                <Button
                  type="primary"
                  size="large"
                  ghost
                  className={`${commonStyles["text-color-processing"]} ${commonStyles["border-color-processing"]} ${styles.hoverTransparancy}`}
                  onClick={() => {
                    setOpenVideoPlayer(true);
                    registerEvent(
                      ga.EVENT_CATEGORY_BUTTON_CLICK,
                      ga.EVENT_CLICK,
                      ga.events.heroBlock278
                    );
                  }}
                >
                  {strings.WATCH_VIDEO}
                </Button>
                <Button
                  type="primary"
                  size="large"
                  className={`${commonStyles["bg-processing"]} ${commonStyles["border-color-processing"]} ${styles.hoverTransparancy}`}
                >
                  {strings.SCHEDULE_DEMO}
                </Button>
              </Space>
            </Space>
            <br />
          </Col>
          <Col
            md={{ span: 11, offset: 1 }}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 10, offset: 2 }}
            style={
              matches.xs || matches.sm || matches.justWidePhone
                ? { display: "none" }
                : {}
            }
            /* className={styles.illustrationCol} */
          >
            {renderIllustration()}
          </Col>
          <VideoDrawer
            url="https://www.youtube.com/watch?v=xiHV5NJRDVg"
            title="How cheqd works"
            onClose={() => setOpenVideoPlayer(false)}
            openDrawer={openVideoPlayer}
            isMobile={!matches.lg && !matches.md}
          />
          <Drawer
            placement="right"
            visible={showScheduler}
            onClose={() => {
              setShowScheduler(false);
            }}
            width={matches.lg || matches.md ? "60%" : "100%"}
            destroyOnClose
            drawerStyle={{ backgroundColor: "rgb(245, 248, 250)" }}
          >
            <HubspotScheduler />
          </Drawer>
        </Row>
      )}
    </IMTMediaQueries>
  );
}
