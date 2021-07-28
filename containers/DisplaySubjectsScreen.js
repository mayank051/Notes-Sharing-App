import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import HeaderText from '../components/HeaderText';
import Tile from '../components/Tile';

const DisplaySubjectsScreen = (props) => {
    const state = useSelector(state => state);
    console.log("In Display Subjects --->", state);
    const handleClick = (subject) => {
        const uploadNotes = state.uploadNotes;
        if (uploadNotes)
            props.navigation.navigate("Add Notes", { subject });
        else
            props.navigation.navigate("Display Notes", { subject });
    }
    return (
        <View style={styles.container}>
            <HeaderText />
            <ScrollView>
                <Tile title={"Data Structures"} tileHeight={0.15} onClick={() => handleClick("Data Structures")} />
                <Tile title={"Advanced Java"} tileHeight={0.15} onClick={() => handleClick("Advanced Java")} />
                <Tile title={"Web Development"} tileHeight={0.15} onClick={() => handleClick("Web Development")} />
                <Tile title={"Software Testing"} tileHeight={0.15} onClick={() => handleClick("Software Testing")} />
                <Tile title={"MAD Labs"} tileHeight={0.15} onClick={() => handleClick("MAD Labs")} />
                <Tile title={"File Structures"} tileHeight={0.15} onClick={() => handleClick("File Structures")} />
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