export interface State {
  blindState: boolean;
}

const initialState: State = {
  blindState: true,
};

export const BLINDER = 'BLINDER';

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
      return { blindState: !action.blindState };
    default:
      return state;
  }
};

export default blindReducer;
