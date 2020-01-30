import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart';
import CardItem from '../../models/cart-item';

const initialState = {
    items: {},
    totalAmount: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const productPrice = addedProduct.price;
            const productTitle = addedProduct.title;

            let updatedOrNewCardItem;
            
            if (state.items[addedProduct.id]) {
                // the product already exists in the cart
                updatedOrNewCardItem = new CardItem(
                    state.items[addedProduct.id].quantity + 1,
                    productPrice,
                    productTitle,
                    state.items[addedProduct.id].sum + productPrice
                );
            } else {
                // add a new product to the cart
                updatedOrNewCardItem = new CardItem(1, productPrice, productTitle, productPrice);
            }
            return {
                    ...state,
                    items: {
                        ...state.items,
                        [addedProduct.id]: updatedOrNewCardItem
                    } ,
                    totalAmount: state.totalAmount + productPrice
                };
            case REMOVE_FROM_CART:
                const selectedItem = state.items[action.productId];
                const currentQuantity = selectedItem.quantity;
                let updatedCartItems;

                if (currentQuantity > 1) {
                    // reduce the quantity
                    updatedCartItems = { 
                        ...state.items,
                        [action.productId]: { 
                            ...selectedItem,
                            quantity: selectedItem.quantity - 1,
                            sum: selectedItem.sum - selectedItem.productPrice
                        } 
                    }
                } else {
                    // remove the product
                    updatedCartItems = { ...state.items };
                    delete updatedCartItems[action.productId];
                }
                return {
                    ...state,
                    items: updatedCartItems,
                    totalAmount: state.totalAmount - selectedItem.productPrice
                }
        default:
            return state;
    }
}