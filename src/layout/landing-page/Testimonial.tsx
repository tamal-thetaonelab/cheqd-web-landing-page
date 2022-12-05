import React from "react";
import cx from "classnames";
import { Button, Col, Row, Space, Typography, Carousel } from "antd";
import Illustration2 from "./Illustration2";
import styles from "./LandingPageLayout.module.css";
import IMTMediaQueries from "~/component/IMTMediaQueries";
import commonStyles from "~/component/common.module.css";
import strings from "../../i18n/en";
import PoulomiImage from "~/assets/testimonials/poulomi.webp";
import RajaImage from "~/assets/testimonials/raja-bhowmick.webp";
import DeepImage from "~/assets/testimonials/deep-biswas.webp";
import { registerEvent } from "~/analytics";

import * as ga from "~/contants/gaConstants";

const testimonials = [
  {
    name: "Poulomi Chakraborty",
    image: PoulomiImage,
    position: "CEO",
    company: "Custobridge",
    websiteUrl: "https://custobridge.com/",
    testimonial:
      "Be it invoices or payslips, Cheqd provides me a platform to manage my entire small business smartly. It can record payments from my bank statements and reminds me of pending Compliances. Managing the functions of Admin, HR and Accounts is possible using this smart ERP platform.",
  },
  {
    name: "Raja Bhowmick",
    image: RajaImage,
    position: "MD",
    company: "BBC Constructions",
    websiteUrl: "",
    testimonial: `Cheqd helps us in managing GST and other compliances. 
      It also reminds about upcoming receivables. 
      PF and ESI are also big pain for us and eagerly waiting for those to be available on Cheqd.`,
  },
  {
    name: "Deep Biswas",
    image: DeepImage,
    position: "Owner",
    company: "Woodies",
    websiteUrl: "http://www.woodies.co.in",
    testimonial: `We deal in custom-designed premium furniture manufacturing and home interior design. 
    Cheqd is a dependable partner for managing compliances with very little domain knowledge. 
    Additionally, I can manage my employees and keep a track of financial health of my business.`,
  },
];
export default function Testimonials({ className, showSignupModal }: any) {
  return (
    <IMTMediaQueries>
      {(matches) => (
        <Row className={cx(className, styles.TestimonialsWrap)}>
          <Col
            flex={1}
            sm={24}
            md={12}
            lg={12}
            className={styles.TestimonialsCol}
          >
            <Space className={styles.HeadlineSpace} direction="vertical">
              <Typography.Title
                level={matches.xl ? 1 : matches.lg ? 2 : 3}
                className={styles.HeadLineTestimonialsCol}
              >
                {strings.TESTIMONIALS_HEADER}
              </Typography.Title>
              <Button
                type="primary"
                size="large"
                ghost
                style={{ marginTop: 15 }}
                className={`${commonStyles["text-color-processing"]} ${commonStyles["border-color-processing"]}`}
                onClick={() => {
                  showSignupModal();
                  registerEvent(
                    ga.EVENT_CATEGORY_BUTTON_CLICK,
                    ga.EVENT_CLICK,
                    ga.events.testimonial287
                  );
                }}
              >
                {/* {strings.START_FREE_TRIAL} */}
                Sign up
              </Button>
            </Space>
          </Col>

          <Col flex={1} />
          <Col
            flex={1}
            sm={24}
            md={{ span: 12 }}
            lg={12}
            className={styles.TestimonialsColSec}
          >
            <Carousel
              className={styles.CarouselWrap}
              dots={false}
              slidesToShow={1}
              effect="fade"
              pauseOnHover
              autoplay
            >
              {testimonials.map((v) => (
                <div key={Math.random()} className={styles.testimonialCard}>
                  <div className={styles.testimonialCreator}>
                    <div className={styles.testimonialImageContainer}>
                      <img
                        alt="profile"
                        src={v.image}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: 10,
                      }}
                    >
                      <h1 className={styles.testimonialCardHead}>{v.name}</h1>
                      <h2 className={styles.testimonialCardHeadPosition}>
                        {v.position}
                        {", "}
                        {v.websiteUrl ? (
                          <a href={v.websiteUrl}>{v.company}</a>
                        ) : (
                          <span>{v.company}</span>
                        )}
                      </h2>
                    </div>
                  </div>
                  <h1 className={styles.testimonialCardSub}>{v.testimonial}</h1>
                </div>
              ))}
            </Carousel>
          </Col>
          <div style={{ position: "absolute", bottom: -10, right: 20 }}>
            <Illustration2 />
          </div>
        </Row>
      )}
    </IMTMediaQueries>
  );
}
