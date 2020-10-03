// 액션 타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
export const INCREASE_ASYNC = "INCREASE_ASYNC";
export const DECREASE_ASYNC = "DECREASE_ASYNC";

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

export type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case DECREASE:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default CounterReducer;
