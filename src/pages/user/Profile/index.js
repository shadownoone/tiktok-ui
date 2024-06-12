import React, { useEffect, useState } from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import * as userService from '~/services/userService';
import UpdateProfileForm from './Update'; // Import UpdateProfileForm component

import './styles.css'; // Import CSS file

export default function Profile() {
    const [customer, setCustomer] = useState(null);
    const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);

    const userProfile = useSelector((state) => state.account);

    useEffect(() => {
        if (userProfile?.userInfo?.user?.id) {
            userService.getUserById(userProfile.userInfo.user.id).then((res) => {
                setCustomer(res.data);
            });
        }
    }, [userProfile]);

    const handleUpdateButtonClick = () => {
        setIsUpdateFormOpen(true);
    };

    const updateCustomerData = (updatedData) => {
        setCustomer(updatedData);
    };

    const handleCancelUpdate = () => {
        setIsUpdateFormOpen(false);
    };

    if (!customer) {
        return <div>Loading...</div>;
    }

    return (
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src={
                                        customer.account_customer.profileImageUrl ||
                                        'https://i.pinimg.com/236x/3a/67/19/3a67194f5897030237d83289372cf684.jpg'
                                    }
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid
                                />
                                <p className="text-muted mb-1">Full Stack Developer</p>
                                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <MDBBtn>Follow</MDBBtn>
                                    <MDBBtn outline className="ms-1" onClick={handleUpdateButtonClick}>
                                        Update Profile
                                    </MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="mb-4 mb-lg-0">
                            <MDBCardBody className="p-0">{/* Social media links */}</MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                {/* Personal information */}
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Full Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            {customer.account_customer.fullName}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            {customer.account_customer.email}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Phone</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            {customer.account_customer.phoneNumber}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Address</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            {customer.account_customer.address}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Create At</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            {customer.account_customer.createdAt}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>

                        {/* Overlay and Update Profile Form */}
                        {isUpdateFormOpen && (
                            <div className="overlay">
                                <MDBCard className="mb-4">
                                    <MDBCardBody>
                                        <UpdateProfileForm
                                            customer={customer}
                                            onCancel={handleCancelUpdate}
                                            updateCustomerData={updateCustomerData}
                                        />
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                        )}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
