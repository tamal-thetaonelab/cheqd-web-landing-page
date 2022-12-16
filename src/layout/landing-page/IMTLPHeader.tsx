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
        window.location.href = "#contact";
      }}
    >
      Contact
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
              flex={1}
              xs={3}
              sm={3}
              md={3}
              lg={{ span: 4, offset: 3 }}
              xl={{ span: 5, offset: 3 }}
              xxl={{ span: 5, offset: 3 }}
              offset={2}
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
                  src="/logo@1x.png"
                  style={{ width: 90, position: "relative", left: "-8px" }}
                  alt="imt-logo"
                />
                {/* <div className={styles.mb} style={{ fontSize: 10 }}>
                  [ Beta release ]
                </div> */}
              </div>
            </Col>
            
            <Col
              className={styles.spaceHeaderWrap}
              flex={3}
              lg={13}
              xl={9}
              xxl={9}
            >
              <Space className={styles.spaceHeader}>
                <Button
                  type="text"
                  onClick={() => {
                    window.location.href = "#use-cases";
                    registerEvent(
                      ga.EVENT_CATEGORY_BUTTON_CLICK,
                      ga.EVENT_CLICK,
                      ga.events.imtlpHeader280
                    );
                  }}
                >
                  Use cases
                </Button>
                <Button
                  type="text"
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
                {/* <Button type="text">Blog</Button> */}
                <Button
                  type="text"
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
                  type="text"
                  onClick={() => {
                    window.location.href = "#contact-us";
                    registerEvent(
                      ga.EVENT_CATEGORY_BUTTON_CLICK,
                      ga.EVENT_CLICK,
                      ga.events.imtlpHeader282
                    );
                  }}
                >
                  Contact us
                </Button>
              </Space>
            </Col>

            <Col
              flex={1}
              sm={6}
              md={3}
              lg={2}
              xl={5}
              xxl={3}
              className={styles.dropdownSelectWrap}
            >
              {/* <Select
                className={styles.dropdownSelect}
                value={language}
                onChange={(v) => setLanguage("En")}
              >
                <Option value="En">English</Option>
                <Option value="Hi">हिंदी</Option>
                <Option value="Bn">বাংলা</Option>
                <Option value="Gj">ગુજરાતી</Option>
              </Select> */}
            </Col>
            <Col flex={1} xs={{ span: 8 }} md={7} lg={6} xl={3} xxl={5}>
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
                    type="text"
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
                  <Button
                    type="primary"
                    className={`${commonStyles["bg-processing"]} ${commonStyles["border-color-processing"]}`}
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
                </Space>
                <Dropdown
                  overlay={menu}
                  trigger={["click"]}
                  placement="bottomRight"
                >
                  <MenuOutlined className={styles.hamburger} />
                </Dropdown>
              </div>
            </Col>
            <Col span={matches.justWidePhone ? (matches.lg ? 3 : 2) : 1} />
          </Row>
          <div className={styles.langSelectAltWrap}>
            <Select className={styles.dropdownSelect} defaultValue="En">
              <Option value="En">English</Option>
              <Option value="Gj">ગુજરાતી</Option>
              <Option value="Bn">বাংলা</Option>
            </Select>
          </div>
        </div>
      )}
    </IMTMediaQueries>
  );
}

/* export default connector(IMTLPHeader); */
export default IMTLPHeader;
