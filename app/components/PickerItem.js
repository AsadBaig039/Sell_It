import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

function PickerItem({ label, onPress }) {
  return (
    <View style={styles.itemView}>
      <TouchableOpacity onPress={onPress}>
        <AppText style={styles.text}>{label}</AppText>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  itemView: {
    width: "90%",
    height: 50,
    backgroundColor: colors.white,
    margin: 15,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    paddingLeft: 10,
    borderColor: colors.secondary,
  },
  text: {
    fontFamily: "Roboto",
    fontWeight: "800",
    fontSize: 20,
  },
});
export default PickerItem;
