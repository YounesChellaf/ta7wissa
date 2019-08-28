import React from 'react';

import {
  View,
  StyleSheet,Image
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-end',
  },
});

export default ({ onPress }) => (
  <View style={styles.container}>

    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
      }}
    >
        <Image source={require('../assets/hotel.jpeg')} style={{width: '100%', height: 150, borderRadius: 10}}/>
    </View>
  </View>
);
