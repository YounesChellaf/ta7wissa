import React, { Component } from 'react';

import { StyleSheet, View, Text, Platform , TouchableOpacity} from 'react-native';
import HomeCard from  '../components/HomeCard'

export default class Home extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <HomeCard description ='Reservation Hotel' />
                </View>
                <View style={styles.item}>
                    <HomeCard description ='Location Voiture'/>
                </View>
                <View style={styles.item}>
                    <HomeCard description ='Plans suggeré'/>
                </View>
                <View style={styles.item}>
                    <HomeCard description='Settings'/>
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 100,
        //justifyContent: 'center',
        //padding: 5
        // flexDirection : 'space-between'
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'

    },
    item : {
      width : '50%', height: '45%'
    }
});