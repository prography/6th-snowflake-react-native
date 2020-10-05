import { llog } from "~/utils/functions";
import { LoginRes } from "~/api/interface";
import { fetchAPI } from "~/api";

export const login = async (
  email: string,
  password: string
): Promise<LoginRes> => {
  llog("😸9. loginAPI called", email, password);
  const { status, response } = await fetchAPI("api/token/", {
    method: "POST",
    params: {
      email,
      password,
    },
  });

  llog("✔️ response", response);

  if (status !== 200) {
    throw Error("로그인을 처리하는 중 오류가 발생했어요.");
  }

  const json: LoginRes = await response.json();
  llog("😸9-1. loginAPI response json", response, json);

  if (json.access === null) {
    throw Error("정보가 올바르지 않습니다. 다시 입력해주세요.");
  }
  return json;
};
