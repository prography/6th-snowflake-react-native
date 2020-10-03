import { BASE_URL } from "~/utils/constant";

export const fetchAPI = async ({
  url,
  method = "GET",
  token,
  params,
}: {
  url: string;
  method?: "GET" | "POST" | "PATCH" | "PUT"; // 필요하면 더 추가
  token?: string; // token이 필요없는 api도 있어서
  params?: object;
}): Promise<Response> => {
  const response = await fetch(`${BASE_URL}/${url}`, {
    method,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: params ? JSON.stringify(params) : null,
  });
  return response;
};
