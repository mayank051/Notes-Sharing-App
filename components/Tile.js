import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Tile = (props) => {
    const { title, tileHeight = 0.3 , onClick} = props;
    return(
        <TouchableOpacity 
            style = {{...styles.container, height: height * tileHeight}}
            onPress = {onClick}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width: width * 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        borderRadius: 5,
        marginVertical: '5%'
    }
})

export default Tile;