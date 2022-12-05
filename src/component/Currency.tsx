import React, { ReactElement } from "react";
import cx from "classnames";
import { formatNumber } from "~/lib";
import styles from "./Currency.module.css";
interface Props extends React.HTMLProps<HTMLSpanElement> {
  value?: number;
  fallback?: string;
  currencySymbol?: string;
  children?: number | null | undefined | string;
  roundoff?: boolean;
}
function Currency({
  value,
  currencySymbol,
  children,
  className,
  fallback,
  roundoff,
  ...spanProps
}: Props): ReactElement {
  const fallbackStr = fallback || (roundoff ? "0" : "0.00");
  const c = value === undefined ? (children ? +children : undefined) : value;
  const sym = currencySymbol || "₹";
  return (
    <span
      className={cx(styles.currency, className)}
      data-symbol={sym}
      {...spanProps}
    >
      {c !== undefined && Number.isFinite(c)
        ? formatNumber(c, roundoff || false)
        : fallbackStr}
    </span>
  );
}
export default Currency;
