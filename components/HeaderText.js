import React from 'react';
import {Text, StyleSheet} from 'react-native';

const HeaderText = () => {
    return(
        <React.Fragment>
            <Text style = {styles.heading}>{'Notes Sharing App'}</Text>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 26,
        fontStyle: 'italic',
        color: '#808080',
        fontWeight: 'bold'
    }
})

export default HeaderText;