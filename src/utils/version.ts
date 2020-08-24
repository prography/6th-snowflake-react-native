import { RemoteConfigs } from "~/context/CommonContext";
import { isAndroid } from "./constant";

export const verNums = [1, 3, 0];
export const getVerString = () => `${verNums[0]}.${verNums[1]}.${verNums[2]}`;
export const getCpVerString = (remoteConfigs: RemoteConfigs) => {
  let cpVerString;
  if (isAndroid) {
    cpVerString = remoteConfigs.android_code_push_version.asString();
  } else {
    cpVerString = remoteConfigs.ios_code_push_version.asString();
  }
  return `${cpVerString[1]}.${cpVerString[3]}.${cpVerString[5]}`;
};
