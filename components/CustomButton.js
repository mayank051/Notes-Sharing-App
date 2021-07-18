import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const CustomButton = (props) => {
    const {label, onClick} = props;
    return(
        <TouchableOpacity style = {styles.container} onPress = {onClick}>
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#ffcccc',
        backgroundColor:'#3386FF',
        borderRadius: 5,
    }
})

export default CustomButton;