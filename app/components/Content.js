import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform , TouchableOpacity , Image} from 'react-native';
import {AwesomeCard} from 'react-native-awesome-card';


export default class HomeCard extends React.Component{

    render(){
        return (
            <View>
                <TouchableOpacity>
                    <AwesomeCard
                        color={'#ffffff'}
                        margin={10}
                        padding={10}
                        radius={4}
                        shadowColor={'#fbf7fc'} // IOS only
                        shadowOpacity={0.1}  // IOS only
                        shadowRadius={4}  // IOS only
                        shadowHeight={0}  // IOS only
                        shadowWidth={1}  // IOS only
                        androidElevation={3}  // Android only
                    >
                        <Image
                            style={{margin:30, padding:60, width: 50, height: 50}}
                            source={require('../../assets/hotel.png')}
                        />
                        <View>
                            <Text style={styles.title}>{this.props.description}</Text>
                        </View>
                    </AwesomeCard>
                </TouchableOpacity>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
});