import React, { Component } from 'react';
import {StyleSheet, View, Text, Platform, TouchableOpacity, ImageBackground, Image, TextInput} from 'react-native';
import {Icon} from "react-native-vector-icons/Ionicons";


import backgroundImage from '../assets/header.jpeg';
import LogoTa7wissa from '../assets/t7wissa.png';


export default class HotelDetails extends Component{

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
                        placeholder={'Email'}
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
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Confirm password'}
                        secureTextEntry={true}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <TouchableOpacity style={styles.btnLogin} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.loginText}>Register</Text>
                </TouchableOpacity>
                <View style={styles.oauth}>
                    <TouchableOpacity style={styles.btnRegister} >
                        <Text style={styles.loginText}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnRegister}>
                        <Text style={styles.loginText}>Instagram</Text>
                    </TouchableOpacity>
                </View>
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
        marginTop: 10
    },
    loginText:{
        fontSize: 18,
        textAlign: 'center',
        color: 'rgba(255,255,255,0.7)'
    },
    oauth:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnRegister:{
        width : 140,
        height : 45,
        borderRadius:25,
        backgroundColor: '#77172f',
        justifyContent:'center',
        margin: 10,
    }
});