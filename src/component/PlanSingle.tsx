import { Button, Card, Col, Typography } from "antd";
import React from "react";
import Currency from "~/component/Currency";
import styles from "~/component/SettingsMembership.module.css";
interface Props {
  plan: any;
  license: any;
  currentPlanClassName?: string;
  currentPlanStatus?: any;
  isPendingActivation?: any;
  myPlan?: any;
  alreadyCancelled?: any;
  activeTerm: any;
  cancelSubscription?: any;
  purchaseMode: boolean;
  handleActivate?: any;
  isPurchaseEnabled: boolean;
}

export const RenderPlanSingle: React.FC<Props> = ({
  plan,
  license: periodBasedPlan,
  currentPlanClassName,
  currentPlanStatus,
  isPendingActivation,
  myPlan,
  alreadyCancelled,
  activeTerm,
  cancelSubscription,
  purchaseMode,
  handleActivate,
  isPurchaseEnabled,
}) => {
  return (
    <Col
      key={plan.id}
      className={styles.cardColumn}
      sm={20}
      md={10}
      lg={8}
    >
      <Card
        title={plan.name}
        className={`${styles.cardColumn}`}
      >
        <div className={styles.cardContent}>{plan.description}</div>

        {!!periodBasedPlan?.discount_rate && (
          <div className={styles.offWrap}>
            <div className={styles.off}>
              {periodBasedPlan?.discount_rate}% off | &nbsp;
            </div>
            <div
              className={styles.oriPrice}
              style={{
                color: "var(--processing-color)",
                textDecoration: "line-through",
              }}
            >
              <Currency
                currencySymbol={"₹"}
                className={styles.currency}
                roundoff
              >
                {periodBasedPlan?.mrp_amount || 0}
              </Currency>
            </div>
          </div>
        )}
        <div className={styles.cost}>
          {" "}
          ₹{periodBasedPlan?.discounted_amount}/
          {activeTerm === "ANNUAL" ? "year" : "month"}
        </div>
        {purchaseMode && plan?.free_trial_days ? (
          <Typography.Text className={styles.freeTrialDays}>
            {plan?.free_trial_days} days free trial included
          </Typography.Text>
        ) : null}
        <div className={styles.btnWrap}>
          <Button
            type="primary"
            className={`${styles.activePlanBtn} ${
              plan.is_active_plan ? currentPlanClassName : ""
            }`}
            onClick={
              handleActivate ? handleActivate(plan, periodBasedPlan) : null
            }
            disabled={isPurchaseEnabled}
          >
            {currentPlanStatus}
          </Button>
        </div>

        <div className={styles.sec}>
          {periodBasedPlan?.features.map((detail: any, idx: number) => {
            return (
              <p key={idx}>
                {detail.is_active ? "✔" : "✖"} &nbsp; {detail.feature}
              </p>
            );
          })}
        </div>
        {plan.is_active_plan && !isPendingActivation && (
          <div className={`${styles.btnWrap} ${styles.cancelwrap}`}>
            {alreadyCancelled ? (
              <i className={styles.cancelBtn}>Plan already cancelled.</i>
            ) : (
              cancelSubscription && (
                <Button
                  type="link"
                  className={styles.cancelBtn}
                  onClick={() => cancelSubscription(myPlan.subscription_id)}
                >
                  Cancel
                </Button>
              )
            )}
          </div>
        )}
      </Card>
    </Col>
  );
};
