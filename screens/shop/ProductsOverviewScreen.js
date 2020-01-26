import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = () => {
    const products = useSelector(state => state.products.availableProducts);

    return (
        <FlatList 
            data={products} 
            renderItem={itemData => <ProductItem product={itemData.item} onAddToCart={() => {}} onViewDetails={() => {}} />} 
        />
    );
};
ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

export default ProductsOverviewScreen;
