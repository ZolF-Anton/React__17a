import { useContext } from 'react';
import { ShopContext } from '../states/context';
import BasketItem from './BasketItem';

function BasketList() {
    const { order = [], handleBasketShow = Function.prototype } = useContext(ShopContext);
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price.finalPrice * el.quantity;
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {order.length ? (
                order.map((item) => <BasketItem key={item.mainId} {...item} />)
            ) : (
                <li className="collection-item">Корзина Пуста</li>
            )}
            <li className="collection-item active">Итого: {totalPrice} ₽</li>
            <li className="collection-checkout">
                <button className="secondary-content btn btn-small">ОФОРМИТЬ</button>
            </li>
            <li className="material-icons basket-close" onClick={handleBasketShow}>
                clear
            </li>
        </ul>
    );
}

export default BasketList;
