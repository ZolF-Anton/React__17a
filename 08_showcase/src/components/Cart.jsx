import { useContext } from 'react';
import { ShopContext } from '../states/context';

function Cart() {
    const { order = 0, handleBasketShow = Function.prototype } = useContext(ShopContext);
    const quantity = order.reduce((sum, el) => {
        return sum + el.quantity;
    }, 0);
    return (
        <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    );
}

export default Cart;
