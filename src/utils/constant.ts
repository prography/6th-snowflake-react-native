import React from 'react';
import { Dimensions } from 'react-native';

export const device = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  px: Number(Dimensions.get('window').width) / 380,
};

interface Color {
  grayDark: string;
  grayLight: string;
  mainDark: string;
  mainLight: string;
}

export const color: Color = {
  grayDark: '#4D4D4D',
  grayLight: '#848484',
  mainDark: '#3ba3c3',
  mainLight: '#81b7c3',
};
