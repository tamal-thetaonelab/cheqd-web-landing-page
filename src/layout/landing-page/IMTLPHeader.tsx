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
              xs={6}
              sm={6}
              md={6}
              lg={{ span: 7, offset: 3 }}
              xl={{ span: 8, offset: 3 }}
              xxl={{ span: 8, offset: 3 }}
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
                  style={{ width: 70, position: "relative", left: "-8px" }}
                  alt="imt-logo"
                />
                <div className={styles.mb} style={{ fontSize: 10 }}>
                  [ Beta release ]
                </div>
              </div>
            </Col>
            <Col flex={1} />
            <Col
              className={styles.spaceHeaderWrap}
              flex={1}
              lg={10}
              xl={6}
              xxl={6}
            >
              <Space className={styles.spaceHeader}>
                <Button
                  type="text"
                  onClick={() => {
                    window.location.href = "#features";
                    registerEvent(
                      ga.EVENT_CATEGORY_BUTTON_CLICK,
                      ga.EVENT_CLICK,
                      ga.events.imtlpHeader280
                    );
                  }}
                >
                  Features
                </Button>
                <Button
                  type="text"
                  onClick={() => {
                    window.location.href = "#pricing";
                    registerEvent(
                      ga.EVENT_CATEGORY_BUTTON_CLICK,
                      ga.EVENT_CLICK,
                      ga.events.imtlpHeader281
                    );
                  }}
                >
                  Pricing
                </Button>
                {/* <Button type="text">Blog</Button> */}
                <Button
                  type="text"
                  onClick={() => {
                    window.location.href = "#contact";
                    registerEvent(
                      ga.EVENT_CATEGORY_BUTTON_CLICK,
                      ga.EVENT_CLICK,
                      ga.events.imtlpHeader282
                    );
                  }}
                >
                  Contact
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
              <Select
                className={styles.dropdownSelect}
                value={language}
                /*tslint-disable-next-line jsx-no-lambda */
                onChange={(v) => setLanguage("En")}
              >
                <Option value="En">English</Option>
                <Option value="Hi">हिंदी</Option>
                <Option value="Bn">বাংলা</Option>
                <Option value="Gj">ગુજરાતી</Option>
              </Select>
            </Col>
            <Col flex={1} xs={{ span: 8 }} md={5} lg={4} xl={1} xxl={2}>
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
                    Sign up
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
