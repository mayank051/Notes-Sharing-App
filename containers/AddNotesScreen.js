import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import HeaderText from '../components/HeaderText';
import Tile from '../components/Tile';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const AddNotesScreen = (props) => {
    const [topic, setTopic] = useState('');
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const uploadImage = () => {
        console.log("user email", state, state?.auth?.email);
    }
    const uploadPDF = () => {
        console.log("user email", state, state?.auth?.email);
    }
    return (
        <View style={styles.container}>
            <HeaderText />
            <CustomInput onChange={val => setTopic(val)} title={'Notes Description'} placeHolder={'Enter Notes Description'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <CustomButton label={'Upload Image'} onClick={() => uploadImage()} />
                <CustomButton label={'Upload PDF'} onClick={() => uploadPDF()} />
            </View>

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

export default AddNotesScreen;