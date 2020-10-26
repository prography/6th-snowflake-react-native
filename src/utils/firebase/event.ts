import analytics from "@react-native-firebase/analytics";
import crashlytics from "@react-native-firebase/crashlytics";

const logEvent = (s: string, obj?: object) => {
  if (obj) {
    analytics().logEvent(s);
  } else {
    analytics().logEvent(s, obj);
  }
};

const logScreenView = async (screen_name: string) => {
  // console.log("💢", analytics().setCurrentScreen);
  // crashlytics().crash();
  // throw Error();
  // returnl;
  // await analytics().logScreenView({ screen_name });
  // await analytics().logScreenView({ screen_name: screen });
};

export const eventUtil = {
  logEvent,
  logScreenView,

  // Screen
  LabMain: "LabMain",
  SutraInfo: "SutraInfo",
  SutraList: "SutraList",
};
