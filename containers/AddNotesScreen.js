import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import HeaderText from '../components/HeaderText';
import Tile from '../components/Tile';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

import storage from '@react-native-firebase/storage';
import fireStore from '@react-native-firebase/firestore';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import RNFS from "react-native-fs";
import { pathOr } from 'ramda';

const AddNotesScreen = (props) => {
    const [topic, setTopic] = useState('');
    const [loader, setLoader] = useState(false);
    const [imagePath, setImagePath] = useState("");
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const subject = props?.route?.params?.subject;

    const uploadImageToStorage = (path, name, type) => {
        // setLoading(true);
        console.log("Helloooo", subject, props);
        let reference = storage().ref(`/${subject}/${topic}`);
        let task = reference.putFile(path);
        task
            .then(snapshot => {
                console.log('Image uploaded to the bucket!');
                setLoader(false);
                props.navigation.navigate("Upload Success");
                //getUploadedUrl(type);
            })
            .catch(e => {
                console.log('uploading image error => ', e);
                setLoader(false);
                //navigation.navigate('After Upload', { status: 'Failure', e })
            });
    }

    const uploadImage = () => {
        var options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true, // do not backup to iCloud
                path: 'images', // store camera images under Pictures/images for android and Documents/images for iOS
            },
        };
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker', storage());
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let path = pathOr('', ['assets', 0, 'uri'], response);
                console.log('Mayank::', path);
                setImagePath(path);
                setLoader(true);
                uploadImageToStorage(path, topic, 'image');
            }
        });
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
            {
                loader && <ActivityIndicator color='red' animating={true} />
            }

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