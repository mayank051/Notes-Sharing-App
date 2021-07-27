import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import HeaderText from '../components/HeaderText';
import Tile from '../components/Tile';

const DisplaySubjectsScreen = (props) => {
    const state = useSelector(state => state);
    console.log("In Display Subjects --->", state);
    const handleClick = () => {
        const uploadNotes = state.uploadNotes;
        if (uploadNotes)
            props.navigation.navigate("Add Notes");
        else
            props.navigation.navigate("Display Notes");
    }
    return (
        <View style={styles.container}>
            <HeaderText />
            <ScrollView>
                <Tile title={"Data Structures"} tileHeight={0.15} onClick={() => handleClick()} />
                <Tile title={"Advanced Java"} tileHeight={0.15} onClick={() => handleClick()} />
                <Tile title={"Web Development"} tileHeight={0.15} onClick={() => handleClick()} />
                <Tile title={"Software Testing"} tileHeight={0.15} onClick={() => handleClick()} />
                <Tile title={"MAD Labs"} tileHeight={0.15} onClick={() => handleClick()} />
                <Tile title={"File Structures"} tileHeight={0.15} onClick={() => handleClick()} />
            </ScrollView>
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

export default DisplaySubjectsScreen;