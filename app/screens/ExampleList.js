import React from 'react';

import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
    TouchableOpacity,Text
} from 'react-native';

import Row from './Row';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 10 : 0;

state = {
    firstQuery: '',
};
const { firstQuery } = this.state;
export default () => (
    <HeaderImageScrollView
        maxHeight={220}
        minHeight={0}
        minOverlayOpacity={0.4}
        maxOverlayOpacity={0.9}
        borderRadius={20}
        headerImage={require("../assets/header.jpeg")}
        renderForeground={() => (
            <View style={{ height: 100, justifyContent: "center", alignItems: "center" }} >
                <TouchableOpacity onPress={() => console.log("tap!!")}>

                </TouchableOpacity>
            </View>
        )}
    >
        <View>
                <View style={styles.container}>
                    <StatusBar
                        barStyle="light-content"
                    />
                    <ScrollView
                        style={styles.scrollView}
                    >
                        <Row zIndex={100} />
                        <Row zIndex={90} />
                        <Row zIndex={80} />
                        <Row zIndex={70} />
                        <Row zIndex={70} />
                        <Row zIndex={70} />
                        <Row zIndex={70} />
                        <Row zIndex={70} />
                    </ScrollView>
                </View>

        </View>
    </HeaderImageScrollView>
);
const styles = StyleSheet.create({
    container: {

    },
    scrollView: {
        backgroundColor: '#ffffff',
        flex: 1,
        padding:0 ,
        paddingTop: STATUSBAR_HEIGHT,
    },
    SearchView : {
        marginTop: 150,
        height: 40,
        width: 300,
        borderRadius: 30,
        opacity: 0.7
    },
});
