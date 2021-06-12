import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import { DefaultTheme } from "@react-navigation/native";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} headerMode="float">
    <Stack.Screen name="Listing" component={ListingScreen}></Stack.Screen>
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default FeedNavigator;
