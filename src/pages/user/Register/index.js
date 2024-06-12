import React, { useState } from 'react';
import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import images from '~/assets/images';
import config from '~/config';
import { useNavigate } from 'react-router-dom';

import * as userService from '~/services/userService'; // Import user service

const cx = classNames.bind(styles);

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        fullName: '',
        address: '',
        phoneNumber: '',
        email: '',
        profileImageUrl: '', // Optional
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Submitting form data:', formData); // Debugging line
            await userService.createUser(formData);
            alert('User created successfully!');
            navigate('/login');
        } catch (error) {
            console.error('Error creating user:', error); // Debugging line
            alert('Error creating user: ' + error.message);
        }
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
                    <div className={cx('login-text')}>
                        <h2>BECOME A NIKE MEMBER</h2>
                    </div>

                    <form className={cx('info-mation')} onSubmit={handleSubmit}>
                        <div className={cx('wd-100pct')}>
                            <div className={cx('text-input')}>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className={cx('wd-100pct')}>
                            <div className={cx('text-input')}>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className={cx('wd-100pct')}>
                            <div className={cx('text-input')}>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className={cx('wd-100pct')}>
                            <div className={cx('text-input')}>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className={cx('wd-100pct')}>
                            <div className={cx('text-input')}>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Phone"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className={cx('wd-100pct')}>
                            <div className={cx('text-input')}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <span>
                            <a style={{ textDecoration: 'underline' }} href={config.routes.login}>
                                have an account
                            </a>
                        </span>
                        <Button type="submit" add_to_bag>
                            Register
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
