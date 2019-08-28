import React, {
  Component,
} from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,Image
} from 'react-native';

import FoldView from 'react-native-foldview';

import ProfileDetailCard from './ProfileDetailCard';
import AdditionalInfoCard from './AdditionalInfoCard';

import {
  ThinGrayLine,
  ThickDarkGrayLine,
} from './Lines';


const styles = StyleSheet.create({
    HotelName: {
        fontSize: 20,
        fontWeight: 'bold',
      //  fontFamily: 'Cochin',
        color: '#11417d',
        marginBottom:3
    },
    HotelAddress: {
        fontSize: 14,
        fontWeight: 'bold',

    },
});
export default class Row extends Component {

  componentWillMount() {
    this.renderBackface = this.renderBackface.bind(this);
    this.renderInnerBackFace = this.renderInnerBackFace.bind(this);
  }

  renderBlankFace() {
    return (
      <View
        style={{
          backgroundColor: '#D6EFFF',
          flex: 1,
        }}

      />
    );
  }

  renderBackface() {
    const onPress = this.props.onPress;
    return (
      <View style={{ flex: 1 }}>

        <FoldView
          renderFrontface={this.renderBlankFace}
          renderBackface={this.renderInnerBackFace}
        >
          <AdditionalInfoCard onPress={onPress} />
        </FoldView>

      </View>
    );
  }

  renderInnerBackFace() {
    const onPress = this.props.onPress;
    return (
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: '#BDC2C9',
          borderBottomLeftRadius: 2,
          borderBottomRightRadius: 2,
        }}
      >
        <View
          style={{
            backgroundColor: '#FFBD18',
            flex: 1,
            margin: 14,
            borderRadius: 5,
          }}
        >
          <TouchableHighlight
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={onPress}
          >
            <Text>
              PLUS DE DETAILS
            </Text>
          </TouchableHighlight>

        </View>
      </View>
    );
  }

  render() {
    const onPress = this.props.onPress;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          flexDirection: 'column',
        }}
      >

        <View style={{ flex: 1 }} >

          <View
            style={{
              flex: 1,
              paddingBottom: 10,
              padding: 16,
            }}
          >
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}
            >
                <Image source={require('../assets/HotelLogo.jpeg')} style={{padding:20,width: 40, height: 40}}/>
              <View
                style={{
                    marginLeft:15,
                  flex: 1,
                  flexDirection: 'column',
                }}
              >
                  <Text style={styles.HotelName}>Mira d'Or</Text>
                  <View style={{flex:1,flexDirection:'row'}}>
                      <Image source={require('../assets/icons/location.png')} style={{width:15,height:15,marginRight:5}}/>
                      <Text style={styles.HotelAddress}>Bab ezzouar,Algiers,Algeria</Text>
                  </View>
              </View>

            </View>

          </View>

          <View style={{ flex: 1 }}>

            <FoldView
              renderFrontface={this.renderBlankFace}
              renderBackface={this.renderBackface}
            >
              <ProfileDetailCard onPress={onPress} />
            </FoldView>

          </View>

        </View>

      </View>
    );
  }
}
