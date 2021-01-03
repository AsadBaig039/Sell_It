import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  //const { landscape } = useDeviceOrientation();
  console.log("Application Executed");
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
