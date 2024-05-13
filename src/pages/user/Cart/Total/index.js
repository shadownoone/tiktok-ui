import React from 'react';

import styles from './Total.module.scss';

import classNames from 'classnames/bind';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function Total() {
    return (
        <div className={cx('css-fmwpya')}>
            <aside className={cx('css-1gkmirf')}>
                <h2 className={cx('css-22zdcr')}>Summary</h2>
                <div className={cx('css-1uo8q9v')}>
                    Subtotal
                    <div className={cx('css-1wwm6t9')}>
                        <div className={cx('css-bvtceq')}>
                            <Button className={cx('css-dw6iwb')}></Button>
                            <div className={cx('css-16m8u5c')}>
                                The subtotal reflects the total price of your order, including taxes, before any
                                applicable discounts. It does not include delivery costs and international transaction
                                fees.
                            </div>
                        </div>
                    </div>
                    <div className={cx('css-1rvmomr')}>
                        <span>
                            <span>2,929,000₫</span>
                        </span>
                    </div>
                </div>
                <div className={cx('css-1uo8q9v')}>
                    Estimated Delivery & Handling
                    <div className={cx('css-1rvmomr')}>
                        <span>
                            <span>250,000₫</span>
                        </span>
                    </div>
                </div>
                <div className={cx('css-1tsu91r')}>
                    <p>Total</p>
                    <span>
                        <span>
                            <span>3,179,000₫</span>
                        </span>
                    </span>
                </div>
                <div className={cx('css-1e78l50')}>
                    <Button add_to_bag className={cx('btn-add-to-bag')}>
                        Guest Checkout
                    </Button>
                    <Button add_to_bag className={cx('btn-add-to-bag')}>
                        Member Checkout
                    </Button>
                </div>
            </aside>
        </div>
    );
}

export default Total;
