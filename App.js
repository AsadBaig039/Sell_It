import React from "react";
import { Dimensions, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
// import {
//   useDimensions,
//   useDeviceOrientation,
// } from "@react-native-community/hooks";

import Card from "./app/components/Card";

export default function App() {
  //const { landscape } = useDeviceOrientation();
  return (
    <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
      <Card
        title="Red Jacket for sale "
        subTitle="4000 Rs"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}
