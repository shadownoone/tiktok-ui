import React, { useState } from 'react';
import * as userService from '~/services/userService';

function Update({ customer, onCancel, updateCustomerData }) {
    const [formData, setFormData] = useState({
        fullName: customer.account_customer.fullName,
        email: customer.account_customer.email,
        phoneNumber: customer.account_customer.phoneNumber,
        address: customer.account_customer.address,
        profileImageUrl: customer.account_customer.profileImageUrl,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        userService
            .update({ ...formData, id: customer.account_customer.accountID }) // Ensure to include the user ID
            .then((res) => {
                if (res) {
                    console.log('User updated successfully:', res);
                    updateCustomerData(res.data); // Cập nhật dữ liệu người dùng mới vào state của component Profile
                    onCancel();
                } else {
                    console.error('Error updating user: Response data is undefined');
                }
            })
            .catch((error) => {
                console.error('Error updating user:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                    Full Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                </label>
                <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">
                    Address
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="profileImageUrl" className="form-label">
                    Profile Image URL
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="profileImageUrl"
                    name="profileImageUrl"
                    value={formData.profileImageUrl}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary me-2">
                Save
            </button>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
                Cancel
            </button>
        </form>
    );
}

export default Update;
