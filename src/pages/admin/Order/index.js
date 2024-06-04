import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';

import * as orderService from '~/services/orderService';

const cx = classNames.bind(styles);

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const ordersPerPage = 5;

    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;

    useEffect(() => {
        orderService
            .getOrderAll()
            .then((res) => {
                // Group orders by ID
                const groupedOrders = res.reduce((acc, order) => {
                    console.log(res);
                    const existingOrder = acc.find((o) => o.id === order.id);
                    if (existingOrder) {
                        // Add order detail to existing order
                        existingOrder.OrderDetail.push(order.OrderDetail);
                    } else {
                        // Add new order
                        acc.push({ ...order, OrderDetail: [order.OrderDetail] });
                    }
                    return acc;
                }, []);
                setOrders(groupedOrders);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredOrders = orders.filter(
        (order) =>
            order.Customer &&
            order.Customer.fullName &&
            order.Customer.fullName.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

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

    const formatOrderDate = (isoString) => {
        const date = new Date(isoString);
        return format(date, 'MMMM d, yyyy, h:mm a');
    };

    return (
        <div className={cx('order-container')}>
            <h1>Order Management</h1>
            <div className={cx('search-add')}>
                <input
                    type="text"
                    placeholder="Search orders by customer name..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className={cx('search-input')}
                />
            </div>
            <table className={cx('order-table')}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer Name</th>
                        <th>Order Date</th>
                        <th>Total Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentOrders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.name}</td>
                            <td>{formatOrderDate(order.order_date)}</td>
                            <td>{order.total_amount}</td>
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
                {[...Array(Math.ceil(filteredOrders.length / ordersPerPage)).keys()].map((number) => (
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
                    disabled={currentPage === Math.ceil(filteredOrders.length / ordersPerPage)}
                    className={cx('pagination-button')}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>

            {selectedOrder && (
                <div className={cx('overlay')}>
                    <div className={cx('detail-container')}>
                        <h2>Order Detail</h2>
                        <table className={cx('order-detail-table')}>
                            <thead>
                                <tr>
                                    <th>Shoe</th>

                                    <th>Size</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedOrder.OrderDetail &&
                                    selectedOrder.OrderDetail.map((detail) => (
                                        <tr key={detail.id}>
                                            <td>{detail.Shoes ? detail.Shoes.product_name : 'N/A'}</td>

                                            <td>{detail.size}</td>
                                            <td>{detail.quantity}</td>
                                            <td>{detail.price}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
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
