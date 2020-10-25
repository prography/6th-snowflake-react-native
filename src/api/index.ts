import { BASE_URL } from "~/utils/constant";
import { ApiResponse } from "~/api/interface";

interface Option {
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE"; // 필요하면 더 추가
  token?: string; // token이 필요없는 api도 있어서
  params?: object;
}


export const fetchAPI = async (
  url: string,
  option?: Option,
): Promise<ApiResponse> => {
  const method = option?.method || 'GET';
  const token = option?.token;
  const params = option?.params;

  const response = await fetch(`${BASE_URL}/${url}`, {
    method,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: params ? JSON.stringify(params) : null,
  });
  const { status } = response;
  return { status, response };
};
