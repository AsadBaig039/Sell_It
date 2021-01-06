import React from "react";
import { View, StyleSheet, Image } from "react-native";
import App from "../../app";

import AppText from "../components/AppText";
import colors from "../config/colors";
function ListItem({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "800",
  },
  subTitle: {
    color: colors.mediumGrey,
  },
});

export default ListItem;
