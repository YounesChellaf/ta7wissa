import React from 'react';
import { Icon } from 'react-native-elements'
import {
  View,
  StyleSheet,
} from 'react-native';

import {
  ThinGrayLine,
  ThickDarkGrayLine,
} from './Lines';

export default () => (
  <View
    style={{
      flex: 1,
      paddingTop: 10,
      paddingHorizontal: 16,
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: '#BDC2C9',
    }}
  >
    <View style={{ flex: 1 }}>
        <Icon
            name='wifi'
            type='material'
            color='#517fa4'
        />
    </View>

    <View style={{ flex: 1 }}>
        <Icon
            name='television-classic'
            type='material'
            color='#517fa4'
        />
    </View>
      <View style={{ flex: 1 }}>
          <Icon
              name='wifi'
              type='material'
              color='#517fa4'
          />
      </View>
      <View style={{ flex: 1 }}>
          <Icon
              name='wifi'
              type='material'
              color='#517fa4'
          />
      </View>
      <View style={{ flex: 1 }}>
          <Icon
              name='wifi'
              type='material'
              color='#517fa4'
          />
      </View>
      <View style={{ flex: 1 }}>
          <Icon
              name='wifi'
              type='material'
              color='#517fa4'
          />
      </View>
      <View style={{ flex: 1 }}>
          <Icon
              name='wifi'
              type='material'
              color='#517fa4'
          />
      </View>

  </View>
);
