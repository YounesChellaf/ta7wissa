import {StyleSheet,Platform,Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');

const textSize = (height>600) ? 16 :12;

export default  styles=StyleSheet.create({
    paginationContainer: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        paddingVertical: 8,
        marginTop: width*0.18,
      },
      paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 0
      },
      
    container: {
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
        flex:1,
        zIndex:40,

    },    
    image:{
            height:width*0.24,
            width: width*0.24 *3/2,
            zIndex:-20,
        },
        imageContainer:{
            height:width*0.24,
            width: width*0.24*3/2,
            borderWidth:2,
            borderColor:'#11417d',

        }, 
        listViewContainer:{
            flexDirection:'row',
            width:width-32,
            height:width*0.24,
            backgroundColor:"white",
            marginTop:height*0.02,
            
            justifyContent:'space-around',


        },
        title:{
            fontSize:textSize,
            color: "#11417d",
        },
        iconPlusTexte:{
            zIndex:10,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'flex-start',
        },
        textInsideIcon:{
            fontSize: textSize*0.75,
            color: "#707070",
            zIndex:20,
         
        },
        
        textContainer:{
            backgroundColor:'white',
            flexDirection:'column',
            margin:4,
            justifyContent:'space-between',
        },
        iconsStyle:{
            flexDirection:'row',
            justifyContent:'space-between',
            flex:3,
            alignItems:'center',
            
        },
        textInsideIconSecond:{
            fontSize: textSize*0.75,
            color: "black",
            marginLeft:4,  
            zIndex:20,


        },
        twoLastIcons:{
            flexDirection:'column',
            justifyContent:'space-between',
            margin:2,
            flex:5,
            alignItems:'flex-end'
        }
        



    });
