import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderText from '../components/HeaderText';
import Tile from '../components/Tile';

const HomeScreen = (props) => {
    return(
        <View style = {styles.container}>
            <HeaderText/>
            <Tile title = {"Read Notes"} onClick = {() => props.navigation.navigate("Display Notes Page")}/>
            <Tile title = {"Upload Notes"} onClick = {() => props.navigation.navigate("Upload Page")} />
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