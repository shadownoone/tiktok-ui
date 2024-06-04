import React, { useState, useEffect } from 'react';
import styles from './Checkout.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import OrderSummary from './OrderSummary';
import InfoForm from './InfoForm';
import Payment from './Payment';
import Check from './Check';

import * as orderService from '~/services/orderService';
import * as userService from '~/services/userService';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Checkout() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        phoneNumber: '',
    });

    const [customer, setCustomer] = useState(null);

    const userProfile = useSelector((state) => state.account);

    useEffect(() => {
        if (userProfile?.userInfo?.user?.id) {
            userService.getUserById(userProfile.userInfo.user.id).then((res) => {
                setCustomer(res.data);
            });
        }
    }, [userProfile]);

    const [gdprConsent, setGdprConsent] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('payment-on-delivery');
    const [isFormFilled, setIsFormFilled] = useState(false);
    const [orderDetails, setOrderDetails] = useState([]); // Assuming you have a way to set this from OrderSummary

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isFormFilled && customer) {
            const orderData = {
                customer_id: customer.id, // Use the ID from the authenticated user
                order_date: new Date().toISOString(),
                total_amount: calculateTotalAmount(orderDetails), // Assuming you have a function to calculate this
                status: 'pending',
                orderDetails: orderDetails,
                name: formData.name,
                address: formData.address,
                email: formData.email,
                phone: formData.phoneNumber,
            };

            try {
                await orderService.createOrder(orderData);
                alert('Đặt hàng thành công!');
            } catch (error) {
                console.error('Error creating order:', error);
                alert('Đặt hàng thất bại. Vui lòng thử lại.');
            }
        } else {
            alert('Please fill in all required information and consent to GDPR policy.');
        }
    };

    const calculateTotalAmount = (details) => {
        return details.reduce((total, item) => total + item.quantity * item.price, 0);
    };

    return (
        <div className={cx('mh-5-md')}>
            <section className={cx('main')}>
                <div className={cx('content')}>
                    <div className={cx('checkout')}>
                        <div className={cx('checkout__summary')}>
                            <OrderSummary setOrderDetails={setOrderDetails} />
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
