import { GenderEnum } from "~/utils/interface";

// 공통
export interface RFetchResult<TData> {
  // Redux Fetch Result
  loading: boolean;
  data: TData | undefined;
  error: Error | undefined;
}

// join
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

export interface LoginRes {
  access: string;
}
