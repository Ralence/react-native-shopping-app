import React from 'react';
import { View, Text, FlatList, StyleSheet, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { addToCart } from '../../store/actions/cart';
import ProductItem from '../../components/shop/ProductItem';
import HeaderButton from '../../components/UI/HeaderButton';

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
ProductsOverviewScreen.navigationOptions = navData => ({
    headerTitle: 'All Products',
    headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Cart' iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} onPress={() => {navData.navigation.navigate('Cart')}} />
    </HeaderButtons>
})

export default ProductsOverviewScreen;
