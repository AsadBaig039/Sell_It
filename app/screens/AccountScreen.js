import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Icon from "../components/Icon";
import colors from "../config/colors";

import Screen from "../components/Screen";
import {
  ListItem,
  listItemSeparator,
  ListItemDeleteAction,
} from "../components/lists";

function AccountScreen({ navigation }) {
  const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
      targetScreen: "Account",
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
      targetScreen: "Messages",
    },
  ];
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Asad Baig"
          subTitle="asad.baig039@gmail.com"
          image={require("../assets/asad.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={listItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
