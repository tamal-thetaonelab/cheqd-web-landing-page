import { isFuture } from "date-fns";

export * from "./formats";

export const EMPTY_STRING = "";
export const EMPTY_ARRAY = [];
// tslint:disable-next-line: variable-name
export const __DateAtLoad = new Date();

// tslint:disable-next-line: no-empty
export const noop = () => {};

export const waitFor = (ms: number) => {
  return new Promise((resolve, _reject) => {
    setTimeout(resolve, ms);
  });
};

export const isNotFuture = (date: Date) => !isFuture(date);

export function shallowParseDate<T>(_obj: T): T {
  const obj = _obj as any;
  for (const k in obj) {
    if (k.endsWith("_date") || k.endsWith("_time")) {
      obj[k] = obj[k] ? new Date(obj[k]) : null;
    }
  }
  return _obj;
}

export function filterOption(input?: string, option?: any) {
  if (!input || !option?.children) {
    return false;
  }
  return option?.children.toLowerCase().indexOf(input?.toLowerCase()) >= 0;
}

function _formatNumber(n: number) {
  return n.toLocaleString("en-IN", {
    maximumFractionDigits: 1,
  });
}

export function amountShortView(amount: number) {
  const ab:number = Math.abs(amount) 
  const sign:number = amount < 0 ? -1 : +1
  if (ab < 100) {
    return _formatNumber(sign*ab);
  } else if (ab < 1000) {
    return _formatNumber(sign*ab / 100) + " h";
  } else if (ab < 100000) {
    return _formatNumber(sign*ab / 1000) + " K";
  } else if (ab < 10000000) {
    return _formatNumber(sign*ab / 100000) + " L";
  } else {
    return _formatNumber(sign*ab / 10000000) + " Cr";
  }
}

export const FILE_NAME_TRICK = "<XNAKI435>";

export function getFileNameParts(name: string) {
  const lastDotIdx = name.lastIndexOf(".");
  const base = lastDotIdx === -1 ? name : name.substr(0, lastDotIdx);
  const ext = lastDotIdx === -1 ? "" : name.substr(lastDotIdx + 1);
  return { base, ext };
}
