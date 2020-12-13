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
  Join1_Email_Password: "Join1_Email_Password",
  Join2_Nickname_Birthyear: "Join2_Nickname_Birthyear",
  Join3_UerGender: "Join3_UerGender",
  Join4_Our_Statement: "Join4_Our_Statement",
  JoinScreen: "JoinScreen",
  Login: "Login",
  ProductInfo: "ProductInfo",
  ProductMain: "ProductMain",
  Ranking: "Ranking",
  ReviewUpload1_Triple: "ReviewUpload1_Triple",
  ReviewUpload2_Recommend_Gener: "ReviewUpload2_Recommend_Gener",
  ReviewUpload3_Write_Review: "ReviewUpload3_Write_Review",
  SearchProduct: "SearchProduct",
  Feedback: "Feedback",
  SettingMain: "SettingMain",

  // Nav Bar
  press_tab_HomeStack: "press_tab_HomeStack",
  press_tab_ProductStack: "press_tab_ProductStack",
  press_tab_LabStack: "press_tab_LabStack",
  press_tab_ClinicStack: "press_tab_ClinicStack",
  press_tab_JoinStack: "press_tab_JoinStack",
  press_tab_FeedbackStack: "press_tab_FeedbackStack",

  // Trio Box
  press_go_to_ranking: "press_go_to_ranking", // { from: title }

  // Blind
  blinder_to_hidden: "blinder_to_hidden",
  blinder_to_show: "blinder_to_show",

  // ProductInfo Bar
  press_delete_like: "press_delete_like", // (deprecated) { productId }
  press_like: "press_like", // (deprecated) { productId }
  press_review_upload: "press_review_upload", // (deprecated) { productId }

  // Ranking Bar
  press_product: "press_product", // { productId }

  // ButtonLinkPurpleLarge
  press_btn_in_home: "press_btn_in_home", // { link }

  // ProductInfoReviewFilter
  press_show_gender_partner_filter: "press_show_gender_partner_filter", // { to }
  press_write_gender_select: "press_write_gender_select", // { to }
  press_partner_gender_select: "press_partner_gender_select", // { to }

  // ReviewUploadScore
  set_score_to_custom_average: "set_score_to_custom_average",
  set_score_to_trio_average: "set_score_to_trio_average",

  // ProductRankingContainer
  press_category_in_ranking: "press_category_in_ranking", // { category }
  press_show_order_filter: "press_show_order_filter", // { to }
  press_order_in_ranking: "press_order_in_ranking", // { order }

  // JoinScreen
  press_kakao_login_btn: "press_kakao_login_btn",
  press_apple_login_btn: "press_apple_login_btn",
};

eventUtil.logEvent(eventUtil.press_delete_like);
