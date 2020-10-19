import Toast from "react-native-simple-toast";

export const toast = (text: string) => {
  Toast.show(text, Toast.SHORT);
};
