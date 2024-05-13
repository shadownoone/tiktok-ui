import React from 'react';
import styles from './OrderSummary.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function OrderSummary() {
    return (
        <div className={cx('order-summary')}>
            <div className={cx('order-summary__container')}>
                <div className={cx('pt-5-md')}>
                    <h2>Order Summary</h2>
                </div>
                <div className={cx('order-summary__container__content')}>
                    <div className={cx('price-summary')}>
                        <div className={cx('price-summary__row')}>
                            <div>Subtotal</div>
                            <div className={cx('price-summary__price')}>6,168,000₫</div>
                        </div>
                        <div className={cx('price-summary__row')}>
                            <div>Delivery/Shipping</div>
                            <div className={cx('price-summary__price')}>Free</div>
                        </div>
                        <div className={cx('price-summary__row', 'price-summary__row--total')}>
                            <div>Total</div>
                            <div className={cx('price-summary__price')}> 6,168,000₫ </div>
                        </div>
                    </div>
                    <div className={cx('shipment')}>
                        <h3 className={cx('shipment__title-bold')}>Arrives Fri, May 10 - Thu, May 16</h3>
                        <div className={cx('mt-2')}>
                            <div className={cx('cart-item')}>
                                <img
                                    className={cx('cart-item__image')}
                                    src="https://static.nike.com/a/images/f_jpg,b_rgb:FFFFFF,q_auto,h_400/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/CW2288_111"
                                    alt=""
                                />
                                <div className={cx('cart-check')}>
                                    <h3>Nike Air Force 1 '07 Men's Shoes</h3>
                                    <div className={cx('cart-item__info')}>Qty : 1</div>
                                    <div className={cx('cart-item__info')}>Size : EU 44</div>
                                    <div className={cx('cart-item__info', 'cart-item__group')}>
                                        <span>2,929,000₫</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderSummary;
