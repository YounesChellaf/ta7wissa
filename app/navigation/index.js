import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import welcome from '../screens/Welcome';
import Browse from '../screens/Browse';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Forgot from '../screens/Forgot';
import Settings from '../screens/Settings';
import Explore from '../screens/Explore';
import ExampleList from '../screens/ExampleList';
import Product from '../screens/Product';
import Plan from '../screens/Plan';
import CarRenting from '../screens/CarRenting';

import { theme } from '../constants';

const screens = createStackNavigator({
    welcome,
    Browse,
    Login,
    SignUp,
    Settings,
    Home,
    Forgot,
    Explore,
    ExampleList,
    Product,
    Plan,
    CarRenting
}, {
    defaultNavigationOptions: {
        headerStyle: {
            height: theme.sizes.base * 4,
            backgroundColor: theme.colors.white, // or 'white
            borderBottomColor: "transparent",
            elevation: 0, // for android
        },
        //headerBackImage: <Image source={require('../assets/icons/back.png')} />,
        headerBackTitle: null,
        headerLeftContainerStyle: {
            alignItems: 'center',
            marginLeft: theme.sizes.base * 2,
            paddingRight: theme.sizes.base,
        },
        headerRightContainerStyle: {
            alignItems: 'center',
            paddingRight: theme.sizes.base,
        },
    }
});

export default createAppContainer(screens);