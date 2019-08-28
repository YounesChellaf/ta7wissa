import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from "./Home";
import HotelList from "./HotelList";
import Login from "./Login";
import Register from "./Register";


const Navigation = createStackNavigator({
    Home: {screen: Home},
    HotelList: {screen: HotelList},
    Login : {screen : Login},
    Register : {screen : Register}
}, {
    // Default config for all screens
    navigationOptions: { header:false},
    initialRouteName: 'Login',
    // transitionConfig: (scenes)=>handleCustomTransition(scenes),
});

const PrimaryNav = createAppContainer(Navigation);
export default PrimaryNav