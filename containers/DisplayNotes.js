import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import HeaderText from "../components/HeaderText";
import fireStore from "@react-native-firebase/firestore";
import { jssateLogo } from "../assets/images/index";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const DisplayNotesScreen = (props) => {
  const [notesList, setNotesList] = useState([]);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const subject = props?.route?.params?.subject;

  useEffect(() => {
    fireStore()
      .collection(subject)
      .get()
      .then((querySnapshot) => {
        // console.log('Total documents: ', querySnapshot);

        querySnapshot.forEach((d) => {
          // console.log("Hellooo documents--->", d._data);
          setNotesList((notesList) => [...notesList, d._data]);
        });
      });
  }, []);
  const renderItem = (item) => {
    console.log("notesList", item);
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("Display Detail Note", {
              imageUrl: item.item.url,
              title: item.item.name,
            })
          }
        >
          <Text>{item.item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Image style={{ margin: "5%" }} source={jssateLogo} />
      <HeaderText />
      <View style={{ marginTop: 15 }}>
        <FlatList
          data={notesList}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  itemContainer: {
    height: 35,
    backgroundColor: "lightcyan",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    marginBottom: "2%",
    borderRadius: 5,
    width: width * 0.8,
  },
});

export default DisplayNotesScreen;
