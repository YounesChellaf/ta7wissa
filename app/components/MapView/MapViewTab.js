
import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';
import MapView, {
    ProviderPropType,
    Marker,
    AnimatedRegion,
  } from 'react-native-maps';
  const styles = StyleSheet.create({
    fadeIn:{
      width:250,
      height:50,
      backgroundColor:'#bdc3c7',
    },
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });
  
export default class MapViewTab extends Component{

    state = {
        region: {
        },
      };
      onMapRegionChange(region) {
        console.log('new region',region);
        this.setState({ region });
      }
      getInitialState() {
        getLocation().then(data => {
          this.updateState(
    {        latitude: data.latitude,
            longitude: data.longitude,
    }      );
        });
      }
    
      updateState(location) {
        this.setState({
          region: {
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          },
        });
      }        
render(){
    return(
      <View accessible={true} style={styles.container}>
          <MapView
   style={ styles.map }
   initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
  />
  
  
        </View>
  
    )
}
}