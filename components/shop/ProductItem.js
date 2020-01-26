import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

import Colors from '../../constants/Colors';

const ProductItem = ({product, onAddToCart, onViewDetails}) => {
    let TouchableComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback
    }
    
    return (
        <TouchableComponent onPress={onViewDetails} useForeground>
            <View style={styles.product}>
                <Image style={styles.image} source={{uri: product.imageUrl}} />
                <View style={styles.details}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                </View>
                <View style={styles.actions}>
                    <Button color={Colors.primary} title='View details' onPress={onViewDetails} />
                    <Button color={Colors.accent} title='To cart' onPress={onAddToCart} />
                </View>
            </View>
        </TouchableComponent>     
    );
};

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '60%'
    },
    details: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '15%',
        padding: 5
    },
    title: {
        fontSize: 18,
        marginVertical: 2,
        fontFamily: 'open-sans-bold'
    },
    price: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'open-sans'
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '25%',
        paddingHorizontal: 20
    }
});

export default ProductItem;