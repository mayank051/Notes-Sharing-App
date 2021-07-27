import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import HeaderText from '../components/HeaderText';
import Tile from '../components/Tile';

const HomeScreen = (props) => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    console.log("user email", state, state?.auth?.email);
    const readNotes = () => {
        dispatch({ type: "DISPLAY_NOTES", payload: {} });
        props.navigation.navigate("Subjects");
    }

    const uploadNotes = () => {
        dispatch({ type: "UPLOAD_NOTES", payload: {} });
        props.navigation.navigate("Subjects");
    }
    return(
        <View style = {styles.container}>
            <HeaderText/>
            <Tile title={"Read Notes"} onClick={() => readNotes()} />
            <Tile title={"Upload Notes"} onClick={() => uploadNotes()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default HomeScreen;