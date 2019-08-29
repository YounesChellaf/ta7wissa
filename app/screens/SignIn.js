import React, { Component } from 'react';
import {StyleSheet, View, Platform, TouchableOpacity, ImageBackground, Image, TextInput} from 'react-native';
import {Icon} from "react-native-vector-icons/Ionicons";


import backgroundImage from '../assets/header.jpeg';
import LogoTa7wissa from '../assets/t7wissa.png';
import Text from '../components/Text'


export default class SignIn extends Component{

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.logoContainer}>
                <Image style={styles.logo} source={LogoTa7wissa}/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Username'}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <TouchableOpacity style={styles.btnLogin} onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        opacity:0.9
    },
    logoContainer:{
      alignItems:'center'
    },
    logo : {
        height: 100,
        width: 300,
        marginBottom:100
    },
    input:{
        width : 300,
        height : 45,
        borderRadius:25,
        fontSize:16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.6)',
        color : 'rgba(255,255,255,0.9)',
        marginHorizontal: 25
    },
    inputContainer:{
        marginTop: 10
    },
    btnLogin:{
        width : 300,
        height : 45,
        borderRadius:25,
        backgroundColor: '#432577',
        justifyContent:'center',
        marginTop: 30
    },
    loginText:{
        fontSize: 18,
        textAlign: 'center',
        color: 'rgba(255,255,255,0.7)'
    }
});