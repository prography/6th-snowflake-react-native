import "styled-components";

// and extend it
declare module "styled-components" {
  export interface DefaultTheme {
    ///  ------------------ 길이 ----------------------------------
    dimensions: {
      width: number;
      height: number;
      px: number;
    };
    lengths: {
      bottomBar: number;
      header: number;
      lineWidthThin: number;
      tabHeight: number;
      barHeight: number;
    };
    ///  ------------------ 색 ----------------------------------

    themeColor: {
        background: string;
        black:string;
        darkGray: string;
        lightGray:string;
        extraLightGray: string;
        purple:string;
        mint:string;
        red: string;
        blue: string;
    };
    ///  ------------------ BORDER 테두리! ----------------------------------
    border: {
      grayBorder: {
        borderWidth: string;
        borderColor: string;
        borderStyle: string;
      };
      grayBorderBottom: {
        borderBottomWidth: string;
        borderColor: string;
        borderStyle: string;
      };
    };
  
    ///  ------------------ 스크린 디폴트 세팅, 컴포넌트 패딩 세팅 ------------------
    screenContainer: {
      backgroundColor: string;
      width: string;
      height: string;
    };
    paddingWidth: {
      wideLeftRight: {
        paddingLeft: string;
        paddingRight: string;
      };
    };
    marginWidth: {
      wideLeftRight: {
        marginLeft: string;
        marginRight: string;
      };
    };
    ///  ------------------ 폰트 ----------------------------------
    fonts: {
      title : {
        purpleLarge:{
            fontFamily: string;
            fontSize:  string;
            color:string;
           },
      };
     
    };
 
  }
}