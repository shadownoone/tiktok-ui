import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './OrderSummary.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function OrderSummary({ setOrderDetails }) {
    const cart = useSelector((state) => state.cart.cart);

    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cart.forEach((item) => {
            totalQuantity += item.quantity;
            totalPrice += item.price * item.quantity;
        });
        return { totalPrice, totalQuantity };
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price) + '₫';
    };

    useEffect(() => {
        console.log(cart);
        setOrderDetails(cart);
    }, [cart, setOrderDetails]);

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
                            <div className={cx('price-summary__price')}>{formatPrice(getTotal().totalPrice)}</div>
                        </div>
                        <div className={cx('price-summary__row')}>
                            <div>Delivery/Shipping</div>
                            <div className={cx('price-summary__price')}>Free</div>
                        </div>
                        <div className={cx('price-summary__row', 'price-summary__row--total')}>
                            <div>Total</div>
                            <div className={cx('price-summary__price')}>{formatPrice(getTotal().totalPrice)}</div>
                        </div>
                    </div>
                    <div className={cx('shipment')}>
                        <h3 className={cx('shipment__title-bold')}>Arrives Fri, May 10 - Thu, May 16</h3>
                        <div className={cx('mt-2')}>
                            {cart.map((item) => (
                                <div key={item.id} className={cx('cart-item')}>
                                    <img
                                        className={cx('cart-item__image')}
                                        src={item.ShoeImages[0].image_url}
                                        alt={item.product_name}
                                    />
                                    <div className={cx('cart-check')}>
                                        <h3>{item.product_name}</h3>
                                        <div className={cx('cart-item__info')}>Qty : {item.quantity}</div>
                                        <div className={cx('cart-item__info')}>Size : {item.selectedSize}</div>
                                        <div className={cx('cart-item__info', 'cart-item__group')}>
                                            <span>{formatPrice(item.price * item.quantity)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderSummary;
