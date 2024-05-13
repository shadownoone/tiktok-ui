import React from 'react';

import styles from './Cart.module.scss';

import classNames from 'classnames/bind';

import CartItem from './CartItem';
import Total from './Total';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('container')}>
            <main className={cx('css-1mogwid')}>
                <div className={cx('css-1efyhwg')}>
                    <div className={cx('css-1k22aut')}>
                        <div className={cx('css-8j20tp')}>
                            <h1>Bag</h1>
                            <div className={cx('css-1xvlvuc')}>
                                <CartItem />
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
