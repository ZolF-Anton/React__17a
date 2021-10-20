import { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';

import { ShopContext } from '../states/context';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

function Shop() {
    const { loading, order, setGoods, isBasketShow, alertName } = useContext(ShopContext);

    // const countWork = () => {
    //     setCounter((prevState) => prevState + 1);
    // };

    useEffect(function getGoods() {
        fetch(API_URL, { headers: { Authorization: API_KEY } })
            .then((response) => response.json())
            .then((data) => {
                if (data.result) {
                    setGoods(data.shop);
                } else {
                    setGoods([]);
                }
            });
    }, []);

    return (
        <main className="container content ">
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <GoodsList />}
            {isBasketShow && <BasketList />}
            {alertName && <Alert />}
        </main>
    );
}

export default Shop;
