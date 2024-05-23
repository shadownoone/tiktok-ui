import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Order = () => {
    const initialOrders = [
        // Dữ liệu mẫu
        { id: 1, customerName: 'John Doe', orderDate: '2024-05-20', status: 'Pending' },
        { id: 2, customerName: 'Jane Smith', orderDate: '2024-05-19', status: 'Completed' },
        { id: 3, customerName: 'Bob Johnson', orderDate: '2024-05-18', status: 'Shipped' },
        { id: 4, customerName: 'Alice Brown', orderDate: '2024-05-17', status: 'Pending' },
        { id: 5, customerName: 'Charlie Davis', orderDate: '2024-05-16', status: 'Completed' },
        { id: 6, customerName: 'Dave Wilson', orderDate: '2024-05-15', status: 'Shipped' },
        // Thêm nhiều dữ liệu mẫu để test
    ];

    const [orders, setOrders] = useState(initialOrders);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const ordersPerPage = 5;

    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    const handleViewOrder = (order) => {
        setSelectedOrder(order);
    };

    const handleEditOrder = (id) => {
        alert(`Editing order with ID: ${id}`);
    };

    const handleDeleteOrder = (id) => {
        setOrders(orders.filter((order) => order.id !== id));
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleCloseDetail = () => {
        setSelectedOrder(null);
    };

    return (
        <div className={cx('order-container')}>
            <h1>Order Management</h1>
            <table className={cx('order-table')}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer Name</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentOrders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customerName}</td>
                            <td>{order.orderDate}</td>
                            <td>{order.status}</td>
                            <td className={cx('actions')}>
                                <button onClick={() => handleViewOrder(order)} className={cx('action-button')}>
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                                <button onClick={() => handleEditOrder(order.id)} className={cx('action-button')}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button
                                    onClick={() => handleDeleteOrder(order.id)}
                                    className={cx('action-button', 'delete-button')}
                                >
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
                {[...Array(Math.ceil(orders.length / ordersPerPage)).keys()].map((number) => (
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
                    disabled={currentPage === Math.ceil(orders.length / ordersPerPage)}
                    className={cx('pagination-button')}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>

            {selectedOrder && (
                <div className={cx('overlay')}>
                    <div className={cx('detail-container')}>
                        <h2>Order Detail</h2>
                        <p>
                            <strong>ID:</strong> {selectedOrder.id}
                        </p>
                        <p>
                            <strong>Customer Name:</strong> {selectedOrder.customerName}
                        </p>
                        <p>
                            <strong>Order Date:</strong> {selectedOrder.orderDate}
                        </p>
                        <p>
                            <strong>Status:</strong> {selectedOrder.status}
                        </p>
                        <button onClick={handleCloseDetail} className={cx('close-button')}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Order;
