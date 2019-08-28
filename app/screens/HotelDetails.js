import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform , TouchableOpacity} from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

export default class HotelDetails extends Component{

    render() {
        return (
            <HeaderImageScrollView
                maxHeight={250}
                minHeight={100}
                headerImage={require("../assets/hotel.jpeg")}
                renderForeground={() => (
                    <View style={{ height: 150, justifyContent: "center", alignItems: "center" }} >
                        <TouchableOpacity onPress={() => console.log("tap!!")}>
                            <Text style={{ backgroundColor: "transparent" }}>Tape!</Text>
                        </TouchableOpacity>
                    </View>
                )}
            >
                <View style={{backgroundColor: '#000' , borderRadius:20}} >
                    <TriggeringView onHide={() => console.log("text hidden")} style={{borderRadius:20}}>
                        <Text>Scroll Me!</Text>
                    </TriggeringView>
                </View>
            </HeaderImageScrollView>
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