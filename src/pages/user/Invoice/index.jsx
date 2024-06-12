import React from 'react';
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

export default function App() {
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
                                >
                                    <MDBIcon fas icon="print" className="me-2" />
                                    Print
                                </MDBBtn>
                                <MDBBtn
                                    color="danger"
                                    ripple="dark"
                                    className="text-capitalize"
                                    style={{ fontSize: '1.6rem', padding: '10px 20px' }}
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
                            Thank for your purchase
                        </p>
                    </MDBContainer>
                    <MDBRow>
                        <MDBCol xl="8">
                            <MDBTypography listUnStyled>
                                <li className="text-muted" style={{ fontSize: '1.6rem' }}>
                                    To: <span style={{ color: '#5d9fc5' }}>John Lorem</span>
                                </li>
                                <li className="text-muted" style={{ fontSize: '1.6rem' }}>
                                    Street, City
                                </li>
                                <li className="text-muted" style={{ fontSize: '1.6rem' }}>
                                    State, Country
                                </li>
                                <li className="text-muted" style={{ fontSize: '1.6rem' }}>
                                    <MDBIcon fas icon="phone-alt" /> 123-456-789
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
                                    <span className="fw-bold ms-1">ID:</span>#123-456
                                </li>
                                <li className="text-muted" style={{ fontSize: '1.6rem' }}>
                                    <MDBIcon fas icon="circle" style={{ color: '#84B0CA' }} />
                                    <span className="fw-bold ms-1">Creation Date: </span>Jun 23, 2021
                                </li>
                                <li className="text-muted" style={{ fontSize: '1.6rem' }}>
                                    <MDBIcon fas icon="circle" style={{ color: '#84B0CA' }} />
                                    <span className="fw-bold ms-1">Status:</span>
                                    <span className="badge bg-warning text-black fw-bold ms-1">Unpaid</span>
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
                                    <th scope="col">Description</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Amount</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody style={{ fontSize: '1.6rem' }}>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Pro Package</td>
                                    <td>4</td>
                                    <td>$200</td>
                                    <td>$800</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Web hosting</td>
                                    <td>1</td>
                                    <td>$10</td>
                                    <td>$10</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Consulting</td>
                                    <td>1 year</td>
                                    <td>$300</td>
                                    <td>$300</td>
                                </tr>
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
                                    <span className="text-black me-4">SubTotal</span>$1110
                                </li>
                                <li className="text-muted ms-3 mt-2" style={{ fontSize: '1.6rem' }}>
                                    <span className="text-black me-4">Tax(15%)</span>$111
                                </li>
                            </MDBTypography>
                            <p className="text-black float-end" style={{ fontSize: '1.6rem' }}>
                                <span className="text-black me-3">Total Amount</span>
                                <span style={{ fontSize: '25px' }}>$1221</span>
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
}
