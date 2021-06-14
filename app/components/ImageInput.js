import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);
  const requestPermission = async () => {
    //  const result = await Permissions.askAsync(Permissions.CAMERA,Permissions.LOCATION,Permissions.MEDIA_LIBRARY);
    //  console.log(result.granted);
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      Alert.alert("You need to enable permission to access the library");
  };
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };

  const cloudinaryUpload = async (photo) => {
    const data = new FormData();
    data.append("file", photo);
    data.append("upload_preset", "sellit");
    data.append("cloud_name", "dzcdsqxkb");
    await fetch("http://api.cloudinary.com/v1_1/dzcdsqxkb/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        onChangeImage(data.url);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("An Error Occured While Uploading");
      });
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
        // const uri = result.uri;
        // const type = result.type;
        // const name = "sellit";
        // const source = {
        //   uri,
        //   type,
        //   name,
        // };
        // cloudinaryUpload(source);
      }
    } catch (error) {
      console.log("Error reading an image");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && <MaterialCommunityIcons name="camera" size={40} />}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    width: 100,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
