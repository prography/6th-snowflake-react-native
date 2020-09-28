import {
  ReviewInfo1,
  ReviewInfo2_average,
  ReviewInfo2_score,
  ReviewInfo2_myGender,
  ReviewInfo2_partnerGender,
  ReviewInfo3,
} from "~/utils/interface";

const initialReviewInfo1: ReviewInfo1 = {
  productId: null,
  thicknessScore: 0,
  durabilityScore: 0,
  oilyScore: 0,
};
const initialReviewInfo2_average: ReviewInfo2_average = {
  productId: null,
  average: 0,
};
const initialReviewInfo2_score: ReviewInfo2_score = {
  productId: null,
  score: 0,
};
const initialReviewInfo2_myGender: ReviewInfo2_myGender = {
  productId: null,
  myGender: null,
};
const initialReviewInfo2_partnerGender: ReviewInfo2_partnerGender = {
  productId: null,
  partnerGender: null,
};
const initialReviewInfo3: ReviewInfo3 = {
  productId: null,
  reviewContent: "",
};
export const InitalReviewInfo = {
  _1: initialReviewInfo1,
  _2_average: initialReviewInfo2_average,
  _2_score: initialReviewInfo2_score,
  _2_myGender: initialReviewInfo2_myGender,
  _2_partnerGender: initialReviewInfo2_partnerGender,
  _3: initialReviewInfo3,
};

export type ReviewUploadState = {
  reviewInfo1: ReviewInfo1[];
  reviewInfo2_average: ReviewInfo2_average[];
  reviewInfo2_score: ReviewInfo2_score[];
  reviewInfo2_myGender: ReviewInfo2_myGender[];
  reviewInfo2_partnerGender: ReviewInfo2_partnerGender[];
  reviewInfo3: ReviewInfo3[];
  isFilledReviewUpload1: boolean;
  isFilledReviewUpload2: boolean;
  isFilledReviewUpload3: boolean;
};

export const reviewUploadContentPlaceholder =
  "눈송이는 차별과 혐오를 지양하고\n서로를 존중하는 깨끗한 공간입니다.\n\n자극적인 어투 대신\n누구나 편하게 볼 수 있는\n진솔한 후기를 부탁드립니다.\n\n눈송이 문화에 동참해주세요* :)";

const initialState: ReviewUploadState = {
  reviewInfo1: [],
  reviewInfo2_average: [],
  reviewInfo2_score: [],
  reviewInfo2_myGender: [],
  reviewInfo2_partnerGender: [],
  reviewInfo3: [],
  isFilledReviewUpload1: false,
  isFilledReviewUpload2: false,
  isFilledReviewUpload3: false,
};

const SET_REVIEW_INFO1 = "SET_REVIEW_INFO1";
const SET_REVIEW_INFO2_AVERAGE = "SET_REVIEW_INFO2_AVERAGE";
const SET_REVIEW_INFO2_SCORE = "SET_REVIEW_INFO2_SCORE";
const SET_REVIEW_INFO2_MYGENDER = "SET_REVIEW_INFO2_MYGENDER";
const SET_REVIEW_INFO2_PARTNERGENDER = "SET_REVIEW_INFO2_PARTNERGENDER";
const SET_REVIEW_INFO3 = "SET_REVIEW_INFO3";
const SET_IS_FILLED_REVIEW_UPLOAD1 = "SET_IS_FILLED_REVIEW_UPLOAD1";
const SET_IS_FILLED_REVIEW_UPLOAD2 = "SET_IS_FILLED_REVIEW_UPLOAD2";
const SET_IS_FILLED_REVIEW_UPLOAD3 = "SET_IS_FILLED_REVIEW_UPLOAD3";
const RESET_REVIEW_UPLOAD_STORE = "RESET_REVIEW_UPLOAD_STORE";

export const setReviewInfo1 = (reviewInfo1: ReviewInfo1) => {
  return {
    type: SET_REVIEW_INFO1,
    reviewInfo1,
  };
};

export const setReviewInfo2_average = (
  reviewInfo2_average: ReviewInfo2_average
) => {
  return {
    type: SET_REVIEW_INFO2_AVERAGE,
    reviewInfo2_average,
  };
};

export const setReviewInfo2_score = (reviewInfo2_score: ReviewInfo2_score) => {
  return {
    type: SET_REVIEW_INFO2_SCORE,
    reviewInfo2_score,
  };
};

export const setReviewInfo2_myGender = (
  reviewInfo2_myGender: ReviewInfo2_myGender
) => {
  return {
    type: SET_REVIEW_INFO2_MYGENDER,
    reviewInfo2_myGender,
  };
};

export const setReviewInfo2_partnerGender = (
  reviewInfo2_partnerGender: ReviewInfo2_partnerGender
) => {
  return {
    type: SET_REVIEW_INFO2_PARTNERGENDER,
    reviewInfo2_partnerGender,
  };
};

export const setReviewInfo3 = (reviewInfo3: ReviewInfo3) => {
  return {
    type: SET_REVIEW_INFO3,
    reviewInfo3,
  };
};

