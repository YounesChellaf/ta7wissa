import React, { Component } from 'react';

import { StyleSheet, View, Text, Platform , TouchableOpacity} from 'react-native';
import HomeCard from  '../components/HomeCard'

export default class Home extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <HomeCard description ='Reservation Hotel'  image={require('../assets/hotel.png')} />
                </View>
                <View style={styles.item}>
                    <HomeCard description ='Plans suggeré' image={require('../assets/plan.png')}/>
                </View>
                <View style={styles.item}>
                    <HomeCard description ='Location Voiture' image={require('../assets/car_renting.jpeg')}/>
                </View>
                <View style={styles.item}>
                    <HomeCard description='Settings' image={require('../assets/setting.jpeg')}/>
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 2,
        paddingTop: Platform.OS === 'ios' ? 100 : 50,
        alignContent : 'center',
        //padding: 5
        backgroundColor: '#f8f8f8',
        flexWrap: 'wrap',
        alignItems: 'flex-start'

    },
    item : {
      width : 180, height: 200
    }
});