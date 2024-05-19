import React from 'react';
import styles from './Payment.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Payment({ handlePaymentChange, paymentMethod }) {
    return (
        <div>
            <form className={cx('contact-form')}>
                <div className={cx('wd-100pct', 'mt-4')}>
                    <div className={cx('select-input')}>
                        <select onChange={handlePaymentChange} value={paymentMethod} className={cx('pr-8')}>
                            <option value="payment-on-delivery">Payment on delivery</option>
                            <option value="transfer-via-atm-internet-banking">Transfer via ATM/Internet Banking</option>
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
    );
}

export default Payment;