export const setIsFilledReviewUpload1 = (isFilledReviewUpload1: boolean) => {
  return {
    type: SET_IS_FILLED_REVIEW_UPLOAD1,
    isFilledReviewUpload1,
  };
};
export const setIsFilledReviewUpload2 = (isFilledReviewUpload2: boolean) => {
  return {
    type: SET_IS_FILLED_REVIEW_UPLOAD2,
    isFilledReviewUpload2,
  };
};
export const setIsFilledReviewUpload3 = (isFilledReviewUpload3: boolean) => {
  return {
    type: SET_IS_FILLED_REVIEW_UPLOAD3,
    isFilledReviewUpload3,
  };
};

export const resetReviewUploadStore = () => {
  return {
    type: RESET_REVIEW_UPLOAD_STORE,
  };
};

const ReviewUploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REVIEW_INFO1:
      const obj1 = state.reviewInfo1.find(
        (item) => item.productId === action.reviewInfo1.productId
      );
      if (obj1) {
        return {
          ...state,
          reviewInfo1: [
            ...state.reviewInfo1.filter(
              (item) => item.productId !== action.reviewInfo1.productId
            ),
            action.reviewInfo1,
          ],
        };
      } else {
        return {
          ...state,
          reviewInfo1: [...state.reviewInfo1, action.reviewInfo1],
        };
      }

    case SET_REVIEW_INFO2_AVERAGE:
      const obj2 = state.reviewInfo2_average.find(
        (item) => item.productId === action.reviewInfo2_average.productId
      );
      if (obj2) {
        return {
          ...state,
          reviewInfo2_average: [
            ...state.reviewInfo2_average.filter(
              (item) => item.productId !== action.reviewInfo2_average.productId
            ),
            action.reviewInfo2_average,
          ],
        };
      } else {
        return {
          ...state,
          reviewInfo2_average: [
            ...state.reviewInfo2_average,
            action.reviewInfo2_average,
          ],
        };
      }

    case SET_REVIEW_INFO2_SCORE:
      const obj3 = state.reviewInfo2_score.find(
        (item) => item.productId === action.reviewInfo2_score.productId
      );
      if (obj3) {
        return {
          ...state,
          reviewInfo2_score: [
            ...state.reviewInfo2_score.filter(
              (item) => item.productId !== action.reviewInfo2_score.productId
            ),
            action.reviewInfo2_score,
          ],
        };
      } else {
        return {
          ...state,
          reviewInfo2_score: [
            ...state.reviewInfo2_score,
            action.reviewInfo2_score,
          ],
        };
      }

    case SET_REVIEW_INFO2_MYGENDER:
      const obj4 = state.reviewInfo2_myGender.find(
        (item) => item.productId === action.reviewInfo2_myGender.productId
      );
      if (obj4) {
        return {
          ...state,
          reviewInfo2_myGender: [
            ...state.reviewInfo2_myGender.filter(
              (item) => item.productId !== action.reviewInfo2_myGender.productId
            ),
            action.reviewInfo2_myGender,
          ],
        };
      } else {
        return {
          ...state,
          reviewInfo2_myGender: [
            ...state.reviewInfo2_myGender,
            action.reviewInfo2_myGender,
          ],
        };
      }
    case SET_REVIEW_INFO2_PARTNERGENDER:
      const obj5 = state.reviewInfo2_partnerGender.find(
        (item) => item.productId === action.reviewInfo2_partnerGender.productId
      );
      if (obj5) {
        return {
          ...state,
          reviewInfo2_partnerGender: [
            ...state.reviewInfo2_partnerGender.filter(
              (item) =>
                item.productId !== action.reviewInfo2_partnerGender.productId
            ),
            action.reviewInfo2_partnerGender,
          ],
        };
      } else {
        return {
          ...state,
          reviewInfo2_partnerGender: [
            ...state.reviewInfo2_partnerGender,
            action.reviewInfo2_partnerGender,
          ],
        };
      }

    case SET_REVIEW_INFO3:
      const obj6 = state.reviewInfo3.find(
        (item) => item.productId === action.reviewInfo3.productId
      );
      if (obj6) {
        return {
          ...state,
          reviewInfo3: [
            ...state.reviewInfo3.filter(
              (item) => item.productId !== action.reviewInfo3.productId
            ),
            action.reviewInfo3,
          ],
        };
      } else {
        return {
          ...state,
          reviewInfo3: [...state.reviewInfo3, action.reviewInfo3],
        };
      }

    case SET_IS_FILLED_REVIEW_UPLOAD1:
      return { ...state, isFilledReviewUpload1: action.isFilledReviewUpload1 };
    case SET_IS_FILLED_REVIEW_UPLOAD2:
      return { ...state, isFilledReviewUpload2: action.isFilledReviewUpload2 };
    case SET_IS_FILLED_REVIEW_UPLOAD3:
      return { ...state, isFilledReviewUpload3: action.isFilledReviewUpload3 };
    case RESET_REVIEW_UPLOAD_STORE:
      return initialState;
    default:
      return state;
  }
};

export default ReviewUploadReducer;
