import { Alert } from "react-native";

const needLogin = (onPress: () => void, completeText = "확인") => {
  Alert.alert("❄️", "로그인 후 이용해주세요 :)", [
    { text: "취소", style: "cancel" },
    { text: completeText, onPress },
  ]);
};

export const alertUtil = {
  needLogin,
};
