export type GenderColorState = {
  womanColor: string;
  manColor: string;
};

const initialState: GenderColorState = {
  womanColor: "#F46CF1",
  manColor: "#3CB7D3",
};

export const SET_WOMAN_COLOR = "SET_WOMAN_COLOR";
export const SET_MAN_COLOR = "SET_MAN_COLOR";

export const setWomanColor = (cColor: string) => ({
  type: SET_WOMAN_COLOR,
  womanColor: cColor,
});
export const setManColor = (cColor: string) => ({
  type: SET_MAN_COLOR,
  manColor: cColor,
});

const GenderColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WOMAN_COLOR:
      return { ...state, womanColor: action.womanColor };
    case SET_MAN_COLOR:
      return { ...state, manColor: action.manColor };

    default:
      return state;
  }
};

export default GenderColorReducer;
