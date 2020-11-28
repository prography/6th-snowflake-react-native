import { urlUtil } from "../url";
import { verNumsToString } from "../version";
import { RemoteConfigs } from "~/context/CommonContext";

export enum RemoteKey {
  android_update_link = "android_update_link",
  ios_update_link = "ios_update_link",
  android_code_push_version = "android_code_push_version",
  ios_code_push_version = "ios_code_push_version",
  android_force_version = "android_force_version",
  ios_force_version = "ios_force_version",
  feedback_link = "feedback_link",
}

export type MyRemoteConfigs = {
  android_update_link: string;
  ios_update_link: string;
  android_code_push_version: string;
  ios_code_push_version: string;
  android_force_version: string;
  ios_force_version: string;
  feedback_link: string;
};

export const defaultRemoteConfigs: MyRemoteConfigs = {
  android_update_link: urlUtil.store.android,
  ios_update_link: urlUtil.store.ios,
  android_code_push_version: verNumsToString,
  ios_code_push_version: verNumsToString,
  android_force_version: verNumsToString,
  ios_force_version: verNumsToString,
  feedback_link:
    "https://docs.google.com/forms/d/e/1FAIpQLSc7Xar8USMoiSKfV2ucJtlkAw8eZ47MdXSCEk3knbmg1KuyFw/viewform",
};

export const getParsedObjRemoteConfig = (stringified: string): object => JSON.parse(stringified);
export const getRCValue = (remoteConfigs: RemoteConfigs, key: RemoteKey) => {
  // 왜 default가 안먹힐까?
  switch (key) {
    case RemoteKey.android_update_link:
      return remoteConfigs?.android_update_link.asString() || defaultRemoteConfigs.android_update_link;

    case RemoteKey.ios_update_link:
      return remoteConfigs?.ios_update_link?.asString() || defaultRemoteConfigs.ios_update_link;

    case RemoteKey.android_code_push_version:
      return remoteConfigs?.android_code_push_version?.asString() || defaultRemoteConfigs.android_code_push_version;

    case RemoteKey.ios_code_push_version:
      return remoteConfigs?.ios_code_push_version?.asString() || defaultRemoteConfigs.ios_code_push_version;

    case RemoteKey.android_force_version:
      return remoteConfigs?.android_code_push_version?.asString() || defaultRemoteConfigs.android_code_push_version;

    case RemoteKey.ios_force_version:
      return remoteConfigs?.ios_code_push_version?.asString() || defaultRemoteConfigs.ios_code_push_version;
        
    case RemoteKey.feedback_link:
      return remoteConfigs?.feedback_link?.asString() || defaultRemoteConfigs.feedback_link;

    default:
      return '';
  }
};
