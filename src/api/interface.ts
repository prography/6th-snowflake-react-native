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

export interface Pagination {
  count: number;
  next: string; // 페이지에 대한 url
  previous: string; // 페이지에 대한 url
}
export interface ResultsRes<T> extends Pagination {
  results: T[];
}
export interface RequestType {
  refetch: () => void;
}

export interface MsgRes {
  message: string;
}

// home
export interface WelcomeCardContent {
  button_src: string;
  button_txt: string;
  category: string; // NONE |
  col: number;
  description: string;
  design_type: number; // notice: 1 |
  image: string;
  status: string; // PUB |
  tag_txt: [string];
  title: string;
  created_at: string;
  updated_at: string;
}

// product
export interface CondomProductMain {
  // Trio에는 CondomProductMain만 와서 CondomProduct에서 분리함.
  id: number;
  manufacturer_eng: string;
  manufacturer_kor: string;
  name_eng: string;
  name_kor: string;
  thumbnail: string;
  score: number;
}
export interface CondomProductForRank extends CondomProductMain {
  avg_durability: number;
  avg_oily: number;
  avg_thickness: number;
  category: string; // NORMAL |
  num_of_likes: number;
  num_of_reviews: number;
  num_of_views: number;
}
export type CondomProductForSearch = CondomProductForRank;

export interface CondomProduct extends CondomProductForRank {
  description: string;
  image: string;
  ingredients: string;
  length: number;
  thickness: number;
  width: number;
}

// 중복되지만 그냥 나누기 귀찮아서 또 씀
export interface CondomProductForLike extends CondomProductMain {
  // 찜한 제품
  num_of_likes: number;
  num_of_reviews: number;
  num_of_views: number;
}

export interface CondomTrio {
  durability: CondomProductMain[];
  oily: CondomProductMain[];
  thickness: CondomProductMain[];
}

export interface Review {
  content: string;
  created_at: string;
  durability: number;
  gender: GenderEnum;
  id: number;
  num_of_likes: number;
  oily: number;
  partner_gender: GenderEnum;
  product: number;
  thickness: number;
  total: number;
  updated_at: string;
  user: UserInfoMain;
}

// join
export enum Position {
  PURPLE = "PURPLE",
  SKY = "SKY",
  NONE = "NONE",
}
export interface UserInfoMain {
  // Review.user에서 UserInfoMain만 쓰여서 따로 만든거
  birth_year: number;
  email: string;
  id: number;
  image: string;
  username: string;
}
export interface UserInfo extends UserInfoMain {
  color: string;
  date_joined: string;
  gender: GenderEnum;
  icon: string;
  partner_gender: GenderEnum;
  social: string;
  position: Position;
}

export interface LoginRes {
  access: string;
  refresh: string;
}

export interface CondomLiked {
  content_type: number;
  created_at: string;
  id: number;
  object_detail: CondomProductForLike;
  object_id: number; // 필요없는데
  updated_at: string;
  user: number; // 왜 number로 오지? userId로 오는게 맞는거같기도
}

// card
export interface Card {
  id: number;
  name_kor: string;
  name_eng: string;
  thumbnail: string;
  image: string;
  likes_count: number;
  not_yet_count: number;
  is_user_like: boolean;
  description: string;
  comment: {
    username: string;
    content: string;
  } | null;
}

// sutra
export interface Sutra extends Card {
  recommend_data: {
    percentage: number;
    purple_count: number;
    sky_count: number;
  } | null;
}

export interface SutraReviewUser {
  id: number;
  username: string;
  position: string;
  image: string;
}
export interface SutraReview {
  id: number;
  user: SutraReviewUser;
  user_position: string;
  content: string;
  likes_count: number;
  is_user_like: boolean;
  created_at: string;
  updated_at: string;
}

export enum RecommendType {
  RECOMMEND = "RECOMMEND",
  UNRECOMMEND = "UNRECOMMEND",
  NOTYET = "NOTYET",
}
