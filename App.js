import React from "react";
import { Dimensions, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

// import {
//   useDimensions,
//   useDeviceOrientation,
// } from "@react-native-community/hooks";

import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  //const { landscape } = useDeviceOrientation();
  return <ViewImageScreen />;
}
