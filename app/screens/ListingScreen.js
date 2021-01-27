import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

function ListingScreen(props) {
  const listings = [
    {
      id: 1,
      title: "Red jacket",
      price: "70$",
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 2,
      title: "Couch",
      price: "300$",
      image: require("../assets/couch.jpg"),
    },
    {
      id: 3,
      title: "Chair",
      price: "120$",
      image: require("../assets/chair.jpg"),
    },
  ];
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subTitle={item.price} image={item.image} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;