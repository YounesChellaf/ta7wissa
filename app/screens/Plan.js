import React, { Component } from 'react';
import Timeline from "react-native-timeline-listview";
import {Image, Text, View, StyleSheet, Platform} from "react-native";


const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
       // fontFamily: 'Cochin',
        color: '#000000',
        paddingBottom: 10
    },
    descriptionContainer:{
        backgroundColor: '#bbdaff',
        flex: 1,
        borderRadius: 10,
        padding: 10,
    },
    description:{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'grey',
        fontFamily: 'Cochin',
    },
    image:{
        alignContent:'center',
        width: '100%',
        height : 100,
        borderRadius: 5,
        marginBottom: 5

    }

});
export default class Plan extends React.Component{
    constructor(){
        super();
        this.data = [
            {
                time: '09:00',
                title: 'Archery Training',
                description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
                lineColor:'#009688',
                icon: require('../assets/training.png'),
                imageUrl: require('../assets/hotel.jpeg'),
            },
            {
                time: '10:45',
                title: 'Play Badminton',
                description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
                icon: require('../assets/badmitton.jpeg'),
                imageUrl: require('../assets/hotel.jpeg'),
            },
            {
                time: '12:00',
                title: 'Lunch',
                icon: require('../assets/lunch.png'),
            },
            {
                time: '14:00',
                title: 'Watch Soccer',
                description: 'Team sport played between two teams of eleven players with a spherical ball. ',
                lineColor:'#009688',
                icon: require('../assets/socces.png'),
                imageUrl: require('../assets/hotel.jpeg'),
            },
            {
                time: '16:30',
                title: 'Go to Fitness center',
                description: 'Look out for the Best Gym & Fitness Centers around me :)',
                icon: require('../assets/dumbell.png'),
                imageUrl: require('../assets/hotel.jpeg'),
            },
            {
                time: '16:30',
                title: 'Go to Fitness center',
                description: 'Look out for the Best Gym & Fitness Centers around me :)',
                icon: require('../assets/dumbell.png'),
                imageUrl: require('../assets/hotel.jpeg'),
            },
            {
                time: '12:00',
                title: 'Dinner',
                icon: require('../assets/lunch.png'),
            },

            {
                time: '16:30',
                title: 'Go to Fitness center',
                description: 'Look out for the Best Gym & Fitness Centers around me :)',
                icon: require('../assets/dumbell.png'),
                imageUrl: require('../assets/hotel.jpeg'),
            },
        ]
    }

    static renderDetail(rowData, sectionID, rowID) {
        let title = <Text style={[styles.title]}>{rowData.title}</Text>;
        var desc = null;
        if(rowData.description && rowData.imageUrl)
            desc = (
                <View style={styles.descriptionContainer}>
                    <Image source={rowData.imageUrl} style={styles.image}/>
                    <Text >{rowData.description}</Text>
                </View>
            );

        return (
            <View style={{flex:1}}>
                {title}
                {desc}
            </View>
        )
    }

    render(){
        return(
            <View style={{flex: 1,
                backgroundColor: '#fff',
                flexDirection: 'row',
                paddingTop: 40,
                paddingLeft: 40,
                paddingRight: 20,
            }}>
            <Timeline
                data={this.data}
                //..other props
                circleSize={25}
                circleColor='rgb(45,156,219)'
                lineColor={'#414141'}
                timeContainerStyle={{minWidth:52}}
                timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13,marginRight:15}}
                descriptionStyle={{color:'gray'}}
                options={{
                    style:{paddingTop:40,},
                    removeClippedSubviews: false
                }}
                innerCircle={'icon'}
                renderDetail={Plan.renderDetail}
            />
            </View>
        )
    }
}