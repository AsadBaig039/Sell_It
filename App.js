import React, { useState } from "react";
import { Switch } from "react-native";
import { Dimensions, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

// import {
//   useDimensions,
//   useDeviceOrientation,
// } from "@react-native-community/hooks";

import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const [isNew, setIsNew] = useState(false);
  const Categories = [
    { label: "Furniture", value: 1 },
    { label: "laptop", value: 2 },
    { label: "Mobile", value: 3 },
  ];
  // const [category, setCategory] = useState(Categories[0]);
  const [category, setCategory] = useState();

  //const { landscape } = useDeviceOrientation();
  return (
    <LoginScreen />
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item) => setCategory(item)}
    //     icon="apps"
    //     item={Categories}
    //     placeholder="Category"
    //   />
    //   <AppTextInput icon="email" placeholder="Email" />
    //   {/* <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} /> */}
    // </Screen>
  );
}
