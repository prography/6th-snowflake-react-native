import { BASE_URL } from "~/utils/constant";
import { getTokenItem } from "~/utils/asyncStorage";
import { llog2 } from "~/utils/functions";
import { UserInfoRes } from "~/api/interface";

export const getUserInfo = async (): Promise<UserInfoRes> => {
  // try catch 하지 않음. saga에서 해주므로
  const token = await getTokenItem();
  if (!token) {
    throw Error("client - no token");
  }

  const response = await fetch(`${BASE_URL}/accounts/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const json: UserInfoRes = await response.json();
  llog2("2.🐹User info 불러옴 - 성공!", json);
  return json;
};
