module.exports = {
  assets: ["./src/assets/fonts"],
  dependencies: {
    "react-native-code-push": {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink if provided
        ios: null,
      },
    },
    "@react-native-seoul/kakao-login": {
      platforms: {
        android: null,
      },
    },
  },
};
