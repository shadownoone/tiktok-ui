import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faReceipt, faTrash } from '@fortawesome/free-solid-svg-icons';

import { format } from 'date-fns';
import * as orderService from '~/services/orderService';

const cx = classNames.bind(styles);

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const ordersPerPage = 5;
    const navigate = useNavigate();

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = () => {
        orderService
            .getOrderAll()
            .then((res) => {
                // Process the fetched orders to group them by id
                const groupedOrders = res.reduce((acc, order) => {
                    const existingOrder = acc.find((o) => o.id === order.id);
                    if (existingOrder) {
                        existingOrder.OrderDetail.push(order.OrderDetail);
                    } else {
                        acc.push({ ...order, OrderDetail: [order.OrderDetail] });
                    }
                    return acc;
                }, []);
                setOrders(groupedOrders);
            })
            .catch((error) => {
                console.error('Error fetching orders:', error);
            });
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredOrders = orders.filter(
        (order) =>
            order.Customer &&
            order.Customer.fullName &&
            order.Customer.fullName.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

    const handleViewOrder = (order) => {
        setSelectedOrder(order);
    };
    const handleCloseDetail = () => {
        setSelectedOrder(null);
    };

    const handleDeleteOrder = (id) => {
        orderService
            .deleteOrder(id)
            .then(() => {
                setOrders(orders.filter((order) => order.id !== id));
            })
            .catch((error) => {
                console.error('Error deleting order:', error);
            });
    };

    const handleChangeOrderStatus = (orderId, status) => {
        orderService
            .updateOrderStatus(orderId, status)
            .then((updatedOrder) => {
                setOrders((prevOrders) =>
                    prevOrders.map((order) => (order.id === orderId ? { ...order, status } : order)),
                );
                alert(`Bạn đã chọn trạng thái: ${status}`);
            })
            .catch((error) => {
                console.error('Error updating order status:', error);
            });
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const formatOrderDate = (isoString) => {
        const date = new Date(isoString);
        return format(date, 'MMMM d, yyyy, h:mm a');
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
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
                        <th>Delivery address</th>
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
                            <td>{formatPrice(order.total_amount)}</td>
                            <td>{order.address}</td>
                            <td>
                                <select
                                    value={order.status}
                                    onChange={(e) => handleChangeOrderStatus(order.id, e.target.value)}
                                >
                                    <option value="pending">Pending</option>
                                    <option value="confirmed">Confirmed</option>
                                    <option value="shipped">Shipped</option>
                                    <option value="delivered">Delivered</option>
                                    <option value="canceled">Canceled</option>
                                </select>
                            </td>
                            <td className={cx('actions')}>
                                <button onClick={() => handleViewOrder(order)} className={cx('action-button')}>
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                                <Link to={`/invoice/${order.id}`} className={cx('action-button')}>
                                    <FontAwesomeIcon icon={faReceipt} />
                                </Link>
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
                    Prev
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
                    Next
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
                                            <td>{formatPrice(detail.price)}</td>
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
