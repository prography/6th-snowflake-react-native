export const llog = (...params: any[]) => {
  if (__DEV__) {
    console.log(...params);
  }
};
