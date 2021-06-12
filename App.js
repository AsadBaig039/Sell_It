import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen from "./app/components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
      name="Feed"
      component={Tweets}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="Account" component={Account} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

// import React, { useState, useEffect } from "react";
// import * as ImagePicker from "expo-image-picker";
// import * as Permissions from "expo-permissions";
// import { Switch } from "react-native";
// import { Dimensions, View, Button, Alert, Image } from "react-native";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import WelcomeScreen from "./app/screens/WelcomeScreen";

// // import {
// //   useDimensions,
// //   useDeviceOrientation,
// // } from "@react-native-community/hooks";

// import Card from "./app/components/Card";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import MessagesScreen from "./app/screens/MessagesScreen";
// import Screen from "./app/components/Screen";
// import Icon from "./app/components/Icon";
// import { ListItem } from "./app/components/lists";
// import AccountScreen from "./app/screens/AccountScreen";
// import ListingScreen from "./app/screens/ListingScreen";
// import LoginScreen from "./app/screens/LoginScreen";
// import AppPicker from "./app/components/AppPicker";
// import AppTextInput from "./app/components/AppTextInput";
// import ListingEditScreen from "./app/screens/ListingEditScreen";
// import AppText from "./app/components/AppText";
// import ImageInput from "./app/components/ImageInput";
// import ImageInputList from "./app/components/ImageInputList";

// export default function App() {
//   // const [isNew, setIsNew] = useState(false);
//   // const Categories = [
//   //   { label: "Furniture", value: 1 },
//   //   { label: "laptop", value: 2 },
//   //   { label: "Mobile", value: 3 },
//   // ];
//   // const [category, setCategory] = useState(Categories[0]);
//   // const [category, setCategory] = useState();
//   //const { landscape } = useDeviceOrientation();

//   return (
//     <ListingEditScreen />
//     // <Screen>
//     //   <AppPicker
//     //     selectedItem={category}
//     //     onSelectItem={(item) => setCategory(item)}
//     //     icon="apps"
//     //     item={Categories}
//     //     placeholder="Category"
//     //   />
//     //   <AppTextInput icon="email" placeholder="Email" />
//     //   {/* <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} /> */}
//     // </Screen>
//   );
// }
