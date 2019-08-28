import React from 'react';

import {
  View,
  StyleSheet,
    TouchableOpacity,
    Image,Text
} from 'react-native';

import {
  ThinGrayLine,
  ThickGrayLine,
  ThickDarkGrayLine,
  ThinRedLine,
} from './Lines';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius:10
  },
   HotelName: {
        fontSize: 20,
        fontWeight: 'bold',
        //fontFamily: 'Cochin',
        color: '#11417d',

    },
    HotelAddress: {
        fontSize: 14,
        fontWeight: 'bold',
        height:20
    },

  leftPane: {
    flex: 1,
    backgroundColor: '#33373B',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTopLeftRadius:10,borderBottomLeftRadius:10
  },
  rightPane: {
    flex: 2,
    padding: 16,
    backgroundColor: '#fff',
      borderTopRightRadius:10,borderBottomRightRadius:10
  },
});

export default ({ onPress }) => (

<TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.leftPane}>
      <Image source={require('../assets/hotel.jpeg')} style={{width: 120, height: 150, borderRadius:10}}/>
    </View>

    <View style={styles.rightPane}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Text style={styles.HotelName}>Mira d'Or</Text>
          <View style={{flex:1,flexDirection:'row',marginTop:5 }}>
              <Image source={require('../assets/icons/location.png')} style={{width:15,height:15,marginRight:5}}/>
              <Text style={styles.HotelAddress}>Bab ezzouar,Algiers,Algeria</Text>
          </View>
      </View>
        <View style={{ flex: 1, flexDirection: 'row', marginTop:25 }}>
            <Image source={require('../assets/icons/user.png')} style={{width:15,height:15,marginRight:5}}/>
            <Text>20 réservations</Text>
        </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.HotelAddress}>Prix</Text>
            <Text>5000 DZD</Text>
        </View>

        <View style={{ flex: 1 }}>
            <Text style={styles.HotelAddress}>Classe</Text>
            <Image source={require('../assets/icons/notation.jpg')} style={{width:80,height:20}}/>
        </View>
      </View>
    </View>
</TouchableOpacity>
);

