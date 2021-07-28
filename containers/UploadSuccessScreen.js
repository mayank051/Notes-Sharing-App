import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import HeaderText from '../components/HeaderText';
import Tile from '../components/Tile';

const DisplayNotesScreen = (props) => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    console.log("user email", state, state?.auth?.email);
    return (
        <View style={styles.container}>
            <HeaderText />
            <Text>Note Uploaded Successfully 🥳🥳🥳</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
    }
})

export default DisplayNotesScreen;