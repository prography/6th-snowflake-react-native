import AsyncStorage from "@react-native-community/async-storage";
import { llog } from "./functions";

export const AsyncAccessToken = "AsyncAccessToken";
export const WomanColor = "WomanColor";
export const ManColor = "ManColor";
const refreshToken = "refreshToken";

export const getTokenItem = async () => {
  const tokenFS = await AsyncStorage.getItem(AsyncAccessToken);
  const refresh = await AsyncStorage.getItem(asyncUtil.refreshToken);
  llog("🥕 tokenFS", tokenFS);
  llog("🥕 refresh", refresh);
  return tokenFS;
};

export const getRefreshTokenItem = async () => {
  const tokenFS = await AsyncStorage.getItem(refreshToken);
  llog("🥕 refresh tokenFS", tokenFS);
  return tokenFS;
};

const asyncUtil = {
  refreshToken,
  getTokenItem,
  getRefreshTokenItem,
};
export default asyncUtil;
