import React, { useState, useEffect } from 'react';
import styles from './Checkout.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import OrderSummary from './OrderSummary';
import InfoForm from './InfoForm';
import Payment from './Payment';
import Check from './Check';

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

        if (isFormFilled) {
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
                                        <Payment
                                            paymentMethod={paymentMethod}
                                            handlePaymentChange={handlePaymentChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* GDPR-check */}
                            <Check handleGdprConsentChange={handleGdprConsentChange} />

                            <Button
                                className={cx('btn-checkout', { enabled: isFormFilled })}
                                onClick={handleSubmit}
                                disabled={!isFormFilled}
                            >
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
