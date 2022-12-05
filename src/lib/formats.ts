import _parseDate from "date-fns/parse";
import { format } from "date-fns";

export const FORMAT_DATE = "dd/MM/y";

export const formatDate = (date: Date) => {
  return format(date, "dd/MM/yyyy");
};

export const parseDate = (dateStr: string, format: string) => {
  return _parseDate(dateStr, format, new Date());
};

export const formatCurrencyAlt = (amt: number) => {
  return "₹" + formatNumberAlt(amt);
};

function _formatNumberAlt(n: number): string {
  if (n > 1_00_00_000)
    return (
      _formatNumberAlt(Math.floor(n / 1_00_00_000)) +
      "," +
      _formatNumberAlt(n % 1_00_00_000)
    );
  if (n >= 1_00_00_000)
    return (
      _formatNumberAlt(Math.floor(n / 1_00_00_000)) +
      "," +
      _formatNumberAlt(n % 1_00_00_000)
    );
  if (n >= 1_00_000)
    return (
      _formatNumberAlt(Math.floor(n / 1_00_000)) +
      "," +
      _formatNumberAlt(n % 1_00_000)
    );
  if (n >= 1_000)
    return _formatNumberAlt(Math.floor(n / 1_000)) + "," + (n % 1_000);
  return n + "";
}

export const formatNumberAlt = (n: number) => _formatNumberAlt(n);

const __indianRupee = "₹";
const __minusSg = "-";
/**
 * The original format function
 * @param amount a number
 */
export function getCommaSeparatedNoCurr(amount: number) {
  if (amount) {
    if (amount === 0) {
      const nm = "0.00";
      return nm;
    }
    let a = amount.toFixed(2).toString();
    if (a.includes("-") === true) {
      a = a.slice(1);
      return a.toString().split(".")[0].length > 3
        ? `${__minusSg} ${a
            .toString()
            .substring(0, a.toString().split(".")[0].length - 3)
            .replace(/\B(?=(\d{2})+(?!\d))/g, ",")},${a
            .toString()
            .substring(a.toString().split(".")[0].length - 3)}`
        : __minusSg + " " + a.toString();
    }

    return a.toString().split(".")[0].length > 3
      ? `${a
          .toString()
          .substring(0, a.toString().split(".")[0].length - 3)
          .replace(/\B(?=(\d{2})+(?!\d))/g, ",")},${a
          .toString()
          .substring(a.toString().split(".")[0].length - 3)}`
      : a.toString();
  }
  return null;
}

export function getCommaSeparatedDash(amount: number) {
  if (amount) {
    if (amount === 0) {
      const nm = "0";
      return nm;
    }
    let a = amount.toString();
    if (a.includes("-") === true) {
      a = a.slice(1);
      return a.toString().split(".")[0].length > 3
        ? `${__minusSg} ${a
            .toString()
            .substring(0, a.toString().split(".")[0].length - 3)
            .replace(/\B(?=(\d{2})+(?!\d))/g, ",")},${a
            .toString()
            .substring(a.toString().split(".")[0].length - 3)}`
        : __minusSg + " " + a.toString();
    }

    return a.toString().split(".")[0].length > 3
      ? `${a
          .toString()
          .substring(0, a.toString().split(".")[0].length - 3)
          .replace(/\B(?=(\d{2})+(?!\d))/g, ",")},${a
          .toString()
          .substring(a.toString().split(".")[0].length - 3)}`
      : a.toString();
  }
  return null;
}

/**
 * The original currency format function
 * @param amount currency as number
 */
export function getCommaSeparated(amount: number) {
  if (amount === 0) {
    const nm = __indianRupee + " 0.00";
    return nm;
  } else {
    let a = amount.toFixed(2).toString();
    if (a.includes("-") === true) {
      a = a.slice(1);
      return a.toString().split(".")[0].length > 3
        ? `${__minusSg} ${__indianRupee} ${a
            .toString()
            .substring(0, a.toString().split(".")[0].length - 3)
            .replace(/\B(?=(\d{2})+(?!\d))/g, ",")},${a
            .toString()
            .substring(a.toString().split(".")[0].length - 3)}`
        : __minusSg + " " + __indianRupee + " " + a.toString();
    }
    return a.toString().split(".")[0].length > 3
      ? `${__indianRupee} ${a
          .toString()
          .substring(0, a.toString().split(".")[0].length - 3)
          .replace(/\B(?=(\d{2})+(?!\d))/g, ",")},${a
          .toString()
          .substring(a.toString().split(".")[0].length - 3)}`
      : __indianRupee + " " + a.toString();
  }
  return null;
}

export const formatNumber = (n: number, roundoff?: boolean) => {
  if (n < 0 && n > -0.009) {
    n = Math.abs(n);
  }
  return n.toLocaleString("en-IN", {
    minimumFractionDigits: roundoff ? 0 : 2,
    maximumFractionDigits: roundoff ? 0 : 2,
  });
};

export const parseNumber = (str: string | number) => {
  if (typeof str === "number") {
    return str;
  }
  if (!str) {
    return 0;
  }
  const match = /[0-9.,-]+/.exec(str);
  if (!match) {
    return 0;
  } else {
    const numStr = match[0].replace(/[,]/g, "");
    return Number(numStr);
  }
};

// export const INVALID_INPUT = Symbol("INVALID_INPUT");
// export type TYPE_INVALID_INPUT = typeof INVALID_INPUT;

export const parseInputNumber = (
  input: string,
  oldValue: string | number
): number | string => {
  const VALID_INPUT = /^[0-9.]+$/;
  if (!input) {
    return 0;
  }
  if (!VALID_INPUT.test(input)) {
    return oldValue;
  }
  if ((input.match(/\./g)?.length || 0) > 1) {
    return oldValue;
  }
  if (input.endsWith(".") || (input.includes(".") && input.endsWith("0"))) {
    return input;
  } else {
    return roundNumber(+input);
  }
};

export const roundNumber = (num: number): number => {
  return +num?.toFixed(2) ?? "0.00";
};
