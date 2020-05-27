import * as React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const d = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  px: Number(Dimensions.get('window').width) / 380,
};

export const l = {
  bottomBar: d.px * 75,
  mR: d.px * 20,
  mL: d.px * 30,
};
export const c: Color = {
  black: '#2d2d2d',
  darkGray: '#525252',
  lightGray: '#9b9b9b',
  extraLightGray: '#D8D8D8',
  purple: '#884aff',
  mint: '#B2FFF9',
};

export const circleColor1 = [
  { cColor: '#3CB7D3' },
  { cColor: '#C1AB85' },
  { cColor: '#F76B6B' },
  { cColor: '#A76CF4' },
];
export const circleColor2 = [
  { cColor: '#5CB762' },
  { cColor: '#F7AD6B' },
  { cColor: '#F46CF1' },
  { cColor: '#6969F9' },
];
export const circleColor3 = [
  { cColor: '#75EF83' },
  { cColor: '#F7DC6B' },
  { cColor: '#C5A1FF' },
  { cColor: '#6BA4F7' },
];
export const circleColor4 = [
  { cColor: '#C1F76B' },
  { cColor: '#F4F76B' },
  { cColor: '#FF99BB' },
  { cColor: '#6BD2F7' },
];
export const circleColor5 = [
  { cColor: '#D1DBD3' },
  { cColor: '#EAE3D5' },
  { cColor: '#E0CCCC' },
  { cColor: '#D3D7DE' },
];

interface Color {
  black: string;
  darkGray: string;
  lightGray: string;
  extraLightGray: string;
  purple: string;
  mint: string;
}

interface Ccolor {
  grayDark: string;
  grayLight: string;
  mainDark: string;
  mainLight: string;
  black: string;
  darkGray: string;
  lightGray: string;
  extraLightGray: string;
  mainPurple: string;
}

export const color: Ccolor = {
  grayDark: '#4D4D4D',
  grayLight: '#848484',
  mainDark: '#3ba3c3',
  mainLight: '#81b7c3',
  //위에는 안 쓰는건데, 지금 바로 지우면 오류 나서 일단 내비둠. 아래꺼로 사용하면 됨
  black: '#2d2d2d',
  darkGray: '#525252',
  lightGray: '#9b9b9b',
  extraLightGray: '#f2f2f2',
  mainPurple: '#884aff',
};

export const theme = {
  purpleTitleRight: 'Jost-Bold',
  mL: d.width * 20,
};
