import { DefaultTheme } from "styled-components";
import { Dimensions } from "react-native";

// 스크린 크기에 대응하기 위한 반응형 길이를 지정해 놓습니다.
const dimensions = {
  width: `${Dimensions.get("window").width}`,
  height: `${Dimensions.get("window").height}`,
  px: Number(Dimensions.get("window").width) / 380,
};
// calculate Px 각 화면 별 픽셀을 대응해주는 함수입니다.
const calcPx = (size: number) => `${dimensions.px * size}`;
// 폰트!
const FONT_FAMILY = "Jost";
export const THEME_COLOR = {
    black: '#2d2d2d',
    darkGray: '#525252',
    lightGray: '#9b9b9b',
    extraLightGray: '#D8D8D8',
    purple: '#884aff',
    mint: '#B2FFF9',
    red: '#F76B6B',
    blue: '#6BA4F7',
};
export const HIT_SLOP = { top: 20, right: 20, bottom: 20, left: 20 };
export const TAB_HEIGHT = 45;
export const BAR_HEIGHT = 100;
export const PADDING_WIDTH = {
  wide: Number(calcPx(15)),
};
///  ------------------ theme 시작! ----------------------------------
const theme: DefaultTheme = {
  ///  ------------------ 길이 ----------------------------------
  dimensions: {
    width: Number(Dimensions.get("window").width),
    height: Number(Dimensions.get("window").height),
    px: Number(Dimensions.get("window").width) / 380,
  },
  lengths: {
    bottomBar: Number(calcPx(75)),
    header: Number(calcPx(60)),
    lineWidthThin: Number(calcPx(0.6)),
    tabHeight: Number(calcPx(TAB_HEIGHT)),
    barHeight: Number(calcPx(BAR_HEIGHT)),
  },
  ///  ------------------ 색 ----------------------------------
  themeColor: {
    background: 'white',
    black:THEME_COLOR.black,
    darkGray: THEME_COLOR.darkGray,
    lightGray:THEME_COLOR.lightGray,
    extraLightGray: THEME_COLOR.extraLightGray,
    purple:THEME_COLOR.purple,
    mint: THEME_COLOR.mint,
    red: THEME_COLOR.red,
    blue: THEME_COLOR.blue
  },
  ///  ------------------ BORDER 테두리! ----------------------------------
  border: {
    grayBorder: {
      borderWidth: ` ${Number(calcPx(1))}px`,
      borderColor: THEME_COLOR.lightGray,
      borderStyle: "solid",
    },
    grayBorderBottom: {
      borderBottomWidth: ` ${Number(calcPx(1))}px`,
      borderColor: THEME_COLOR.lightGray,
      borderStyle: "solid",
    },
  },
  ///  ------------------ 스크린 디폴트 세팅, 컴포넌트 패딩 세팅 ------------------
  screenContainer: {
    backgroundColor: 'white',
    width: "100%",
    height: "100%",
  },
  paddingWidth: {
    wideLeftRight: {
      paddingLeft: `${PADDING_WIDTH.wide}px`,
      paddingRight: `${PADDING_WIDTH.wide}px`,
    },
  },
  marginAndWidth: {
    marginLeft: `${PADDING_WIDTH.wide}px`,
    width: `${Number(dimensions.width)- PADDING_WIDTH.wide *2}px`,
  },
  marginWidth: {
    wideLeftRight: {
      marginLeft: `${PADDING_WIDTH.wide}px`,
      marginRight: `${PADDING_WIDTH.wide}px`,
    },
  },
  ///  ------------------ 폰트 ----------------------------------
  fonts: {
   title:{
    purpleLarge:{
        fontFamily: `${FONT_FAMILY}-Bold`,
        fontSize:  `${Number(calcPx(20))}px`,
        color:THEME_COLOR.purple
       },
     semi17:{
        fontFamily: `${FONT_FAMILY}-Semi`,
        fontSize:  `${Number(calcPx(17))}px`,    
       },
       semi15:{
        fontFamily: `${FONT_FAMILY}-Semi`,
        fontSize:  `${Number(calcPx(15))}px`,    
       },
    
   },
   button: {
       filter: {
        fontFamily: `${FONT_FAMILY}-Medium`,
        fontSize:  `${Number(calcPx(14))}px`,
        lineHeight: `${Number(calcPx(16))}px`,
       },
   },
  },    
 
};

export default theme;
