// blindState 타입 설정
export type BlindState = {
  blindState: boolean;
};
// blindState의 초기값 설정
const initialState: BlindState = {
  blindState: true,
};

export const SET_BLINDER = "SET_BLINDER";

export const setBlinder = (blindState: boolean) => ({
  type: SET_BLINDER,
  blindState,
});

const BlindReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BLINDER:
      return { ...state, blindState: !action.blindState };
    default:
      return state;
  }
};

export default BlindReducer;
