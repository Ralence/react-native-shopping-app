import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const ProductsOverviewScreen = () => {
    const products = useSelector(state => state.products.availableProducts);

    return (
        <FlatList data={products} renderItem={itemData => <Text>{itemData.item.title}</Text>} />
    );
};
ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

export default ProductsOverviewScreen;
