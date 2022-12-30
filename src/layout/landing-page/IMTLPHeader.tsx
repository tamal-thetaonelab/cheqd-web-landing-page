import React, { ReactElement, useState } from "react";
import { Row, Col, Button, Space, Select, Dropdown, Menu } from "antd";
/* import { action } from "~/app/LandingPageApp/store"; */
import { connect, ConnectedProps } from "react-redux";
import commonStyles from "~/component/common.module.css";
import styles from "./LandingPageLayout.module.css";
import { MenuOutlined } from "@ant-design/icons";
import IMTMediaQueries from "~/component/IMTMediaQueries";
import { registerEvent } from "~/analytics";
import * as ga from "~/contants/gaConstants";
const { Option } = Select;

const googleFormContactUs = "https://google.com"
const aboutUsLink = "https://google.com"

/* const mapDispatchToProps = {
  showLoginModal: () => null,
  showSignUpModal: () => void
}; */

const connector = connect();
type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props /* extends PropsFromRedux */ {
  doNotUseMe?: never;
}

const menu = (
  <Menu>
    <Menu.Item
      key="0"
      onClick={() => {
        window.location.href = "#features";
      }}
    >
      Features
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item
      key="0"
      onClick={() => {
        window.location.href = "#premium-services";
      }}
    >
      Premium services
    </Menu.Item>
    <Menu.Divider />

    <Menu.Item
      key="1"
      onClick={() => {
        window.location.href = "#pricing";
      }}
    >
      Pricing
    </Menu.Item>
    <Menu.Divider />
    {/* <Menu.Item key="3">Blog</Menu.Item>
    <Menu.Divider /> */}

    <Menu.Item
      key="4"
      onClick={() => {
        window.location.href = googleFormContactUs;
      }}
    >
      Contact
    </Menu.Item>
    
    <Menu.Item
      key="4"
      onClick={() => {
        window.location.href = aboutUsLink;
      }}
    >
      About
    </Menu.Item>
  </Menu>
);

function IMTLPHeader({}: Props): ReactElement {
  const [language, setLanguage] = useState("En");
  return (
    <IMTMediaQueries>
      {(matches) => (
        <div>
          <Row style={{ height: 60 }} align="middle">
            <Col
              xs={3}
              sm={3}
              md={3}
              lg={{ span: 4, offset: 3 }}
              xl={{ span: 4, offset: 3 }}
              xxl={{ span: 4, offset: 3 }}
              offset={2}
              /* style={{ backgroundColor: "#45454589" }} */
            >
              <div
                style={{
                  height: 60,
                  alignItems: "center",
                  justifyContent: "flex-start",
                  display: "flex",
                }}
              >
                <img
                  src="/logo@2x.png"
                  style={{ width: 90, position: "relative", left: "-8px" }}
                  alt="imt-logo"
                />
                <div className={styles.mb} style={{ fontSize: 10 }}>
                  {matches.xs ? " xs +" : ""}
                  {matches.sm ? " sm +" : ""}
                  {matches.md ? " md +" : ""}
                  {matches.lg ? " lg +" : ""}
                  {matches.xl ? " xl +" : ""}
                  {matches.xxl ? " xxl +" : ""}
                </div>
              </div>
            </Col>
            <Col
              className={styles.spaceHeaderWrap}
              xs={8}
              sm={6}
              md={8}
              lg={14}
              xl={14}
              xxl={14}
              /* style={{ backgroundColor: "#AA454589" }} */
            >
              <Space
                className={styles.spaceHeader}
                size={matches.xxl ? 30 : 10}
              >
                {matches.lg && (
                  <>
                    <Button
                      type="text"
                      className={styles.headerLinks}
                      onClick={() => {
                        window.location.href = "#features";
                        registerEvent(
                          ga.EVENT_CATEGORY_BUTTON_CLICK,
                          ga.EVENT_CLICK,
                          ga.events.imtlpHeader281
                        );
                      }}
                    >
                      Features
                    </Button>
                    <Button
                      type="text"
                      className={styles.headerLinks}
                      onClick={() => {
                        window.location.href = "#premium-services";
                        registerEvent(
                          ga.EVENT_CATEGORY_BUTTON_CLICK,
                          ga.EVENT_CLICK,
                          ga.events.imtlpHeader282
                        );
                      }}
                    >
                      Premium services
                    </Button>
                    <Button
                      className={styles.headerLinks}
                      type="text"
                      onClick={() => {
                        window.location.href = "#pricing";
                        registerEvent(
                          ga.EVENT_CATEGORY_BUTTON_CLICK,
                          ga.EVENT_CLICK,
                          ga.events.imtlpHeader282
                        );
                      }}
                    >
                      Pricing
                    </Button>
                    <Button
                      className={styles.headerLinks}
                      type="text"
                      onClick={() => {
                        window.location.href = aboutUsLink;
                        registerEvent(
                          ga.EVENT_CATEGORY_BUTTON_CLICK,
                          ga.EVENT_CLICK,
                          ga.events.imtlpHeader282
                        );
                      }}
                    >
                      Contact
                    </Button>
                    <Button
                      className={styles.headerLinks}
                      type="text"
                      onClick={() => {
                        window.location.href = aboutUsLink;
                        registerEvent(
                          ga.EVENT_CATEGORY_BUTTON_CLICK,
                          ga.EVENT_CLICK,
                          ga.events.imtlpHeader282
                        );
                      }}
                    >
                      About
                    </Button>
                  </>
                )}
                <div
                  style={{
                    height: 60,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    display: "flex",
                  }}
                >
                  <Space>
                    <Button
                      type="default"
                      onClick={() => {
                        /* showLoginModal(); */
                        registerEvent(
                          ga.EVENT_CATEGORY_BUTTON_CLICK,
                          ga.EVENT_CLICK,
                          ga.events.imtlpHeader283
                        );
                      }}
                    >
                      Login
                    </Button>
                    <div>
                      <Button
                        type="primary"
                        className={`${commonStyles["bg-processing"]} ${commonStyles["border-color-processing"]} ${styles.hoverTransparancy}`}
                        onClick={() => {
                          /* showSignUpModal(); */
                          registerEvent(
                            ga.EVENT_CATEGORY_BUTTON_CLICK,
                            ga.EVENT_CLICK,
                            ga.events.imtlpHeader284
                          );
                        }}
                      >
                        Start free trial
                      </Button>
                      <div
                        style={{
                          fontSize: 8,
                          fontWeight: 500,
                          marginBottom: -12,
                          marginTop: -1,
                          textAlign: "center",
                        }}
                      >
                        ( No credit card required )
                      </div>
                    </div>
                  </Space>
                  <Dropdown
                    overlay={menu}
                    trigger={["click"]}
                    placement="bottomRight"
                  >
                    <MenuOutlined className={styles.hamburger} />
                  </Dropdown>
                </div>
              </Space>
            </Col>
            <Col span={matches.lg ? 3 : 2} />
          </Row>
          {/* <div className={styles.langSelectAltWrap}>
            <Select className={styles.dropdownSelect} defaultValue="En">
              <Option value="En">English</Option>
              <Option value="Gj">ગુજરાતી</Option>
              <Option value="Bn">বাংলা</Option>
            </Select>
          </div> */}
        </div>
      )}
    </IMTMediaQueries>
  );
}

/* export default connector(IMTLPHeader); */
export default IMTLPHeader;
