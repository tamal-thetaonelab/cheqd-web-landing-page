/* import GA from "react-ga4"; */

const TRACKING_ID = process.env.REACT_APP_TRACKING_ID as string;

const init = (userId?: string) => {
  /* if (GA.isInitialized) {
    GA.set({ userId });
  } else {
    // const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
    GA.initialize(TRACKING_ID, {
      testMode: false,
      gaOptions: { userId },
    });
  } */
};

const registerEvent = (
  category: string,
  action: string,
  label: string,
  customParameters = {}
  // value: number = 0
) => {
  /* GA.event({
    category,
    action,
    // value: value,
    label,
    event_label: label,
    page_title: document.title,
    page_view: document.title,
    ...customParameters,
  } as any); */
};

const registerPageView = (path: string) => {
 /*  GA.set({ page: path });
  GA.send("pageview"); */
};

export default {
  init,
  registerPageView,
};

export { registerEvent };
