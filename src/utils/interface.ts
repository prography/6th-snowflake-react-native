export interface ApiAction {
  REQUEST: string;
  SUCCESS: string;
  ERROR: string;
}

export interface KakaoLoginResponse {
  accessToken: string; // "rtWGVfW7Luqo7Je1Uk4SEzHi2q4-kwBv6XFMUgopyV4AAAFyKUMtlQ"
  accessTokenExpiresAt: string; // "2020-05-19T16:29:26"
  refreshToken: string;
  refreshTokenExpiresAt: string; // "2020-07-18T04:29:26"
}

export interface ReviewInfo1 {
  productId: number;
  thicknessScore: number;
  durabilityScore: number;
  oilyScore: number;
}

export interface ReviewInfo2_average {
  productId: number;
  average: number;
}

export interface ReviewInfo2_score {
  productId: number;
  score: number;
}

export interface ReviewInfo2_myGender {
  productId: number;
  myGender: string;
}

export interface ReviewInfo2_partnerGender {
  productId: number;
  partnerGender: string;
}

export interface ReviewInfo3 {
  productId: number;
  reviewContent: string;
}

export enum GenderEnum {
  NONE = "NONE",
  man = "MAN",
  woman = "WOMAN",
}
