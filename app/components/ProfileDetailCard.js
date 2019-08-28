import React from 'react';

import {
  View,
  StyleSheet,Text,Image
} from 'react-native';

import {
  ThinGrayLine,
  ThickGrayLine,
} from './Lines';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#BDC2C9',
  },
});

export default ({ onPress }) => (
  <View style={styles.container}>
    <View style={{ flex: 1 }}>
        <Text style={styles.HotelAddress}>Prix</Text>
        <Text>5000 DZD</Text>
    </View>
    <View style={{ flex: 1 }}>
        <Text style={styles.HotelAddress}>Review</Text>
        <Image source={require('../assets/icons/notation.jpg')} style={{width:80,height:20}}/>
    </View>
      <View style={{ flex: 1 }}>
          <Text style={styles.HotelAddress}>Prix</Text>
          <Text>5000 DZD</Text>
      </View>
      <View style={{ flex: 1 }}>
          <Text style={styles.HotelAddress}>Review</Text>
          <Image source={require('../assets/icons/notation.jpg')} style={{width:80,height:20}}/>
      </View>
  </View>
);
