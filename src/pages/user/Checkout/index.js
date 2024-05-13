import React, { useState, useEffect } from 'react';
import styles from './Checkout.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import OrderSummary from './OrderSummary';
import InfoForm from './InfoForm';

const cx = classNames.bind(styles);

function Checkout() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        phoneNumber: '',
    });

    const [gdprConsent, setGdprConsent] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('payment-on-delivery');
    const [isFormFilled, setIsFormFilled] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleGdprConsentChange = (event) => {
        setGdprConsent(event.target.checked);
    };

    const handlePaymentChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    useEffect(() => {
        const isFormValid = Object.values(formData).every((value) => value !== '') && gdprConsent;
        setIsFormFilled(isFormValid);
    }, [formData, gdprConsent]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const isFormValid = Object.values(formData).every((value) => value !== '') && gdprConsent;

        if (isFormValid) {
            console.log('Form is valid. Place order action can be executed.');
        } else {
            alert('Please fill in all required information and consent to GDPR policy.');
        }
    };

    return (
        <div className={cx('mh-5-md')}>
            <section className={cx('main')}>
                <div className={cx('content')}>
                    <div className={cx('checkout')}>
                        <div className={cx('checkout__summary')}>
                            <OrderSummary />
                        </div>
                        <div className={cx('checkout__body')}>
                            <div className={cx('section')}>
                                <div className={cx('section__heading')}>
                                    <h2>Enter your name and address:</h2>
                                </div>
                                <div className={cx('section__content')}>
                                    <div className={cx('mt-6')}>
                                        <InfoForm formData={formData} handleInputChange={handleInputChange} />
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
                                                        value={paymentMethod}
                                                        className={cx('pr-8')}
                                                    >
                                                        <option value="payment-on-delivery">Payment on delivery</option>
                                                        <option value="transfer-via-atm-internet-banking">
                                                            Transfer via ATM/Internet Banking
                                                        </option>
                                                    </select>
                                                    {paymentMethod === 'transfer-via-atm-internet-banking' && (
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
                                                required=""
                                                onChange={handleGdprConsentChange}
                                            />
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

                            <Button className={cx('btn-checkout')} onClick={handleSubmit} disabled={!isFormFilled}>
                                Place Order
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Checkout;
