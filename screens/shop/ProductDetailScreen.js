import React from 'react';
import {View, ScrollView, Text, Image, Button, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetailScreen = props => {
    const productId = props.navigation.getParam('productId');
    const product = useSelector(state => state.products.availableProducts.find(item => item.id === productId))

    return (
        <View><Text>Product detail page for {product.title}</Text></View>
    );
};

ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    }
}

const styles = StyleSheet.create({

});

export default ProductDetailScreen;