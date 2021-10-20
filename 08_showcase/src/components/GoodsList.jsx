import { useContext } from 'react';
import { ShopContext } from '../states/context';
import GoodsItem from './GoodsItem';

function GoodsList() {
    const { goods = [] } = useContext(ShopContext);

    if (!goods.length) {
        return <h3>There is no shop item</h3>;
    }

    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem key={item.mainId} {...item} />
            ))}
        </div>
    );
}

export default GoodsList;
