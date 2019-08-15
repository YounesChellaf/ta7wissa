import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform , TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Button , Searchbar} from "react-native-paper";
export default class HotelList extends Component{
    state = {
        firstQuery: '',
    };
    render(){
        const { firstQuery } = this.state;
        return(
            <View>
                <View>
                    <LinearGradient
                        colors={['#2980B9', '#6DD5FA', '#93dcfa']}
                        style={{ width: '100%', alignItems: 'center', borderRadius: 5 }}>
                        <View style={styles.SearchView}>
                            <Searchbar
                                style={styles.searchbar}
                                placeholder="Recherche d'hotels"
                                onChangeText={query => { this.setState({ firstQuery: query }); }}
                                value={firstQuery}
                            />
                        </View>
                    </LinearGradient>
                </View>
                <View>
                    
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    SearchView : {
        marginTop: '15%',
       height: '45%',
        width: '85%'
    },
    searchbar: {
        borderRadius: 30,
    }
});