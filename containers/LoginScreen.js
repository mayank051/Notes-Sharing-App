import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import HeaderText from '../components/HeaderText';
import auth from '@react-native-firebase/auth';

import Navigation from '../navigation';
import SignUpScreen from './SignUpScreen';

const LoginScreen = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loggedIn, setLoggedIn] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const loginUser = () => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User signed in!');
                setLoggedIn(true);
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                }

                console.error(error);
        });
    }

    const loginForm = () => {
        return showSignup ? (<SignUpScreen/>) : ( <View style = {styles.container}>
            <HeaderText/>
            <CustomInput onChange = {val => setEmail(val)} title = {'Email'} placeHolder = {'Enter Your Email Address'}/>
            <CustomInput onChange = {val => setPassword(val)} title = {'Password'} placeHolder = {'Enter Your Password'} isPassword = {true}/>
            <CustomButton label = {'Sign In'} onClick = {()=> loginUser()}/>
            <View style = {styles.createAccount}>
                <TouchableOpacity 
                    onPress = {() => setShowSignup(true)}
                >
                    <Text style = {styles.signup}>{"Don't have an Account? Signup"}</Text>
                </TouchableOpacity>
            </View>
        </View>)
    }

    return loggedIn ? (<Navigation/>) : (
       loginForm()
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        marginTop: '10%'
    },
    createAccount: {
        marginTop: '5%'
    },
    signup: {
        textDecorationLine: 'underline',
        color: '#0040ff'
    }
})

export default LoginScreen;