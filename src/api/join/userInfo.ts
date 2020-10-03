import { getTokenItem } from "~/utils/asyncStorage";
import { llog } from "~/utils/functions";
import { UserInfoRes } from "~/api/interface";
import { fetchAPI } from "~/api";

export const getUserInfo = async (): Promise<UserInfoRes> => {
  // try catch 하지 않음. saga에서 해주므로
  const token = await getTokenItem();
  if (!token) {
    throw Error("client - no token");
  }

  const response = await fetchAPI({
    url: "accounts/",
    token,
  });

  const json: UserInfoRes = await response.json();
  llog("2.🐹User info 불러옴 - 성공!", json);
  return json;
};
