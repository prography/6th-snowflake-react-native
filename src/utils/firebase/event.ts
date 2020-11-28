import analytics from "@react-native-firebase/analytics";

const logEvent = async (s: string, obj?: object) => {
  if (obj) {
    await analytics().logEvent(s);
  } else {
    await analytics().logEvent(s, obj);
  }
};

const logScreenView = async (screen_name: string) => {
  await analytics().logScreenView({ screen_name });
};

export const eventUtil = {
  logEvent,
  logScreenView,

  // Screen
  HomeMain: "HomeMain",
  LabMain: "LabMain",
  SutraInfo: "SutraInfo",
  SutraList: "SutraList",
  SutraQuestion: "SutraQuestion",
  Select_GenderColor: "Select_GenderColor",

  // Nav Bar
  press_tab_HomeStack: "press_tab_HomeStack",
  press_tab_ProductStack: "press_tab_ProductStack",
  press_tab_LabStack: "press_tab_LabStack",
  press_tab_ClinicStack: "press_tab_ClinicStack",
  press_tab_JoinStack: "press_tab_JoinStack",
  press_tab_FeedbackStack: "press_tab_FeedbackStack",
};
