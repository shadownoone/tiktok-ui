import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { format, subDays, startOfWeek, endOfWeek } from 'date-fns';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import * as userService from '~/services/userService';
import * as orderService from '~/services/orderService';

const data = [
    { name: 'Jan', income: 4000 },
    { name: 'Feb', income: 3000 },
    { name: 'Mar', income: 5000 },
    { name: 'Apr', income: 4000 },
    { name: 'May', income: 6000 },
    { name: 'Jun', income: 7000 },
    { name: 'Jul', income: 5000 },
    { name: 'Aug', income: 4000 },
    { name: 'Sep', income: 3000 },
    { name: 'Oct', income: 5000 },
    { name: 'Nov', income: 4000 },
    { name: 'Dec', income: 6000 },
];

function Dashboard() {
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [weeklySales, setWeeklySales] = useState(0);
    const [weekRange, setWeekRange] = useState({ start: '', end: '' });

    useEffect(() => {
        userService.getUserAll().then((res) => {
            setTotalUsers(res.length);
        });

        orderService.getOrderAll().then((res) => {
            setTotalOrders(res.length);

            const total = res.reduce((sum, order) => sum + order.total_amount, 0);
            setTotalRevenue(total);

            const oneWeekAgo = subDays(new Date(), 7);
            const weeklyOrders = res.filter((order) => new Date(order.order_date) >= oneWeekAgo);
            const weeklyTotal = weeklyOrders.reduce((sum, order) => sum + order.total_amount, 0);
            setWeeklySales(weeklyTotal);

            const startOfWeekDate = startOfWeek(new Date());
            const endOfWeekDate = endOfWeek(new Date());
            setWeekRange({
                start: format(startOfWeekDate, 'MMMM d, yyyy'),
                end: format(endOfWeekDate, 'MMMM d, yyyy'),
            });
        });
    }, []);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    return (
        <div>
            <h1 style={{ padding: '16px 0' }}>Hi, Welcome back 👋</h1>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card style={{ backgroundColor: '#1976d2', color: 'white' }}>
                        <CardContent
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '150px',
                            }}
                        >
                            <MonetizationOnIcon style={{ fontSize: '3rem', marginBottom: '10px' }} />
                            <Typography variant="h6">Weekly Sales</Typography>
                            <Typography variant="subtitle1">
                                {weekRange.start} - {weekRange.end}
                            </Typography>
                            <Typography variant="h4">{formatCurrency(weeklySales)}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card style={{ backgroundColor: '#388e3c', color: 'white' }}>
                        <CardContent
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '150px',
                            }}
                        >
                            <PersonAddIcon style={{ fontSize: '3rem', marginBottom: '10px' }} />
                            <Typography variant="h6">Total Users</Typography>
                            <Typography variant="h4">{totalUsers}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card style={{ backgroundColor: '#d32f2f', color: 'white' }}>
                        <CardContent
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '150px',
                            }}
                        >
                            <AttachMoneyIcon style={{ fontSize: '3rem', marginBottom: '10px' }} />
                            <Typography variant="h6">Total Revenue</Typography>
                            <Typography variant="h4">{formatCurrency(totalRevenue)}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card style={{ backgroundColor: '#6a1b9a', color: 'white' }}>
                        <CardContent
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '150px',
                            }}
                        >
                            <ReceiptIcon style={{ fontSize: '3rem', marginBottom: '10px' }} />
                            <Typography variant="h6">Total Orders</Typography>
                            <Typography variant="h4">{totalOrders}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <div style={{ marginTop: '40px' }}>
                <Card>
                    <CardContent>
                        <Typography variant="h6" style={{ marginBottom: '20px' }}>
                            Income Over Time
                        </Typography>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Dashboard;
