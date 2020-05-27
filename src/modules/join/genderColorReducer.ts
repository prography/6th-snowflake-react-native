export interface State {
  womanColor: string;
  manColor: string;
}

const initialState: State = {
  womanColor: null,
  manColor: null,
};

export const SET_WOMAN_COLOR = 'SET_WOMAN_COLOR';
export const SET_MAN_COLOR = 'SET_MAN_COLOR';

const genderColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WOMAN_COLOR:
      return { ...state, womanColor: action.womanColor };
    case SET_MAN_COLOR:
      return { ...state, manColor: action.manColor };
    default:
      return state;
  }
};

export default genderColorReducer;
