// blindState 타입 설정
export interface State {
  blindState: boolean;
}
// blindState의 초기값 설정
const initialState: State = {
  blindState: true,
};

export const SET_BLINDER = 'SET_BLINDER';

export const setBlinder = (blindState) => {
  return {
    type: SET_BLINDER,
    blindState,
  };
};

const blindReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BLINDER:
      return { ...state, blindState: !action.blindState };
    default:
      return state;
  }
};

export default blindReducer;
