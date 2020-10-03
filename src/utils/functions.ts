export const llog = (...params: any[]) => {
  if (__DEV__) {
    console.log(...params);
  }
};

export const llog1 = (s: any) => {
  if (__DEV__) {
    console.log(s);
  }
};
export const llog2 = (s1: any, s2: any) => {
  if (__DEV__) {
    console.log(s1, s2);
  }
};
export const llog3 = (s1: any, s2: any, s3: any) => {
  if (__DEV__) {
    console.log(s1, s2, s3);
  }
};
export const llog4 = (s1: any, s2: any, s3: any, s4: any) => {
  if (__DEV__) {
    console.log(s1, s2, s3, s4);
  }
};
