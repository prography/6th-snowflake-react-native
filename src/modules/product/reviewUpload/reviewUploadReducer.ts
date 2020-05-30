// blindState 타입 설정
export interface State {
  thicknessScore: number;
  durabilityScore: number;
  oilyScore: number;
  reviewUploadReducer: any;
}
// blindState의 초기값 설정
const initialState: State = {
  thicknessScore: null,
  durabilityScore: null,
  oilyScore: null,
};

export const SET_THICKNESS_SCORE = 'SET_THICKNESS_SCORE';
export const SET_DURABILITY_SCORE = 'SET_DURABILITY_SCORE';
export const SET_OILY_SCORE = 'SET_OILY_SCORE';

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

const reviewUploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THICKNESS_SCORE:
      return { ...state, thicknessScore: action.thicknessScore };
    case SET_DURABILITY_SCORE:
      return { ...state, durabilityScore: action.durabilityScore };
    case SET_OILY_SCORE:
      return { ...state, oilyScore: action.oilyScore };
    default:
      return state;
  }
};

export default reviewUploadReducer;
