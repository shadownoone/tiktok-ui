import React from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('container')}>
            <div className={cx('container__login')}>
                <div className={cx('container__login-header')}>
                    <div className={cx('logo')}>
                        <a href={'/'}>
                            <img className={cx('logo-main')} src={images.logo} alt="abc" />
                        </a>
                    </div>
                    <div className={cx('login-text')}>YOUR ACCOUNT FOR EVERYTHING NIKE</div>
                    <form className={cx('info-mation')} action>
                        <div className={cx('wd-100pct')}>
                            <div className={cx('text-input')}>
                                <input placeholder="Username" />
                            </div>
                        </div>
                        <div className={cx('wd-100pct')}>
                            <div className={cx('text-input')}>
                                <input type="Password" placeholder="password" />
                            </div>
                        </div>
                        <Button add_to_bag>Login</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
