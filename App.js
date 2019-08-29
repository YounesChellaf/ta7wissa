import React, { Component } from 'react';

import { StyleSheet, View, Text, Platform , TouchableOpacity} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import ExampleList from "./app/screens/ExampleList";
import Plan from "./app/screens/Plan";
import Home from "./app/screens/Home";
import HotelDetails from "./app/screens/HotelDetails";
import Login from "./app/screens/Login";
import Register from "./app/screens/Register";
import PrimaryNav from "./app/screens/PrimaryNav";

import Navigation from './app/navigation';
import  Block  from './app/components/Block';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show_Main_App: true
        };
    }

    on_Done_all_slides = () => {
        this.setState({ show_Main_App: true });
    };

    on_Skip_slides = () => {
        this.setState({ show_Main_App: true });
    };
    render() {
        if (this.state.show_Main_App) {
            return (
                <Block white>
                    <Navigation />
                </Block>
            );
        } else {
            return (
                <AppIntroSlider
                    slides={slides}
                    onDone={this.on_Done_all_slides}
                    showSkipButton={true}
                    onSkip={this.on_Skip_slides}
                />
            );
        }
    }
}
const styles = StyleSheet.create({

    MainContainer: {
            flex: 1,
            paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20
    },
    Container:{
      paddingTop: 2
    },
    title: {
        fontSize: 26,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    }
});

const slides = [
    {
        key: 'k1',
        title: 'Event Organizer',
        text: 'Best Event Organizers',
        image: {
            uri:
                'https://reactnativecode.com/wp-content/uploads/2019/04/calendar.png',
        },
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: '#4A637D',

    },
    {
        key: 'k2',
        title: 'Weather Reports',
        text: 'Latest Weather Reports',
        image: {
            uri:
                'https://reactnativecode.com/wp-content/uploads/2019/04/cloud.png',
        },
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: '#4A637D',
    },
    {
        key: 'k3',
        title: 'Technology Informations',
        text: 'Latest Technology Reports',
        image: {
            uri: 'https://reactnativecode.com/wp-content/uploads/2019/04/computer.png',
        },
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: '#4A637D',
    },
    {
        key: 'k4',
        title: 'Flight Bookings',
        text: ' Best Deals on Flights',
        image: {
            uri: 'https://reactnativecode.com/wp-content/uploads/2019/04/flight.png',
        },
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: '#4A637D',
    },
];