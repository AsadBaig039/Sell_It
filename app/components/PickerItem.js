import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

function PickerItem({ item, onPress }) {
  return (
    <View style={styles.centeredView}>
      <View style={styles.itemView}>
        <TouchableOpacity onPress={onPress}>
          <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemView: {
    width: "90%",
    marginVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 25,
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: Colors.Primary,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontFamily: "Roboto",
    fontWeight: "800",
    fontSize: 20,
  },
});
export default PickerItem;
