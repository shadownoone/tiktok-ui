import React, { useState } from 'react';
import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import images from '~/assets/images';
import config from '~/config';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('container')}>
            <div className={cx('container__login')}>
                <div className={cx('container__login-header')}>
                    <div className={cx('logo')}>
                        <a href={'/'}>
                            <img style={{ height: '66px' }} className={cx('logo-main')} src={images.logo} alt="abc" />
                        </a>
                    </div>
                    <div className={cx('login-text')}>
                        <h2> BECOME A NIKE MEMBER</h2>
                    </div>

                    <form className={cx('info-mation')} action="">
                        <div className={cx('wd-100pct')}>
                            <div className={cx('text-input')}>
                                <input type="text" placeholder="Username" />
                            </div>
                        </div>
                        <div className={cx('wd-100pct')}>
                            <div className={cx('text-input')}>
                                <input type="password" placeholder="Password" />
                            </div>
                        </div>
                        <div className={cx('wd-100pct')}>
                            <div className={cx('text-input')}>
                                <input type="text" placeholder="Full Name" />
                            </div>
                        </div>
                        <div className={cx('wd-100pct')}>
                            <div className={cx('text-input')}>
                                <input type="text" placeholder="Address" />
                            </div>
                        </div>
                        <div className={cx('wd-100pct')}>
                            <div className={cx('text-input')}>
                                <input type="tel" placeholder="Phone" />
                            </div>
                        </div>
                        <div className={cx('wd-100pct')}>
                            <div className={cx('text-input')}>
                                <input type="email" placeholder="Email" />
                            </div>
                        </div>
                        <span>
                            <a style={{ textDecoration: 'underline' }} href={config.routes.login}>
                                have an account
                            </a>
                        </span>
                        <Button add_to_bag>Register</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
