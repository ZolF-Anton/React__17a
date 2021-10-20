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

    value.incQuantity = (Id) => {
        console.log('incQuantity');
        dispatch({ type: 'INC_QUANTITY', payload: { itemId: Id } });
    };
    value.decQuantity = (mainId) => {
        console.log('decQuantity');
        dispatch({ type: 'DEC_QUANTITY', payload: { mainId: mainId } });
    };

    value.removeFromBasket = (mainId) => {
        console.log('remove');
        dispatch({ type: 'REMOVE_FROM_BASKET', payload: { mainId: mainId } });
    };
    value.handleBasketShow = () => {
        dispatch({ type: 'TOGLE_BASKET' });
    };
    value.setGoods = (data) => {
        dispatch({ type: 'SET_GOODS', payload: data });
    };
    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
