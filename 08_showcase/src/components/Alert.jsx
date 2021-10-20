import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../states/context';

function Alert() {
    const { alertName = '', closeAlert = Function.prototype } = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        };
    }, [alertName]);

    return (
        <div id="toast-container">
            <div className="toast">{alertName} в корзине!</div>
        </div>
    );
}

export default Alert;
