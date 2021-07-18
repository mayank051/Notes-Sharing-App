import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HeaderText from '../components/HeaderText';
import Tile from '../components/Tile';

const UploadNotesScreen = () => {
    return(
        <View style = {styles.container}>
        <HeaderText/>
        <ScrollView>
            <Tile title = {"Data Structures"} tileHeight = {0.15}/>
            <Tile title = {"Advanced Java"} tileHeight = {0.15}/>
            <Tile title = {"Web Development"} tileHeight = {0.15}/>
            <Tile title = {"Software Testing"} tileHeight = {0.15}/>
            <Tile title = {"MAD Labs"} tileHeight = {0.15}/>
            <Tile title = {"File Structures"} tileHeight = {0.15}/>
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

export default UploadNotesScreen;