import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    MDBCard,
    MDBCardBody,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon,
    MDBTypography,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from 'mdb-react-ui-kit';
import axios from 'axios';

const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price) + '₫';
};

const PrintInvoice = () => {
    const { id } = useParams();
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [orderDetail, setOrderDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/orders/invoice/${id}`);
                let resData = response.data.data;
                console.log('Fetched Order:', resData.OrderDetail);
                setSelectedOrder(response.data);
                setOrderDetail(() => {
                    return [resData.OrderDetail];
                });
                setLoading(false);
            } catch (error) {
                console.error('Error fetching order:', error);
                setError('Error fetching order data');
                setLoading(false);
            }
        };

        fetchOrder();
    }, [id]);

    console.log(orderDetail);
    const formatOrderDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!selectedOrder) {
        return <div>No order data found</div>;
    }

    return (
        <MDBContainer className="py-5">
            <MDBCard className="p-4 shadow-5">
                <MDBCardBody>
                    <MDBContainer className="mb-4 mt-3">
                        <MDBRow className="d-flex align-items-baseline">
                            <MDBCol xl="9">
                                <img
                                    src="https://i.pinimg.com/236x/e7/65/04/e7650458fe434cd647eafb289a569fe2.jpg"
                                    alt="Logo"
                                    style={{ width: '100px', height: 'auto' }}
                                />
                            </MDBCol>
                            <MDBCol xl="3" className="text-end">
                                <MDBBtn
                                    color="primary"
                                    ripple="dark"
                                    className="text-capitalize me-2"
                                    style={{ fontSize: '1.6rem', padding: '10px 20px' }}
                                    onClick={() => window.print()}
                                >
                                    <MDBIcon fas icon="print" className="me-2" />
                                    Print
                                </MDBBtn>
                                <MDBBtn
                                    color="danger"
                                    ripple="dark"
                                    className="text-capitalize"
                                    style={{ fontSize: '1.6rem', padding: '10px 20px' }}
                                    onClick={() => {
                                        // Your export PDF functionality here
                                    }}
                                >
                                    <MDBIcon far icon="file-pdf" className="me-2" />
                                    Export
                                </MDBBtn>
                                <hr />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <MDBContainer className="text-center">
                        <MDBIcon fab icon="mdb" size="4x" className="mb-2" style={{ color: '#5d9fc5' }} />
                        <p className="mb-4" style={{ fontSize: '2.6rem' }}>
                            Thank you for your purchase
                        </p>
                    </MDBContainer>
                    <MDBRow>
                        <MDBCol xl="8">
                            <MDBTypography listUnStyled>
                                <li className="text-muted" style={{ fontSize: '1.6rem' }}>
                                    To: <span style={{ color: '#5d9fc5' }}>{selectedOrder.data.name}</span>
                                </li>
                                <li className="text-muted" style={{ fontSize: '1.6rem' }}>
                                    {selectedOrder.data.Customer?.address}
                                </li>
                                <li className="text-muted" style={{ fontSize: '1.6rem' }}>
                                    <MDBIcon fas icon="phone-alt" /> {selectedOrder.data.phone}
                                </li>
                            </MDBTypography>
                        </MDBCol>
                        <MDBCol xl="4">
                            <p className="text-muted" style={{ fontSize: '1.6rem' }}>
                                Invoice
                            </p>
                            <MDBTypography listUnStyled>
                                <li className="text-muted" style={{ fontSize: '1.6rem' }}>
                                    <MDBIcon fas icon="circle" style={{ color: '#84B0CA' }} />
                                    <span className="fw-bold ms-1">ID:</span>#{selectedOrder.data.id}
                                </li>
                                <li className="text-muted" style={{ fontSize: '1.6rem' }}>
                                    <MDBIcon fas icon="circle" style={{ color: '#84B0CA' }} />
                                    <span className="fw-bold ms-1">Creation Date:</span>{' '}
                                    {formatOrderDate(selectedOrder.data.createdAt)}
                                </li>
                                <li className="text-muted" style={{ fontSize: '1.6rem' }}>
                                    <MDBIcon fas icon="circle" style={{ color: '#84B0CA' }} />
                                    <span className="fw-bold ms-1">Status:</span>{' '}
                                    <span className="badge bg-warning text-black fw-bold ms-1">
                                        {selectedOrder.data.status}
                                    </span>
                                </li>
                            </MDBTypography>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="my-4 mx-1 justify-content-center">
                        <MDBTable striped hover responsive>
                            <MDBTableHead
                                className="text-white"
                                style={{ backgroundColor: '#84B0CA', fontSize: '1.6rem' }}
                            >
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Shoe Name</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Amount</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody style={{ fontSize: '1.6rem' }}>
                                {orderDetail.map((detail, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{detail.Shoes?.product_name}</td>
                                        <td>{detail.quantity}</td>
                                        <td>{formatPrice(detail.price)}</td>
                                        <td>{formatPrice(detail.price * detail.quantity)}</td>
                                    </tr>
                                ))}
                            </MDBTableBody>
                        </MDBTable>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol xl="8">
                            <p className="ms-3 text-muted" style={{ fontSize: '1.6rem' }}>
                                Add additional notes and payment information
                            </p>
                        </MDBCol>
                        <MDBCol xl="4">
                            <MDBTypography listUnStyled>
                                <li className="text-muted ms-3" style={{ fontSize: '1.6rem' }}>
                                    <span className="text-black me-4">SubTotal</span>
                                    {formatPrice(selectedOrder.data.total_amount)}
                                </li>
                                <li className="text-muted ms-3 mt-2" style={{ fontSize: '1.6rem' }}>
                                    <span className="text-black me-4">Tax (15%)</span>
                                    {formatPrice(selectedOrder.data.total_amount * 0.15)}
                                </li>
                            </MDBTypography>
                            <p className="text-black float-end" style={{ fontSize: '1.6rem' }}>
                                <span className="text-black me-3">Total Amount</span>
                                <span style={{ fontSize: '25px' }}>
                                    {formatPrice(selectedOrder.data.total_amount * 1.15)}
                                </span>
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                        <MDBCol xl="10">
                            <p style={{ fontSize: '1.6rem' }}>Thank you for your purchase</p>
                        </MDBCol>
                        <MDBCol xl="2" className="text-end">
                            <MDBBtn
                                className="text-capitalize"
                                style={{ backgroundColor: '#60bdf3', fontSize: '1.6rem', padding: '10px 20px' }}
                            >
                                Pay Now
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
};

export default PrintInvoice;
