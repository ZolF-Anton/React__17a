export function reducer(state, { type, payload }) {
    switch (type) {
        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.mainId === payload.mainId
            );
            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem];
                //countWork();
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        //countWork();
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }

            return {
                ...state,
                order: newOrder,
                alertName: payload.displayName,
            };
        }
        case 'INC_QUANTITY':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.mainId === payload.itemId) {
                        const newQuantity = el.quantity + 1;
                        return {
                            ...el,
                            quantity: newQuantity,
                        };
                    } else {
                        return el;
                    }
                }),
            };
        case 'DEC_QUANTITY':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.mainId === payload.itemId) {
                        const newQuantity = el.quantity - 1;
                        return {
                            ...el,
                            quantity: newQuantity >= 0 ? newQuantity : 0,
                        };
                    } else {
                        return el;
                    }
                }),
            };
        case 'CLOSE_ALERT':
            return { ...state, alertName: '' };

        case 'REMOVE_FROM_BASKET':
            return { ...state, order: state.order.filter((el) => el.mainId !== payload.itemId) };
        case 'TOGLE_BASKET':
            return {
                ...state,
                isBasketShow: state.isBasketShow((prevState) => !prevState),
            };
        default:
            return state;
    }
}
