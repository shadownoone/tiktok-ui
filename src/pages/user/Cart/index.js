import React from 'react';

import styles from './Cart.module.scss';

import classNames from 'classnames/bind';

import CartItem from './CartItem';
import Total from './Total';
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);

function Cart() {
    const cart = useSelector((state) => state.cart.cart);
    console.log(cart);

    return (
        <div className={cx('container')}>
            <main className={cx('css-1mogwid')}>
                <div className={cx('css-1efyhwg')}>
                    <div className={cx('css-1k22aut')}>
                        <div className={cx('css-8j20tp')}>
                            <h1>Bag</h1>
                            <div className={cx('css-1xvlvuc')}>
                                {cart.map((item) => {
                                    return <CartItem key={item.id} data={item} />;
                                })}
                            </div>
                        </div>
                        {/* Total */}
                        <Total />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Cart;
