import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import listItemSeparator from "../components/listItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListingDetailsScreen from "./ListingDetailsScreen";
const initialMessages = [
  {
    id: 1,
    title: "Asad Baig",
    description: "Seller",
    image: require("../assets/asad.jpg"),
  },
  {
    id: 2,
    title: "Abdullah Najam",
    description: "Seller",
    image: require("../assets/asad.jpg"),
  },
  {
    id: 3,
    title: "Ali Zaib",
    description: "Seller",
    image: require("../assets/asad.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };
  return (
    <Screen styles={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={listItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
