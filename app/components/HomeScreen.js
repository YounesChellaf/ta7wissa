import React, {Component} from 'react';
import {Image, View,StyleSheet,Text, Platform, Dimensions, SafeAreaView} from 'react-native';
import { Input,Button,SearchBar,Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';
import MapViewTab from './MapView/MapViewTab';
import ListView from './ListView/ListView';
import { TabView, TabBar,SceneMap } from 'react-native-tab-view';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PopupDialog, {
  DialogTitle,
  DialogContent,
  DialogFooter
} from 'react-native-popup-dialog';
import Carousel, { Pagination } from 'react-native-snap-carousel';



const { width, height } = Dimensions.get('window');
let textSize = (height>600) ? 30 :24;


const styles=StyleSheet.create({
    scene:{
      flex:1,
    },
    viewDialog:{
      flexDirection:'row',
      borderWidth:1,borderColor:'#11417d',
        backgroundColor:'#11417d',
      alignItems:'center',
      marginTop:height*0.01,
      height:height*0.09,
      justifyContent:'center',
    },
    textDialog:{
      fontSize:height*0.03,
      color:'black',
      ...Platform.select({
        ios: {

        },
        android: {

        }
    })

    },
  })
  
  
      export default class TabViewExample extends Component {
        state = {
          index: 0,
          routes: [
            { key: '1', title: 'LIST' },
            { key: '2', title: 'MAP' },
          ],
      
          region: '',
          visibleSorting:false,

        };
        updateSearch = city => {
            this.setState({ city });
          };
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
        
          getCoordsFromName(loc) {
            this.updateState({
              latitude: loc.lat,
              longitude: loc.lng,
            });
          }
        
        
          renderLeftComponent=()=>{
                if(this.state.index===1){
                    return(
                        { icon:  'chevron-left', color: '#11417d', size:textSize ,
                        onPress:() => this.setState({index:0})
        
                
                })
                }
                else{
                    return(
                        { icon: 'sort', color: '#11417d',size:textSize,
                          onPress:()=>this.setState({visibleSorting:true})
                      }
                    )
                }
    
        }

        _renderScene = ({ route }) => {
            switch (route.key) {
            case '1':
              return <ListView style={{ flex: 1 }} />;
            default:
              return null;
            }
          };
                


          sortDialog(){
            return(
                  <PopupDialog
                        key='sorting'
                        ref='sorting'
                        onDismiss={() => {
                        this.setState({ visibleSorting: false });
                        }}
                        onTouchOutside={() => {
                        this.setState({ visibleSorting: false });
                        }}
                        width={0.8}
                        zIndex={1000}
                        dialogStyle={{
                          backgroundColor: '#f4f4f4',
                          alignItems:'center',
                          padding:6,
                          justifyContent:'center',
                          }}
                        dialogTitle={
                          <Icon
                          name='sort'
                          color='#76236c'
                          size={textSize+20}
                          />
                        }

                        visible={this.state.visibleSorting}
                        >
                        <DialogContent disableTypography style={{padding:height*0.1,width:'100%',backgroundColor:'#f4f4F4'}}>
                          <View style={styles.viewDialog} >

                                <Text style={styles.textDialog}>
                                  Newest
                                  </Text>
                            </View>
                            <View style={styles.viewDialog} >

                            <Text style={styles.textDialog}>
                                  Latest
                                  </Text>
                            </View>
                            <View style={styles.viewDialog}
                                    onPress={()=>{
                                      alert('ok')
                                    }} >

                                <Text style={styles.textDialog}>
                                Price (from top to low)
                                  </Text>
                            </View>
                            <View style={styles.viewDialog} >

                            <Text style={styles.textDialog}>
                            Price (from low to top)
                                  </Text>
                            </View>

                        </DialogContent>
                  </PopupDialog>

            ) }
        render() {
            const { city } = this.state;

          return (
            <SafeAreaView style={{flex:1}}>
                    <TabView
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width }}
                    />
                    {this.sortDialog()}

            </SafeAreaView>
          );
        }
      }
      