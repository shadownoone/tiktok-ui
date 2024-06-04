import React, { useRef, useState } from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import images from '~/assets/images';

import config from '~/config';
import login from '~/services/loginService';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '~/redux/accountSlice';

const cx = classNames.bind(styles);

function Login() {
    const user = useSelector((state) => state.account);
    const dispatch = useDispatch();

    const [formValue, setFormValue] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChangeFormValue = (e) => {
        const target = e.target;

        setFormValue((prev) => ({ ...prev, [target.name]: target.value }));
    };

    const handleSubmit = () => {
        login(formValue).then((res) => {
            dispatch(userLogin(res));
            if (res.user.role === true) {
                navigate('/admin/dashboard');
            } else {
                navigate('/');
            }
        });
    };

    return (
        <div className={cx('container')}>
            <div className={cx('container__login')}>
                <div className={cx('container__login-header')}>
                    <div className={cx('logo')}>
                        <a href={'/'}>
                            <img style={{ height: '66px' }} className={cx('logo-main')} src={images.logo} alt="abc" />
                        </a>
                    </div>
                    <div className={cx('login-text')}>YOUR ACCOUNT FOR EVERYTHING NIKE</div>
                    <div className={cx('info-mation')}>
                        <div className={cx('wd-100pct')}>
                            <div className={cx('text-input')}>
                                <input
                                    value={formValue.username}
                                    onChange={handleChangeFormValue}
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>
                        </div>
                        <div className={cx('wd-100pct')}>
                            <div className={cx('text-input')}>
                                <input
                                    value={formValue.password}
                                    onChange={handleChangeFormValue}
                                    name="password"
                                    type="Password"
                                    placeholder="password"
                                />
                            </div>
                        </div>
                        <span>
                            <a style={{ textDecoration: 'underline' }} href={config.routes.register}>
                                Don't have an account
                            </a>
                        </span>
                        <Button onClick={handleSubmit} add_to_bag>
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
