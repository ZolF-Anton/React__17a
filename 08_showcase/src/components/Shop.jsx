import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [counter, setCounter] = useState(0);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

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
        setAlertName(item.displayName);
    };

    const removeFromBasket = (itemId) => {
        const newOrder = order.filter((el) => el.mainId !== itemId);
        setOrder(newOrder);
    };

    const incQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.mainId === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };
    const decQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.mainId === itemId) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };

    const handleBasketShow = () => {
        setBasketShow((prevState) => !prevState);
    };

    const closeAlert = () => {
        setAlertName('');
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
            <Cart quantity={counter} handleBasketShow={handleBasketShow} />
            {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}
            {isBasketShow && (
                <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                />
            )}
            {alertName && <Alert displayName={alertName} closeAlert={closeAlert} />}
        </main>
    );
}

export default Shop;
