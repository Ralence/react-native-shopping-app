import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart } from '../../store/actions/card';
import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = (props) => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();


    return (
        <FlatList 
            data={products} 
            renderItem={itemData => (
                <ProductItem 
                    product={itemData.item} 
                    onAddToCart={() => dispatch(addToCart(itemData.item)) }
                    onViewDetails={() => {
                        props.navigation.navigate(
                            'ProductDetail', 
                            { 
                                productId: itemData.item.id,
                                productTitle: itemData.item.title
                            }
                            )
                    }} 
                />
            )} 
        />
    );
};
ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

export default ProductsOverviewScreen;
