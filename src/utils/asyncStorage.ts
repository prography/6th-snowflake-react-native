import AsyncStorage from "@react-native-community/async-storage";

export const AsyncAccessToken = "AsyncAccessToken";
export const WomanColor = "WomanColor";
export const ManColor = "ManColor";

export const getTokenItem = async () => {
  const tokenFS = await AsyncStorage.getItem(AsyncAccessToken);
  return tokenFS;
};
