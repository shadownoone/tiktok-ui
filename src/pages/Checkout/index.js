import React, { useState } from 'react';
import styles from './Checkout.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Checkout() {
    const [paymmentMethod, setPaymentMethod] = useState('payment-on-delivery');

    const handlePaymentChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    return (
        <div className={cx('mh-5-md')}>
            <section className={cx('main')}>
                <div className={cx('content')}>
                    <div className={cx('checkout')}>
                        <div className={cx('checkout__summary')}>
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
                                            <h3 className={cx('shipment__title-bold')}>
                                                Arrives Fri, May 10 - Thu, May 16
                                            </h3>
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
                        </div>
                        <div className={cx('checkout__body')}>
                            <div className={cx('section')}>
                                <div className={cx('section__heading')}>
                                    <h2>Enter your name and address:</h2>
                                </div>
                                <div className={cx('section__content')}>
                                    <div className={cx('mt-6')}>
                                        <form className={cx('contact-form')}>
                                            <div className={cx('wd-100pct')}>
                                                <div className={cx('text-input')}>
                                                    <input placeholder="Name" className={cx('pr-8')} />
                                                </div>
                                            </div>
                                            <div className={cx('wd-100pct')}>
                                                <div className={cx('text-input')}>
                                                    <input placeholder="Address" className={cx('pr-8')} />
                                                </div>
                                            </div>
                                            <div className={cx('wd-100pct')}>
                                                <div className={cx('text-input')}>
                                                    <input placeholder="Email" className={cx('pr-8')} />
                                                </div>
                                            </div>
                                            <div className={cx('wd-100pct')}>
                                                <div className={cx('text-input')}>
                                                    <input placeholder="Phone Number" className={cx('pr-8')} />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('section')}>
                                <div className={cx('section__heading')}>
                                    <h2>Payments</h2>
                                </div>
                                <div className={cx('section__content')}>
                                    <div className={cx('mt-6')}>
                                        <form className={cx('contact-form')}>
                                            <div className={cx('wd-100pct', 'mt-4')}>
                                                <div className={cx('select-input')}>
                                                    <select
                                                        onChange={handlePaymentChange}
                                                        value={paymmentMethod}
                                                        className={cx('pr-8')}
                                                    >
                                                        <option value="payment-on-delivery">Payment on delivery</option>
                                                        <option value="transfer-via-atm-internet-banking">
                                                            Transfer via ATM/Internet Banking
                                                        </option>
                                                    </select>
                                                    {paymmentMethod === 'transfer-via-atm-internet-banking' && (
                                                        <div className={cx('card')}>
                                                            <div className={cx('card-body')}>
                                                                <p>
                                                                    <img
                                                                        className={cx('img-fluid')}
                                                                        src="https://pibook.vn/upload/bank/VIETCOMBANK.png"
                                                                        alt=""
                                                                    />
                                                                </p>
                                                                <p>Ngân hàng Vietcombank</p>
                                                                <p>
                                                                    - Chủ Tài khoản:
                                                                    <strong>DO TIEN TAI</strong>
                                                                </p>
                                                                <p>
                                                                    - Số Tài khoản:
                                                                    <strong>0375538686</strong>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('gdpr-consent')}>
                                <label className={cx('checkbox-container')}>
                                    <div className={cx('input-checkbox')}>
                                        <label className={cx('input-checkbox__container')}>
                                            <input
                                                type="checkbox"
                                                id="gdpr"
                                                className={cx('ng-pristine')}
                                                required=""
                                            ></input>
                                            <div className={cx('help-text')}>
                                                <div className={cx('consent-description')}>
                                                    I have read and consent to eShopWorld processing my information in
                                                    accordance with the {''}
                                                    <a
                                                        className={cx('link-privacy')}
                                                        href="https://www.eshopworld.com/privacy-policy/"
                                                    >
                                                        Privacy Statement {''}
                                                    </a>
                                                    and
                                                    <a
                                                        href="https://www.eshopworld.com/cookie-policy/"
                                                        className={cx('link-cookie')}
                                                    >
                                                        {''} Cookie Policy {''}
                                                    </a>
                                                    . eShopWorld is a trusted Nike partner.
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </label>
                            </div>

                            <Button className={cx('btn-checkout')}>Place Order</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Checkout;
