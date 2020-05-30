import { ActionSheetIOS } from 'react-native';

// blindState 타입 설정
export interface State {
  thicknessScore: number;
}
// blindState의 초기값 설정
const initialState: State = {
  thicknessScore: null,
};

export const SET_THICKNESS_SCORE = 'SET_THICKNESS_SCORE';

export const setThicknessScore = (thicknessScore) => {
  return {
    type: SET_THICKNESS_SCORE,
    thicknessScore,
  };
};

const reviewUploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THICKNESS_SCORE:
      return { ...state, thicknessScore: !action.thicknessScore };
    default:
      return state;
  }
};

export default reviewUploadReducer;
