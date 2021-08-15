import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { notesImage } from "../assets/images/index";
import CustomButton from "../components/CustomButton";

const DisplayNotesScreen = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("user email", state, state?.auth?.email);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={notesImage}
        resizeMode="stretch"
        style={styles.image}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>Note Uploaded Successfully !</Text>
          <CustomButton
            label={"Go To Home"}
            onClick={() => props.navigation.navigate("Home Page")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    // justifyContent: 'center'
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    // justifyContent: "center",
  },
  heading: {
    fontSize: 26,
    fontStyle: "italic",
    color: "#808080",
    fontWeight: "bold",
  },
});

export default DisplayNotesScreen;