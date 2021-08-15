import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import HeaderText from "../components/HeaderText";
import Tile from "../components/Tile";

const DisplayNotesScreen = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const email = state?.auth?.email;

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch({ type: "LOGOUT" });
        }}
      >
        <Text>{email}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default DisplayNotesScreen;
