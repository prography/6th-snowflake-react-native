export interface RFetchResult<TData> {
  // Redux Fetch Result
  loading: boolean;
  data: TData;
  error: Error;
}

export interface KakaoLoginResponse {
  accessToken: string; // "rtWGVfW7Luqo7Je1Uk4SEzHi2q4-kwBv6XFMUgopyV4AAAFyKUMtlQ"
  accessTokenExpiresAt: string; // "2020-05-19T16:29:26"
  refreshToken: string;
  refreshTokenExpiresAt: string; // "2020-07-18T04:29:26"
}

export enum GenderEnum {
  NONE = "NONE",
  man = "MAN",
  woman = "WOMAN",
}
export interface UserInfoRes {
  id: number;
  birth_year: number;
  color: string;
  date_joined: string;
  email: string;
  gender: GenderEnum;
  icon: string;
  image: string;
  partner_gender: GenderEnum;
  social: string;
  username: string;
}
