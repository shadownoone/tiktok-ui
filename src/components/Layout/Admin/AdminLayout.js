import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';

function AdminLayout({ children }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <div style={{ display: 'flex', flexGrow: 1, marginTop: '64px' }}>
                {' '}
                {/* Thêm marginTop cho các trang */}
                <Navbar />
                <div style={{ flexGrow: 1, padding: '16px 16px 0 16px' }}>{children}</div>
            </div>
        </div>
    );
}

export default AdminLayout;
