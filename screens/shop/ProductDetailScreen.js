import React from 'react';
import {View, ScrollView, Text, Image, Button, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart } from '../../store/actions/cart';

import Colors from '../../constants/Colors';

const ProductDetailScreen = props => {
    const productId = props.navigation.getParam('productId');
    const product = useSelector(state => state.products.availableProducts.find(item => item.id === productId));
    const dispatch = useDispatch();

    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: product.imageUrl}} />
            <View style={styles.actions}>
                <Button color={Colors.primary} title='add to cart' onPress={() => dispatch(addToCart(product))} />
            </View>
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            <Text style={styles.description}>{product.description}</Text>
        </ScrollView>
    );
};

ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    actions: {
        marginVertical: 20,
        alignItems: 'center'
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: 'open-sans-bold'
    },
    description: {
        fontSize: 14,
        fontFamily: 'open-sans',
        textAlign: 'center',
        marginHorizontal: 20
    }
});

export default ProductDetailScreen;