import React, { Component } from 'react';

import { StyleSheet, View, Text, Platform , TouchableOpacity} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import Home from  './app/screens/Home'
import PrimaryNav from "./app/screens/PrimaryNav";
import HotelList from "./app/screens/HotelList";
import { Provider as PaperProvider } from 'react-native-paper';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

            show_Main_App: false


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
                <PaperProvider>
                    <Home/>
                </PaperProvider>
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
        backgroundColor: '#3497ff',

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
        backgroundColor: '#3497ff',
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
        backgroundColor: '#3497ff',
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
        backgroundColor: '#3497ff',
    },
];