import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import CartItem from '../../components/shop/CartItem';

import Colors from '../../constants/Colors';

const CartScreen = props => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const itemsArray = [];
        const keys = Object.keys(state.cart.items);

        keys.forEach(key => {
            itemsArray.push({ ...state.cart.items[key], productId: key });
        });
        
        return itemsArray;
    });

    return(
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>
                    Total: <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
                </Text>
                <Button 
                    title='Order Now' 
                    color={Colors.accent} 
                    disabled={cartItems.length === 0}
                    onPress={() => {}} />
            </View>
            <View>
                <FlatList 
                    data={cartItems} 
                    keyExtractor={item => item.productId} 
                    renderItem={itemData => <CartItem product={itemData.item} onRemove={() => {}} />} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    },
    amount: {
        color: Colors.primary
    }
});

export default CartScreen;