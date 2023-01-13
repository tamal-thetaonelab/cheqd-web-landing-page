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
        <Row className={cx(className, styles.blockWrapTestimonials)}>
          {/* <Col
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
                Sign up
              </Button>
            </Space>
          </Col>

          <Col flex={1} /> */}
          <Col sm={24}>
            <div className={styles.HeadLineFeaturesBlock}>Testimonials</div>
            <Carousel
              className={styles.TestimonialCarouselWrap}
              dots={false}
              slidesToShow={1}
              effect="scrollx"
              pauseOnHover
              autoplay={true}
            >
              {testimonials.map((v) => (
                <div
                  key={Math.random()}
                >
                  <div className={styles.testimonialCard}>
                    {matches.md && (
                      <div className={styles.testimonialCardLeft}>
                        <img
                          alt="profile"
                          src={v.image}
                          className={styles.testimonialImage}
                        />
                      </div>
                    )}
                    <div className={styles.testimonialCardRight}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "10px",
                          paddingBottom: "0px",
                        }}
                      >
                        {!matches.md && (
                          <img
                            alt="profile"
                            src={v.image}
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                            }}
                          />
                        )}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: 10,
                            flex: 4,
                          }}
                        >
                          <h1 className={styles.testimonialCardName}>
                            {v.name}
                          </h1>
                          <h2 className={styles.testimonialCardPosition}>
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
                      <div className={styles.testimonialCardBody}>
                        {v.testimonial}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </Col>
          {/* <div style={{ position: "absolute", bottom: -10, right: 20 }}>
            <Illustration2 />
          </div> */}
        </Row>
      )}
    </IMTMediaQueries>
  );
}
