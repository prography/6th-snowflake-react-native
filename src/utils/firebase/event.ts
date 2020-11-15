import analytics from "@react-native-firebase/analytics";

const logEvent = (s: string, obj?: object) => {
  if (obj) {
    analytics().logEvent(s);
  } else {
    analytics().logEvent(s, obj);
  }
};

const logScreenView = (screenName: string) => {
  analytics().setCurrentScreen(screenName);
};

export const eventUtil = {
  logEvent,
  logScreenView,

  // Screen
  LabMain: "LabMain",
  SutraInfo: "SutraInfo",
  SutraList: "SutraList",
  SutraQuestion: "SutraQuestion",
};
