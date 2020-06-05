// blindState 타입 설정
export interface State {
  thicknessScore: number;
  durabilityScore: number;
  oilyScore: number;
  trioAverage: number;
  score: number;
  myGender: string;
  partnerGender: string;
  reviewContent: string;
  isFilledReviewUpload1: boolean;
  isFilledReviewUpload2: boolean;
  isFilledReviewUpload3: boolean;
  reviewUploadProductId: number;
}

export const reviewUploadContentPlaceholder =
  '눈송이는 차별과 혐오를 지양하고\n서로를 존중하는 깨끗한 공간입니다.\n\n자극적인 어투 대신\n누구나 편하게 볼 수 있는\n진솔한 후기를 부탁드립니다.\n\n눈송이 문화에 동참해주세요* :)';
// blindState의 초기값 설정
const initialState: State = {
  thicknessScore: null,
  durabilityScore: null,
  oilyScore: null,
  trioAverage: null,
  score: null,
  myGender: null,
  partnerGender: null,
  reviewContent: null,
  isFilledReviewUpload1: false,
  isFilledReviewUpload2: false,
  isFilledReviewUpload3: false,
  reviewUploadProductId: null,
};

const SET_THICKNESS_SCORE = 'SET_THICKNESS_SCORE';
const SET_DURABILITY_SCORE = 'SET_DURABILITY_SCORE';
const SET_OILY_SCORE = 'SET_OILY_SCORE';
const SET_TRIO_AVERAGE = 'SET_TRIO_AVERAGE';
const SET_SCORE = 'SET_SCORE';
const SET_MY_GENDER = 'SET_MY_GENDER';
const SET_PARTNER_GENDER = 'SET_PARTNER_GENDER';
const SET_REVIEW_CONTENT = 'SET_REVIEW_CONTENT';
const SET_IS_FILLED_REVIEW_UPLOAD1 = 'SET_IS_FILLED_REVIEW_UPLOAD1';
const SET_IS_FILLED_REVIEW_UPLOAD2 = 'SET_IS_FILLED_REVIEW_UPLOAD2';
const SET_IS_FILLED_REVIEW_UPLOAD3 = 'SET_IS_FILLED_REVIEW_UPLOAD3';
const SET_REVIEW_UPLOAD_PRODUCT_ID = 'SET_REVIEW_UPLOAD_PRODUCT_ID';

export const setThicknessScore = (thicknessScore: State) => {
  return {
    type: SET_THICKNESS_SCORE,
    thicknessScore: thicknessScore,
  };
};

export const setDurabilityScore = (durabilityScore: State) => {
  return {
    type: SET_DURABILITY_SCORE,
    durabilityScore,
  };
};

export const setOilyScore = (oilyScore: State) => {
  return {
    type: SET_OILY_SCORE,
    oilyScore,
  };
};
export const setTrioAverage = (trioAverage: State) => {
  return {
    type: SET_TRIO_AVERAGE,
    trioAverage,
  };
};

export const setScore = (score: State) => {
  return {
    type: SET_SCORE,
    score,
  };
};

export const setMyGender = (myGender: State) => {
  return {
    type: SET_MY_GENDER,
    myGender,
  };
};
export const setPartnerGender = (partnerGender: State) => {
  return {
    type: SET_PARTNER_GENDER,
    partnerGender,
  };
};
export const setReviewContent = (reviewContent: State) => {
  return {
    type: SET_REVIEW_CONTENT,
    reviewContent,
  };
};
export const setIsFilledReviewUpload1 = (isFilledReviewUpload1: State) => {
  return {
    type: SET_IS_FILLED_REVIEW_UPLOAD1,
    isFilledReviewUpload1,
  };
};
export const setIsFilledReviewUpload2 = (isFilledReviewUpload2: State) => {
  return {
    type: SET_IS_FILLED_REVIEW_UPLOAD2,
    isFilledReviewUpload2,
  };
};
export const setIsFilledReviewUpload3 = (isFilledReviewUpload3: State) => {
  return {
    type: SET_IS_FILLED_REVIEW_UPLOAD3,
    isFilledReviewUpload3,
  };
};

export const setReviewUProductId = (reviewUploadProductId: State) => {
  return {
    type: SET_REVIEW_UPLOAD_PRODUCT_ID,
    reviewUploadProductId,
  };
};
const reviewUploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THICKNESS_SCORE:
      return { ...state, thicknessScore: action.thicknessScore };
    case SET_DURABILITY_SCORE:
      return { ...state, durabilityScore: action.durabilityScore };
    case SET_OILY_SCORE:
      return { ...state, oilyScore: action.oilyScore };
    case SET_TRIO_AVERAGE:
      return { ...state, trioAverage: action.trioAverage };

    case SET_SCORE:
      return { ...state, score: action.score };
    case SET_MY_GENDER:
      return { ...state, myGender: action.myGender };
    case SET_PARTNER_GENDER:
      return { ...state, partnerGender: action.partnerGender };
    case SET_REVIEW_CONTENT:
      return { ...state, reviewContent: action.reviewContent };
    case SET_IS_FILLED_REVIEW_UPLOAD1:
      return { ...state, isFilledReviewUpload1: action.isFilledReviewUpload1 };
    case SET_IS_FILLED_REVIEW_UPLOAD2:
      return { ...state, isFilledReviewUpload2: action.isFilledReviewUpload2 };
    case SET_IS_FILLED_REVIEW_UPLOAD3:
      return { ...state, isFilledReviewUpload3: action.isFilledReviewUpload3 };
    case SET_REVIEW_UPLOAD_PRODUCT_ID:
      return { ...state, reviewUploadProductId: action.reviewUploadProductId };
    default:
      return state;
  }
};

export default reviewUploadReducer;
