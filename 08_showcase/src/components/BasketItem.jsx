import { useContext } from 'react';
import { ShopContext } from '../states/context';

function BasketItem(props) {
    const { mainId, displayName, price, quantity } = props;

    const { removeFromBasket, incQuantity, decQuantity } = useContext(ShopContext);
    return (
        <li className="collection-item">
            {displayName} x{quantity} = {quantity * price.finalPrice}
            <span href="#!" className="secondary-content">
                <i className="material-icons basket-del" onClick={() => incQuantity(mainId)}>
                    add
                </i>
                <i className="material-icons basket-del" onClick={() => decQuantity(mainId)}>
                    remove
                </i>
                <i className="material-icons basket-del" onClick={() => removeFromBasket(mainId)}>
                    block
                </i>
            </span>
        </li>
    );
}

export default BasketItem;
