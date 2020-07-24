import { RemoteConfigs } from '~/context/CommonContext';

export const verNums = [1, 2, 3];
export const getVerString = () => `${verNums[0]}.${verNums[1]}.${verNums[2]}`;
export const getCpVerString = (remoteConfigs: RemoteConfigs) => {
  const cpVerString = remoteConfigs.code_push_version.asString();
  return `${cpVerString[1]}.${cpVerString[3]}.${cpVerString[5]}`;
};
