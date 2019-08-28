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
                        radius={10}
                        shadowColor={'#d0ccd1'} // IOS only
                        shadowOpacity={0.9}  // IOS only
                        shadowRadius={4}  // IOS only
                        shadowHeight={5}  // IOS only
                        shadowWidth={1}  // IOS only
                        androidElevation={3}  // Android only
                    >
                        <Image
                            style={{margin:20, padding:55, width: 90, height: 50}}
                            source={this.props.image}
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
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20,
        color: '#11417d'
    },
});