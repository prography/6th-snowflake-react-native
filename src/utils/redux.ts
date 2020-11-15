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
  // 주의: ...params를 해버리면 request()에 대한 에러를 안잡아줌
  const request = (params: object = {}) => {
    llog("😸 dispatch request");
    const fetchResult: RFetchResult<T> = {
      loading: true,
      data: params.data, // 이미 data가 있으면 그걸 유지하기 위해. 없으면 undefined
      error: undefined,
    };
    // TODO userInfo 하드코딩 삭제 후 추상화
    return {
      type: ACTION.REQUEST,
      userInfo: fetchResult,
      ...params,
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
