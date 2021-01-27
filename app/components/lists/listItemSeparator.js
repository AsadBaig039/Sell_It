import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../../config/colors";

function listItemSeparator(props) {
  return <View style={styles.itemSeparator} />;
}

const styles = StyleSheet.create({
  itemSeparator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});
export default listItemSeparator;
