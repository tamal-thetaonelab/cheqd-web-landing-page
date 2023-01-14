// tslint-disable-file jsx-no-lambda
import React, { useEffect, useState } from "react";
import cx from "classnames";
import { Row, Col, Space, Button } from "antd";
import styles from "./LandingPageLayout.module.css";
import IMTMediaQueries from "~/component/IMTMediaQueries";
import premiumServicesIllus from "~/assets/premium-services.png";
import partnerImage1 from "~/assets/partner-images/ca-image.jpeg";
import commonStyles from "~/component/common.module.css";

const googleFormForPartner =
  "https://docs.google.com/forms/d/e/1FAIpQLSfUgIbqe9n4rmbnc5Nw9fpQSgIP7focFhL9eoIlaCRDA3ac8g/viewform?vc=0&c=0&w=1&flr=0";
const googleFormForHumanAssistedServices =
  "https://docs.google.com/forms/d/e/1FAIpQLSfUgIbqe9n4rmbnc5Nw9fpQSgIP7focFhL9eoIlaCRDA3ac8g/viewform?vc=0&c=0&w=1&flr=0";

const services = [
  {
    title: "Assisted tax filing",
    Subtitle: "Looking for a human help to take care your taxation needs ?",
    body: "",
    bullets: [
      "Compliance calendar & dashboard",
      "No more asking for financial data to your CA, all are available round the clock.",
      "GST, TDS, PTAX, PF, MCA and ESI - all major compliances are covered",
      "Transparent pricing",
    ],
  },
  {
    title: "Partner driven services",
    Subtitle: "Looking for a affordable yet complete auditing & advisory services ?",
    body: "We have partnered with experienced chartered accountants, cost & management accountants, company secratories to help you.",
    bullets: [
      "Regulatory audit",
      "Tax audit",
      "Advisory & consultancy services",
    ],
  },
  {
    title: "Adhoc services",
    Subtitle: "Let us help you various Govt. registrations & applications",
    body: "",
    bullets: [
      "Comapny incorporation",
      "GST Registration",
      "DSC ceration",
      "PAN / TAN registration",
      "FSSAI registration",
    ],
  },
];
const partners = [
  {
    image: partnerImage1,
    name: "Shibaji Bakshi",
    bio: "Automate compilation of sales reports from various eCommerce platforms with high precision and making GST file ready in just 10 minutes.",
  },
  {
    image: partnerImage1,
    name: "Shibaji Bakshi",
    bio: "Automate compilation of sales reports from various eCommerce platforms with high precision and making GST file ready in just 10 minutes.",
  },
  {
    image: partnerImage1,
    name: "Shibaji Bakshi",
    bio: "Automate compilation of sales reports from various eCommerce platforms with high precision and making GST file ready in just 10 minutes.",
  },
];

