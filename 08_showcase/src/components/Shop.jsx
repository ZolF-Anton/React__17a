import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [counter, setCounter] = useState(0);
    const [isBasketShow, setIsBasketShow] = useState(false);

    const countWork = () => {
        setCounter((prevState) => prevState + 1);
    };

    const addToBasket = (item) => {
        const itemIndex = order.findIndex((orderItem) => orderItem.mainId === item.mainId);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
            countWork();
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    countWork();
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
    };

    useEffect(function getGoods() {
        fetch(API_URL, { headers: { Authorization: API_KEY } })
            .then((response) => response.json())
            .then((data) => {
                if (data.result) {
                    console.log(data.result, 'true');
                    setGoods(data.shop);
                    setLoading(false);
                } else {
                    setLoading(true);
                }
            });
    }, []);

    return (
        <main className="container content ">
            <Cart quantity={counter} />
            {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}
        </main>
    );
}

export default Shop;
