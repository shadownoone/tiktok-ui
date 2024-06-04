import React from 'react';
import styles from './Total.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Total() {
    const cart = useSelector((state) => state.cart.cart);
    const navigate = useNavigate(); // Use useNavigate hook

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
        return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
    };

    const handleCheckout = () => {
        navigate('/checkout'); // Use navigate function
    };

    return (
        <div className={cx('css-fmwpya')}>
            <aside className={cx('css-1gkmirf')}>
                <h2 className={cx('css-22zdcr')}>Summary</h2>
                <div className={cx('css-1uo8q9v')}>
                    Subtotal
                    <div className={cx('css-1rvmomr')}>
                        <span>
                            <span>${formatPrice(getTotal().totalPrice)}</span>
                        </span>
                    </div>
                </div>
                {/* <div className={cx('css-1uo8q9v')}>
                    Estimated Delivery & Handling
                    <div className={cx('css-1rvmomr')}>
                        <span>
                            <span>250,000₫</span>
                        </span>
                    </div>
                </div> */}
                <div className={cx('css-1uo8q9v')}>
                    Discount Price
                    <div className={cx('css-1rvmomr')}>
                        <span>
                            <span>0₫</span>
                        </span>
                    </div>
                </div>
                <div className={cx('css-1tsu91r')}>
                    <p>Total</p>
                    <span>
                        <span>
                            <span>${formatPrice(getTotal().totalPrice)}</span>
                        </span>
                    </span>
                </div>
                <div className={cx('css-1e78l50')}>
                    <Button add_to_bag className={cx('btn-add-to-bag')} onClick={handleCheckout}>
                        Guest Checkout
                    </Button>
                    <Button add_to_bag className={cx('btn-add-to-bag')} onClick={handleCheckout}>
                        Member Checkout
                    </Button>
                </div>
            </aside>
        </div>
    );
}

export default Total;
