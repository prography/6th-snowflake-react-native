import { RFetchResult } from "~/api/interface";
import { ApiAction } from "~/utils/interface";
import { llog } from "~/utils/functions";

export const getInitialFetchResult = <T>(): RFetchResult<T> => ({
  loading: false,
  data: undefined,
  error: undefined,
});

export const createAction = (prefix: string): ApiAction => ({
  REQUEST: `${prefix}_REQUEST`,
  SUCCESS: `${prefix}_SUCCESS`,
  ERROR: `${prefix}_ERROR`,
});
// 여기서 해주는 작업은 사실 reducer에서 하지만, 편의를 위해 action creator에서 해준다.
export const getActionCreator = <T>(ACTION: ApiAction) => {
  const request = (email: string, password: string) => {
    llog("😸 dispatch reequest");
    const fetchResult: RFetchResult<T> = {
      loading: true,
      data: undefined,
      error: undefined,
    };
    return {
      type: ACTION.REQUEST,
      userInfo: fetchResult,
      email,
      password,
    };
  };

  const success = (data: T) => {
    const fetchResult: RFetchResult<T> = {
      loading: false,
      data,
      error: undefined,
    };
    return {
      type: ACTION.SUCCESS,
      userInfo: fetchResult,
    };
  };

  const error = (error: Error) => {
    llog("💢", `${ACTION.ERROR}`, error);
    const fetchResult: RFetchResult<T> = {
      loading: false,
      data: undefined,
      error,
    };
    return {
      type: ACTION.ERROR,
      userInfo: fetchResult,
    };
  };

  return {
    request,
    success,
    error,
  };
};
