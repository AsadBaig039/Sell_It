import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import defaultStyles from "../config/styles";
import Screen from "../components/Screen";
import PickerItem from "../components/PickerItem";

function AppPicker({
  icon,
  item,
  onSelectItem,
  selectedItem,
  PickerItemComponent = PickerItem,
  placeholder,
  width = "100%",
  numberOfColumns = 1,
  ...otherProps
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <View style={styles.categoryHeading}>
            <AppText>Choose Category</AppText>
          </View>
          <FlatList
            data={item}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
            ListFooterComponent={
              <Image
                style={styles.image}
                resizeMode="center"
                source={require("../assets/choose.png")}
              ></Image>
            }
          />
          {/* <Button title="Close" onPress={() => setModalVisible(false)} /> */}
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
  categoryHeading: {
    marginVertical: 50,
    marginLeft: 20,
  },
  image: {
    width: "100%",
    height: 300,
    marginTop: 50,
    alignSelf: "center",
  },
});

export default AppPicker;
