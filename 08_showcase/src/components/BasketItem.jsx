function BasketItem(props) {
    const {
        mainId,
        displayName,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    return (
        <li className="collection-item">
            {displayName} x{quantity} = {quantity * price.finalPrice}
            <span href="#!" className="secondary-content" onClick={() => removeFromBasket(mainId)}>
                <i className="material-icons basket-del">block</i>
                <i className="material-icons basket-del">block</i>
                <i className="material-icons basket-del">block</i>
            </span>
        </li>
    );
}

export default BasketItem;
