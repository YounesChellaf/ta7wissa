import React, { Component } from 'react';
import {Dimensions, Image, FlatList, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons';

import { Button, Divider, Input, Block, Text } from '../components';
import { theme, mocks } from '../constants';

const { width, height } = Dimensions.get('window');

class Product extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerRight: (
        <Button onPress={() => {}}>
        </Button>
      )
    }
  }

  renderGallery() {
    const { product, navigation } = this.props;
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        data={product.images}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item}) => (
          <Image
            source={item}
            resizeMode="contain"
            style={{ width, height: height / 2.8 }}
          />
        )}
      />
    );
  }

  render() {
    const { product,navigation } = this.props;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {this.renderGallery()}

        <Block style={styles.product}>
          <Text h2 bold>{product.name}</Text>
          <Block flex={false} row margin={[theme.sizes.base, 0]}>
            {product.tags.map(tag => (
              <Text key={`tag-${tag}`} caption gray style={styles.tag}>
                {tag}
              </Text>
            ))}
          </Block>
          <Text gray light height={22}>{product.description}</Text>
          
          <Divider margin={[theme.sizes.padding * 0.9, 0]} />
            <Button gradient onPress={() => navigation.navigate('Plan')}>
                    <Text bold white center>Details du plan</Text>
            </Button>
        </Block>
      </ScrollView>
    )
  }
}

Product.defaultProps = {
  product: mocks.products[0],
}

export default Product;

const styles = StyleSheet.create({
  product: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingVertical: theme.sizes.padding,
  },
  tag: {
    borderColor: theme.colors.gray2,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: theme.sizes.base,
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.base / 2.5,
    marginRight: theme.sizes.base * 0.625,
  },
  image: {
    width: width / 3.26,
    height: width / 3.26,
    marginRight: theme.sizes.base,
  },
  more: {
    width: 55,
    height: 55,
  }
})
