// blindState 타입 설정
export interface State {
  thicknessScore: number;
  durabilityScore: number;
  oilyScore: number;
  trioAverage: number;
  reviewUploadReducer: any;
  score: number;
  myGender: string;
  partnerGender: string;
}
// blindState의 초기값 설정
const initialState: State = {
  thicknessScore: null,
  durabilityScore: null,
  oilyScore: null,
  trioAverage: null,
  score: null,
  myGender: null,
  partnerGender: null,
};

export const SET_THICKNESS_SCORE = 'SET_THICKNESS_SCORE';
export const SET_DURABILITY_SCORE = 'SET_DURABILITY_SCORE';
export const SET_OILY_SCORE = 'SET_OILY_SCORE';
export const SET_TRIO_AVERAGE = 'SET_TRIO_AVERAGE';
export const SET_SCORE = 'SET_SCORE';
export const SET_MY_GENDER = 'SET_MY_GENDER';
export const SET_PARTNER_GENDER = 'SET_PARTNER_GENDER';

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
    default:
      return state;
  }
};

export default reviewUploadReducer;
