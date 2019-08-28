import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform , TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
                        </View>
                    </LinearGradient>
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
});