import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform , TouchableOpacity} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from "./Home";
import HotelList from "./HotelList";


const Navigation = createStackNavigator({
    Home: {screen: Home},
    HotelList: {screen: HotelList},
}, {
    // Default config for all screens
    initialRouteName: 'Home',
    // transitionConfig: (scenes)=>handleCustomTransition(scenes),
    navigationOptions: { header:false}
});

const PrimaryNav = createAppContainer(Navigation);
export default PrimaryNav