let timerHandle:any;
export default function PremiumServices({ className, showSignUpModal }: any) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [overrideAutoSlide, setOverrideAutoSlide] = useState(false);
  const getActiveSlide = () => activeSlide;
  useEffect(() => {
    if (!overrideAutoSlide) {
      timerHandle = setTimeout(() => {
        setActiveSlide((activeSlide + 1) % services.length);
      }, 4000);
    }
  }, [activeSlide]);
  useEffect(() => {
    timerHandle = setTimeout(() => {
      setActiveSlide((activeSlide + 1) % services.length);
    }, 4000);
  }, []);
  return (
    <IMTMediaQueries>
      {(matches) => (
        <Row
          className={cx(className, styles.FeaturesBlock)}
          id="premium-services"
        >
          <Col
            flex={1}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            xxl={24}
            style={{ textAlign: "center" }}
          >
            <div className={styles.HeadLineFeaturesBlock}>
              Premium <span className={styles.primaryTextColor}>services</span>
            </div>
            <Space
              align="center"
              direction="horizontal"
              size={3}
              wrap
              className={styles.justifyCenter}
            >
              {services.map((val, idx) => {
                return (
                  <div
                    className={`${styles.tabHeaderRounded} ${
                      activeSlide === idx ? styles.tabHeaderRoundedActive : ""
                    }`}
                    onClick={() => {
                      if(timerHandle) clearTimeout(timerHandle)
                      setOverrideAutoSlide(true);
                      setActiveSlide(idx);
                    }}
                  >
                    {val.title}
                  </div>
                );
              })}
            </Space>
            <Row className={styles.useCasesRow}>
              <Col
                xs={0}
                xl={2}
                xxl={3}
              ></Col>
              <Col
                span={
                  matches.xl ? 9 : matches.xxl ? 10 : matches.lg ? 9 : 24
                } /* style={{backgroundColor:'green'}} */
              >
                {
                  <div className={styles.useCasesTextWrapper}>
                    <div className={`${styles.useCasesSubtitle} ${styles.standartHeading}`}>
                      {services[activeSlide].Subtitle}
                    </div>
                    <div className={styles.useCasesBody}>
                      {services[activeSlide].body}
                    </div>
                    <div className={styles.useCasesBulletWrapper}>
                      {services[activeSlide].bullets.map((bul) => {
                        return (
                          <div className={`${styles.useCasesBulletItem} ${styles.standartBodyText}`}>
                            <span className={styles.useCasesBulletSpan}>
                              {" "}
                              [+]{" "}
                            </span>{" "}
                            {bul}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                }
              </Col>
              <Col
                lg={2}
                xxl={1} /* style={{backgroundColor:'yellow'}} */
              ></Col>
              <Col
                span={
                  matches.xl ? 9 : matches.lg ? 8 : 24
                } /* style={{backgroundColor:'red'}} */
              >
                <div
                  className={styles.useCasesImageWrapper}
                  /* style={{ backgroundColor: "red" }} */
                >
                  <img src={premiumServicesIllus} />
                  {/* <IllustrationPremiumService /> */}
                  {/* <div className={styles.illustrationSvg}>
                   <IllustrationPremiumService />
                  </div> */}
                </div>
              </Col>
              <Col
                span={
                  matches.lg ? 2 : 0
                } /* style={{backgroundColor:'purple'}} */
              ></Col>
            </Row>
            <Button
              type="primary"
              size="large"
              ghost
              href={googleFormForHumanAssistedServices}
              target="_blank"
              className={`${commonStyles["text-color-processing"]} ${commonStyles["border-color-processing"]}  ${styles.hoverTransparancy} ${styles.useCasesLetsConBtn}`}
            >
              Let's connect
            </Button>
            {/* <Row style={{ marginTop: 30 }}>
              <Col span={24}>
                <div>
                  <div className={styles.partnerHeader}>Partners</div>
                  <div className={styles.partnerItemWrap}>
                    {partners.map((prt: any) => (
                      <Col xs={24} md={12} lg={8} xl={8} xxl={5} className={styles.partnerItemWrapCol}>
                        <div className={styles.partnerItem}>
                          <div className={styles.partnerItemImage}>
                            <img src={prt.image} />
                          </div>
                          <div className={`${styles.partnerItemName} ${styles.standartHeading}`}>
                            {prt.name}
                          </div>
                          <div className={`${styles.partnerItemBio} ${styles.standartBodyText}`}>{prt.bio}</div>
                        </div>
                      </Col>
                    ))}
                  </div>
                  <Button
                    type="primary"
                    size="large"
                    target="_blank"
                    ghost
                    style={{ marginTop: 30 }}
                    className={`${commonStyles["text-color-processing"]} ${commonStyles["border-color-processing"]}  ${styles.hoverTransparancy}`}
                    href={googleFormForPartner}
                  >
                    Partner with Cheqd
                  </Button>
                </div>
              </Col>
            </Row> */}
          </Col>
        </Row>
      )}
    </IMTMediaQueries>
  );
}
