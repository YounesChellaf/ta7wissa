
import React,{Component} from 'react';
import styles from './ListViewStyle';
import{
    View,
    ScrollView,
    StyleSheet,
    Image,
    Dimensions,
    TextInput,
    Text,
    RefreshControl,
    SafeAreaView,
    I18nManager,
    TouchableHighlight
        
} from'react-native';
import { Input,Button,ListItem,Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';
import Carousel,{Pagination} from 'react-native-snap-carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get('window');
const textSize = (height>600) ? 16 :12;

const firstData=[
    {"id": 1, "helps":"business & devlopment",  "title": "Chohra Mohammed",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
    },
    {"id": 2, "helps":"business & devlopment",  "title": "Amir Khoutir",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 3, "helps":"business & devlopment",  "title": "Chellaf Younes",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 4, "helps":"business & devlopment",  "title": "Bederrer Alladin",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 5, "helps":"business & devlopment",  "title": "Benyamina Mouad",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 6, "helps":"business & devlopment",  "title": "Sabour Oussama",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 7, "helps":"business & devlopment",  "title": "Oumellal Abdeslam",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 8, "helps":"business & devlopment",  "title": "Bouregag Abdelkaded",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 9, "helps":"business & devlopment",  "title": "Borsali Faycel",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 120,"helps":"business & devlopment",  "title": "Bouguesri Adel",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 12, "helps":"business & devlopment",  "title": "Chohra Mohammed",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 23, "helps":"business & devlopment",  "title": "Amir Khoutir",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 33, "helps":"business & devlopment",  "title": "Chellaf Younes",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 441, "helps":"business & devlopment",  "title": "Bederrer Alladin",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 5132, "helps":"business & devlopment",  "title": "Benyamina Mouad",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 64, "helps":"business & devlopment",  "title": "Sabour Oussama",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 71, "helps":"business & devlopment",  "title": "Oumellal Abdeslam",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 82, "helps":"business & devlopment",  "title": "Bouregag Abdelkaded",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 93, "helps":"business & devlopment",  "title": "Borsali Faycel",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 103,"helps":"business & devlopment",  "title": "Bouguesri Adel",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
}

    ];

    // Data that will be showed after
const secondData=[
    {"id": 412, "helps":"busineass & devlopment",  "title": "Neddar Islem",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 323, "helps":"busineszs & devlopment",  "title": "Khodja Mehdi",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 512, "helps":"businesas & devlopment",  "title": "Bacha Brahim",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 47, "helps":"businwess & devlopment",  "title": "Damene Miloud ",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 58, "helps":"businegss & devlopment",  "title": "Touaria Sami",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
    },
    {"id": 69, "helps":"businetss & devlopment",  "title": "Hafsawi Houssem",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
},
    {"id": 610,"helps":"busineshs & devlopment",  "title": "Kafi Abderrazak",
        "photosArray": [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
}

];
const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

export default class ListView extends Component{
    constructor(props){
        super(props);
        this.state= {
            index:0,
            loadMore: false,
            ourData:[],
            generalData:[],
            nameFiltred:'',
            refreshing: false,
            activeSlide: 0


        }
        this.filterby=this.filterby.bind(this);
        this.orderby=this.orderby.bind(this);

    }

    filterby(){
        let data=this.state.generalData;
        data = data.filter(x => String(x.name.toUpperCase()).includes(this.state.nameFiltred.toUpperCase()));
        this.setState({ourData:data})
       }

       //to order our data by NAME
       orderby(){
            let data=this.state.ourData;
            data=_.sortBy(data,['name', 'id'])
            this.setState({ourData:data})
       }
       //We recupere our data and put it in our State
       componentWillMount(){

          this.setState({ourData:firstData}) 
          this.setState({generalData:firstData}) 
       }

       updateList(){
            if(!this.state.loadMore)
                {
                let data=this.state.ourData;
                data=data.concat(secondData);
                this.setState({generalData:data});
                this.setState({ourData:data});
                this.setState({loadMore:true})
                this.setState({nameFiltred:''})
                }
        }   


 renderImage = ({ item,index }) => {
     
    return(

            <TouchableHighlight key={index}>
                <Image style={styles.image} resizeMode='stretch'  source={{ uri: item }}/>
            </TouchableHighlight>


          );
 }      

        
        showList(){
            return(
             this.state.ourData.map(data => {
                let indexoo=0;
                 return(
                 <TouchableOpacity key={data.id} style={styles.listViewContainer} 
                 onPress={()=>{
                    Actions.retailPageScreen ({images: data.photosArray,
                                               id:data.id,
                                                title:data.title,
                                                companyLogo:data.photosArray[0]

                                                })
                 }}
                 >
                           <View style={styles.imageContainer}>
                              <Carousel
                                enableMomentum={true}
                                firstItem={0}

                                ref={c => {
                                    this.slider1Ref = c;
                                }}
                                renderItem={this.renderImage.bind(this)}
                                data={data.photosArray}
                                windowSize={1}
                                sliderWidth={width*0.234*3/2}
                                itemWidth={width*0.234*3/2}
                                loop={true}
                                inactiveSlideScale={0}
                                inactiveSlideOpacity={0}
                                onSnapToItem={index => {
                                    indexoo=index
                                        this.setState({index})
                                }}
                                />
                                <Pagination
                                dotsLength={data.photosArray.length}
                                activeDotIndex={this.slider1Ref ? this.slider1Ref.currentIndex : indexoo}
                                containerStyle={styles.paginationContainer}
                                dotColor="black"
                                dotStyle={styles.paginationDot}
                                inactiveDotColor="white"
                                inactiveDotOpacity={1}
                                inactiveDotScale={0.8}
                                carouselRef={this.slider1Ref}
                                tappableDots={!!this.slider1Ref}
                                />
                              </View>
                   <View style={styles.textContainer}>
                      <Text style={styles.title} >{data.title}</Text>
                      <View style={styles.iconPlusTexte}>
                            <Icon name="currency-usd"
                                color='black'
                                size={textSize}

                             />
                             <Text style={styles.textInsideIcon}>
                                2012.213 AED / Year
                             </Text>
                      </View>
                      <View style={styles.iconPlusTexte}>
                            <Icon name="map-marker"
                                color='black'
                                size={textSize}

                             />
                             <Text style={styles.textInsideIcon}>
                             {data.helps}
                             </Text>
                      </View>
                      <View style={styles.iconsStyle}>
                            <View style={styles.iconPlusTexte}>
                                    <Icon name="bed-empty"
                                        color='black'
                                        size={textSize}

                                    />
                                    <Text style={styles.textInsideIconSecond}>
                                    3
                                    </Text>
                            </View>
                            <View style={styles.iconPlusTexte}>
                                    <Icon name="toilet"
                                        color='black'
                                        size={textSize}

                                    />
                                    <Text style={styles.textInsideIconSecond}>
                                    2
                                    </Text>
                            </View>
                            <View style={styles.iconPlusTexte}>
                                    <Icon name="domain"
                                        color='black'
                                        size={textSize}

                                    />
                                    <Text style={styles.textInsideIconSecond}>
                                    4 sqft
                                    </Text>
                            </View>

                      </View>


                  </View>
                  <View style={styles.twoLastIcons}>
                        <Icon name="heart-outline"  
                                color='#76236c'
                                size={textSize*1.5}
                                onPress={()=>{
                                    
                                }}
                        />
                        <Icon name="dots-horizontal" 
                                color='#76236c'
                                size={textSize*1.5}
                                onPress={()=>{
            
                                }}
                        />
                    </View>
                   
                  </TouchableOpacity>
                  )})
 
            );
        }
 
     //this is called when we refresh our scroll view 
        _onRefresh = () => {
         this.setState({refreshing: true});
         this.setState({ourData:this.state.generalData}) 
           this.setState({refreshing: false});
           this.setState({nameFiltred:''})
       }
       
 

render(){
    return(
        <SafeAreaView  style={{
            margin: 5,
            shadowColor:'#b4b4b4',
            shadowOpacity:0.9,
            borderRadius : 40
        }} >
             <ScrollView 
                   
                   refreshControl={
                        <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        />}
                      
                    contentContainerStyle={{ flexGrow: 1,backgroundColor:"#F4F4F4",
                                    alignItems:'center',
                                    paddingBottom:80 }}
                     
                    onScroll={({nativeEvent}) => {
                        if (isCloseToBottom(nativeEvent)) {
                             this.updateList() }}}
                >
              <View>
                { 
                this.showList()
                }
              </View>
            </ScrollView>     
            
           </SafeAreaView>
    )
}
}