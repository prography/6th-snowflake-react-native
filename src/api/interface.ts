import { GenderEnum } from "~/utils/interface";

export interface ApiResponse {
  status: number;
  response: Response;
}

// 공통
export interface RFetchResult<TData> {
  // Redux Fetch Result
  loading: boolean;
  data: TData | undefined;
  error: Error | undefined;
}

// home
export interface WelcomeCardContent {
  button_src: string;
  button_txt: string;
  category: string; // NONE |
  col: number;
  description: string;
  design_type: string; // notice |
  image: string;
  status: string; // PUB |
  tag_txt: string;
  title: string;
  created_at: string;
  updated_at: string;
}

export interface WelcomeCards {
  count: number;
  next: string; // 페이지에 대한 url
  previous: string; // 페이지에 대한 url
  results: WelcomeCardContent[];
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
