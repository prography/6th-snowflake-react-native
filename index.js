/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import codePush from "react-native-code-push";

// console.disableYellowBox = true; // 노란 경고창 보기 싫을 때

AppRegistry.registerComponent(appName, () => codePush(App));
