import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

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
        <main className='container content '>
            {loading ? <Preloader /> : <GoodsList goods={goods} />}
        </main>
    );
}

export default Shop;
