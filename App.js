import React from "react";
import { Dimensions } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
// import {
//   useDimensions,
//   useDeviceOrientation,
// } from "@react-native-community/hooks";

export default function App() {
  //const { landscape } = useDeviceOrientation();
  return <ViewImageScreen />;
}
