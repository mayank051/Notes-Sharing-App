import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const CustomInput = (props) => {
    const {onChange, title, placeHolder, isPassword = false} = props;

    return(
      <View style = {styles.body}>
          <View style = {styles.heading}>
              <Text>{title}</Text>
            </View>
          <TextInput
            style={styles.input}
            onChangeText={t => onChange(t)}
            placeholder={placeHolder}
            secureTextEntry={isPassword}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flexDirection: 'row',
        marginVertical: '5%'
    },
    heading: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input:{
        height: 40,
        borderWidth: 1,
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default CustomInput;