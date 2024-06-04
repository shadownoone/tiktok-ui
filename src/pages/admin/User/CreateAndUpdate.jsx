import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './User.module.scss';

const cx = classNames.bind(styles);

const CreateAndUpdate = ({ onClose, onSubmit, initialData }) => {
    const [formData, setFormData] = useState(
        initialData || {
            fullName: '',
            email: '',
            address: '',
            phoneNumber: '',
            profileImageUrl: '',
            username: '',
            password: '',
            role: false,
        },
    );

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className={cx('overlay')}>
            <div className={cx('form-container')}>
                <h2>{initialData ? 'Update User' : 'Add New User'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className={cx('form-group')}>
                        <label>Full Name</label>
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                    </div>
                    <div className={cx('form-group')}>
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className={cx('form-group')}>
                        <label>Address</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                    </div>
                    <div className={cx('form-group')}>
                        <label>Image</label>
                        <input
                            type="text"
                            name="profileImageUrl"
                            value={formData.profileImageUrl}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <label>Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <label>Username</label>
                        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className={cx('form-group')}>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <label>
                            <input type="checkbox" name="role" checked={formData.role} onChange={handleChange} />
                            Admin
                        </label>
                    </div>
                    <button type="submit" className={cx('submit-button')}>
                        {initialData ? 'Update User' : 'Add User'}
                    </button>
                    <button type="button" onClick={onClose} className={cx('close-button')}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateAndUpdate;
