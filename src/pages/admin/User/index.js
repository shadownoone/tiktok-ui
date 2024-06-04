import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './User.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import * as userService from '~/services/userService';
import CreateAndUpdate from './CreateAndUpdate';

const cx = classNames.bind(styles);

const User = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [newUser, setNewUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [reload, setReload] = useState(false);
    const usersPerPage = 5;

    useEffect(() => {
        userService
            .getUserAll()
            .then((res) => {
                setUsers(res);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, [reload]);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = users.filter(
        (user) =>
            user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.account_customer.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.account_customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.account_customer.phoneNumber.includes(searchTerm),
    );

    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const handleViewUser = (user) => {
        setSelectedUser(user);
    };

    const handleEditUser = (user) => {
        setNewUser(user);
        setShowForm(true);
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleCloseDetail = () => {
        setSelectedUser(null);
    };

    const handleAddUserClick = () => {
        setNewUser(null);
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const handleFormSubmit = (user) => {
        if (newUser) {
            // Update user logic
            userService.update(user.id, user).then(() => {
                setReload((prev) => !prev);
            });
        } else {
            // Create new user logic
            userService.createUser(user).then(() => {
                setReload((prev) => !prev);
            });
        }
        setShowForm(false);
    };

    return (
        <div className={cx('user-container')}>
            <h1>User Management</h1>
            <div className={cx('search-add')}>
                <input
                    type="text"
                    placeholder="Search users by username, full name, email, or phone number..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className={cx('search-input')}
                />
                <button onClick={handleAddUserClick} className={cx('add-button')}>
                    Add User
                </button>
            </div>
            <table className={cx('user-table')}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.account_customer?.fullName}</td>
                            <td>{user.account_customer?.email}</td>
                            <td>{user.account_customer?.phoneNumber}</td>
                            <td>{user.role ? 'Admin' : 'User'}</td>
                            <td className={cx('actions')}>
                                <button onClick={() => handleViewUser(user)} className={cx('action-button')}>
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                                <button onClick={() => handleEditUser(user)} className={cx('action-button')}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button className={cx('action-button', 'delete-button')}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={cx('pagination')}>
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={cx('pagination-button')}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                {[...Array(Math.ceil(filteredUsers.length / usersPerPage)).keys()].map((number) => (
                    <button
                        key={number + 1}
                        onClick={() => paginate(number + 1)}
                        className={cx('pagination-button', {
                            active: currentPage === number + 1,
                        })}
                    >
                        {number + 1}
                    </button>
                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === Math.ceil(filteredUsers.length / usersPerPage)}
                    className={cx('pagination-button')}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>

            {selectedUser && (
                <div className={cx('overlay')}>
                    <div className={cx('detail-container')}>
                        <h2>User Detail</h2>
                        <p>
                            <strong>ID:</strong> {selectedUser.id}
                        </p>
                        <p>
                            <strong>Username:</strong> {selectedUser.username}
                        </p>
                        <p>
                            <strong>Full Name:</strong> {selectedUser.account_customer.fullName}
                        </p>
                        <p>
                            <strong>Email:</strong> {selectedUser.account_customer.email}
                        </p>
                        <p>
                            <strong>Address:</strong> {selectedUser.account_customer.address}
                        </p>
                        <p>
                            <strong>Phone Number:</strong> {selectedUser.account_customer.phoneNumber}
                        </p>
                        <p>
                            <strong>Role:</strong> {selectedUser.role ? 'Admin' : 'User'}
                        </p>
                        <button onClick={handleCloseDetail} className={cx('close-button')}>
                            Close
                        </button>
                    </div>
                </div>
            )}

            {showForm && (
                <CreateAndUpdate onClose={handleCloseForm} onSubmit={handleFormSubmit} initialData={newUser} />
            )}
        </div>
    );
};

export default User;
