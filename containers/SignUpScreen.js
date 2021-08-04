import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import HeaderText from '../components/HeaderText';
import auth from '@react-native-firebase/auth';
import Navigation from '../navigation';
import LoginScreen from './LoginScreen';
import { jssateBackground, jssateLogo } from '../assets/images/index';

const SignUpScreen = (props) => {
    const [name, setName] = useState();
    const [usn, setUsn] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [signedUp, setSignedUp] = useState(false);
    const [showLogin, setshowLogin] = useState(false);

    const signupUser = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
                setSignedUp(true);
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

    const signUpForm = () => {
        return showLogin ? (<LoginScreen/>) : ( 
            <View style = {styles.container}>
                <Image
                    style={styles.image}
                    source={jssateLogo}
                />
                <HeaderText/>
                <CustomInput onChange = {val => setName(val)} title = {'Name'} placeHolder = {'Enter Your Name'}/>
                <CustomInput onChange = {val => setUsn(val)} title = {'USN'} placeHolder = {'Enter Your USN'}/>
                <CustomInput onChange = {val => setEmail(val)} title = {'Email'} placeHolder = {'Enter Your Email Address'}/>
                <CustomInput onChange = {val => setPassword(val)} title = {'Password'} placeHolder = {'Enter Your Password'} isPassword = {true}/>
                <CustomButton label = {'Sign Up'} onClick = {()=> signupUser()}/>
                <View style = {styles.createAccount}>
                <TouchableOpacity 
                        onPress = {() => setshowLogin(true)}
                    >
                        <Text style = {styles.signup}>{"Already have an account? Signin"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return signedUp ? (<Navigation/>) : (
        signUpForm()
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
    },
    image: {
        marginBottom: '5%'
    },
})

export default SignUpScreen;