import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ActivityIndicator from "./ActivityIndicator";

function Card({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        {!imageUrl && (
          <View style={styles.activityIndicatorView}>
            <ActivityIndicator visible={true} />
          </View>
        )}
        {imageUrl && (
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{ uri: imageUrl }}
          />
        )}

        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{"$ " + subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 180,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontWeight: "900",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  activityIndicatorView: {
    width: "100%",
    height: 180,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Card;
