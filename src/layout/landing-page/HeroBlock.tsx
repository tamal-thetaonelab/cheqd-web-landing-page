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

export default function HeroBlock({ className, showSignUpModal }: any) {
  const [showScheduler, setShowScheduler] = useState(false);
  const [openVideoPlayer, setOpenVideoPlayer] = useState(false);

  return (
    <IMTMediaQueries>
      {(matches) => (
        <Row className={cx(className, styles.heroblockRow)} justify="center">
          <Col sm={24} md={12} lg={12} className={styles.heroblockCol}>
            <Space direction="vertical" size={20}>
              <div
                /* level={matches.lg ? 1 : matches.md ? 2 : 3} */
                className={styles.HeadLine}
              >
                Integrated{" "}
                <span className={styles.primaryTextColor}> finance, hrms </span>
                and{" "}
                <span className={styles.primaryTextColor}>
                  {" "}
                  compliance{" "}
                </span>{" "}
                for <span className={styles.primaryTextColor}>startups</span>
              </div>
              <div className={styles.subLine}>
                The platform streamlines financial management, HR
                processes, and compliance for startups and IT / ITES
                businesses. It's user-friendly and intuitive, and our team of
                experts support in all steps so that you can focus on growing your business.
              </div>
              <Space
                style={{ marginTop: 30 }}
                size={
                  matches.md ? "small" : matches.xs || matches.sm ? 4 : "middle"
                }
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
                  /* onClick={() => {
                    showSignUpModal();
                    registerEvent(
                      ga.EVENT_CATEGORY_BUTTON_CLICK,
                      ga.EVENT_CLICK,
                      ga.events.heroBlock279
                    );
                  }} */
                >
                  {/* {strings.START_FREE_TRIAL} */}
                  {"Schedule a live demo"}
                </Button>
              </Space>
              {/* type="text" size="large" ghost className=
              {`${commonStyles["text-color-processing"]} ${commonStyles["border-color-processing"]}`}{" "}
              */}
              {/* <Typography.Title level={5} className={styles.subLine}>
                <VanillaButton
                  onClick={() => {
                    setShowScheduler(true);
                  }}
                  text={strings.SCHEDULE_DEMO}
                />{" "}
                {strings.FOR_IN_DEPTH_UNDERSTANDING}
              </Typography.Title> */}
            </Space>
            {/* <Space
              size={
                matches.md ? "small" : matches.xs || matches.sm ? 4 : "middle"
              }
              style={{ marginTop: 50 }}
            > */}
            {/* <img
                  style={{ height: 50 }}
                  src={require("../../assets/pci.jpeg")}
                  alt="PCI certification"
                />
                <img
                  style={{ height: 50 }}
                  src={require("../../assets/stqc.jpeg")}
                  alt="PCI certification"
                /> */}
            {/*  <img
                style={{ height: 50 }}
                src={require("../../assets/sample-dss.png")}
                alt="PCI certification"
              />
              <Typography.Title
                level={matches.lg ? 5 : matches.md ? 5 : 5}
                className={styles.subLine}
                style={{ color: "var(--gray-1)" }}
              >
                {strings.YOUR_DATA_SAFE}
              </Typography.Title>
            </Space> */}
          </Col>
          <Col
            flex={1}
            span={matches.justWidePhone ? 18 : 24}
            sm={16}
            md={{ span: 11, offset: 1 }}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 10, offset: 2 }}
            className={styles.illustrationCol}
          >
            <div className={styles.illustrationSvg}>
              <Illustration />
            </div>
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
          </Col>
        </Row>
      )}
    </IMTMediaQueries>
  );
}
