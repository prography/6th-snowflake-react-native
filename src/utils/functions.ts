export const llog = (...params: any[]) => {
  if (__DEV__) {
    console.log(...params);
  }
};

export const getAvailableYears = () => {
  // 청소년보호법에 따라 만 19세 이상부터 성인인증이 가능합니다.
  // 정확히는 만 19세가 되는 년도의 1월 1일부터 성인인증이 가능합니다.
  // 예) 2020년의 경우
  // 2001년 출생: 성인인증 가능
  // 2002년, 2003년, … 출생: 성인인증 불가

  // 2020년
  const currentYear = new Date().getFullYear();
  const possibleAuthenticateYear = currentYear - 19;
  const start = 1950;
  const end = possibleAuthenticateYear;

  const arr: number[] = [];
  let num = start;
  while (num <= end) {
    arr.push(num++);
  }

  return arr;
};
