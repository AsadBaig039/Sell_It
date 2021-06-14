import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { Listings } from "../config/listingsData";

import Screen from "../components/Screen";
import Card from "../components/Card";
import ActivityIndicator from "../components/ActivityIndicator";
import colors from "../config/colors";
import routes from "../navigation/routes";

import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import useApi from "../hooks/useApi";

function ListingScreen({ navigation }) {
  const [listings, setListings] = useState(Listings);

  // const getListingsApi = useApi(listingsApi.getListings);
  // console.log(getListingsApi.data);

  // useEffect(() => {
  //   getListingsApi.request();
  // }, []);
  // const listings = [
  //   {
  //     id: 1,
  //     title: "Red leather jacket",
  //     price: "70$",
  //     image: require("../assets/jacket.jpg"),
  //   },
  //   {
  //     id: 2,
  //     title: "Couch",
  //     price: "300$",
  //     image: require("../assets/couch.jpg"),
  //   },
  //   {
  //     id: 3,
  //     title: "Chair",
  //     price: "120$",
  //     image: require("../assets/chair.jpg"),
  //   },
  // ];
  return (
    <Screen style={styles.screen}>
      {/* {getListingsApi.error && (
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AppText>couldn't retrieve the listings</AppText>
          <AppButton title="Retry" onPress={loadListings}></AppButton>
        </View>
      )} */}

      {/* <ActivityIndicator visible={getListingsApi.loading} /> */}
      <FlatList
        // data={getListingsApi.request}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
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
