import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    counter: 0,
    isBasketShow: false,
    alertName: '',
};

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' });
    };

    value.addToBasket = (item) => {
        dispatch({ type: 'ADD_TO_BASKET', payload: item });
    };

    value.incQuantity = (itemId) => {
        dispatch({ type: 'INC_QUANTITY', payload: { mainId: itemId } });
    };
    value.decQuantity = (itemId) => {
        dispatch({ type: 'DEC_QUANTITY', payload: { mainId: itemId } });
    };

    value.removeFromBasket = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_BASKET', payload: { mainId: itemId } });
    };
    value.handleBasketShow = () => {
        dispatch({ type: 'TOGLE_BASKET' });
    };
    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
