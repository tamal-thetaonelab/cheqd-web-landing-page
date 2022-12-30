// tslint-disable-file jsx-no-lambda
import React, { useEffect, useState } from "react";
import cx from "classnames";
import { Row, Col, Space, Button } from "antd";
import styles from "./LandingPageLayout.module.css";
import IMTMediaQueries from "~/component/IMTMediaQueries";
import premiumServicesIllus from "~/assets/premium-services.png";
import partnerImage1 from "~/assets/partner-images/ca-image.jpeg";
import commonStyles from "~/component/common.module.css";

const googleFormForPartner = "https://docs.google.com/forms/d/e/1FAIpQLSfUgIbqe9n4rmbnc5Nw9fpQSgIP7focFhL9eoIlaCRDA3ac8g/viewform?vc=0&c=0&w=1&flr=0"
const googleFormForHumanAssistedServices = "https://docs.google.com/forms/d/e/1FAIpQLSfUgIbqe9n4rmbnc5Nw9fpQSgIP7focFhL9eoIlaCRDA3ac8g/viewform?vc=0&c=0&w=1&flr=0"

const services = [
  {
    title: "Assisted tax filing",
    Subtitle: "Looking for a human help to take care your taxation needs ?",
    body: "Also have local sales? Too many sales reports at the month end to compile? Reports are of different formats? Compilation of all these to make a GST ready file is entirely manual and takes huge effort.",
    bullets: [
      "Transparent pricing",
      "Compliance dashboard",
      "No more asking for financial data to your CA, all are available round the clock.",
      "GST, TDS, PTAX, PF and ESI",
    ],
  },
  {
    title: "Partner driven services",
    Subtitle: "Are you selling your products on various eCommerce platforms? ",
    body: "Also have local sales? Too many sales reports at the month end to compile? Reports are of different formats? Compilation of all these to make a GST ready file is entirely manual and takes huge effort.",
    bullets: [
      "Automate compilation of sales reports from various eCommerce platforms with high precision and making GST file ready in just 10 minutes.",
      "Automate TCS calculations Advanced reconciliation features to help you file your compliance accurately",
      "No missing of compliance deadlines as there will be automated reminders from Cheqd Separately manage local sales efficiently with solutions from Cheqd",
    ],
  },
  {
    title: "Adhoc services",
    Subtitle: "Are you selling your products on various eCommerce platforms? ",
    body: "Also have local sales? Too many sales reports at the month end to compile? Reports are of different formats? Compilation of all these to make a GST ready file is entirely manual and takes huge effort.",
    bullets: [
      "Automate compilation of sales reports from various eCommerce platforms with high precision and making GST file ready in just 10 minutes.",
      "Automate TCS calculations Advanced reconciliation features to help you file your compliance accurately",
      "No missing of compliance deadlines as there will be automated reminders from Cheqd Separately manage local sales efficiently with solutions from Cheqd",
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

export default function PremiumServices({ className, showSignUpModal }: any) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [overrideAutoSlide, setOverrideAutoSlide] = useState(false);
  const getActiveSlide = () => activeSlide;
  useEffect(() => {
    if (!overrideAutoSlide) {
      setTimeout(() => {
        setActiveSlide((activeSlide + 1) % services.length);
      }, 4000);
    }
  }, [activeSlide]);
  useEffect(() => {
    setTimeout(() => {
      setActiveSlide((activeSlide + 1) % services.length);
    }, 4000);
  }, []);
  return (
    <IMTMediaQueries>
      {(matches) => (
        <Row className={cx(className, styles.FeaturesBlock)} id="features">
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
            <Space align="center" direction="horizontal" size={20}>
              {services.map((val, idx) => {
                return (
                  <div
                    className={`${styles.tabHeaderRounded} ${
                      activeSlide === idx ? styles.tabHeaderRoundedActive : ""
                    }`}
                    onClick={() => {
                      setOverrideAutoSlide(true);
                      setActiveSlide(idx);
                    }}
                  >
                    {val.title}
                  </div>
                );
              })}
            </Space>
            <Row style={{ height: "450px" }}>
              <Col xl={2} xxl={3} /* style={{backgroundColor:'blue'}} */></Col>
              <Col span={matches.xl ? 9 : 10} /* style={{backgroundColor:'green'}} */>
                {
                  <div className={styles.useCasesTextWrapper}>
                    <div className={styles.useCasesSubtitle}>
                      {services[activeSlide].Subtitle}
                    </div>
                    {/* <div className={styles.useCasesBody}>
                      {services[activeSlide].body}
                    </div> */}
                    <div className={styles.useCasesBulletWrapper}>
                      {services[activeSlide].bullets.map((bul) => {
                        return (
                          <div className={styles.useCasesBulletItem}>
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
              <Col lg={2} xxl={1} /* style={{backgroundColor:'yellow'}} */></Col>
              <Col lg={8} xl={9} /* style={{backgroundColor:'red'}} */>
                <div
                  className={styles.useCasesImageWrapper}
                  /* style={{ backgroundColor: "red" }} */
                >
                  <img src={premiumServicesIllus} style={{ width: 300 }} />
                  {/* <IllustrationPremiumService /> */}
                  {/* <div className={styles.illustrationSvg}>
                   <IllustrationPremiumService />
                  </div> */}
                </div>
              </Col>
              <Col span={matches.lg ? 2 : 0} /* style={{backgroundColor:'purple'}} */></Col>
            </Row>
            <Button
              type="primary"
              size="large"
              ghost
              style={{ marginTop: -30 }}
              href={googleFormForHumanAssistedServices}
              target="_blank"
              className={`${commonStyles["text-color-processing"]} ${commonStyles["border-color-processing"]}  ${styles.hoverTransparancy}`}
            >
              Let's connect
            </Button>
            <Row style={{ marginTop: 30 }}>
              <Col span={24}>
                <div>
                  <div className={styles.partnerHeader}>Partners</div>
                  <div className={styles.partnerItemWrap}>
                    {partners.map((prt: any) => (
                      <div className={styles.partnerItem}>
                        <div className={styles.partnerItemImage}>
                          <img src={prt.image} />
                        </div>
                        <div className={styles.partnerItemName}>{prt.name}</div>
                        <div className={styles.partnerItemBio}>{prt.bio}</div>
                      </div>
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
            </Row>
          </Col>
        </Row>
      )}
    </IMTMediaQueries>
  );
}
