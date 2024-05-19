import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import '~/i18n'; // Import cấu hình i18n
import { useTranslation } from 'react-i18next';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
    const { t, i18n } = useTranslation();

    return (
        <div>
            <h1 style={{ padding: '16px 0' }}> {t('Hi, Welcome back')}👋</h1>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card style={{ backgroundColor: '#1976d2', color: 'white' }}>
                        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <MonetizationOnIcon style={{ fontSize: '3rem', marginBottom: '10px' }} />
                            <Typography variant="h6">Weekly Sales</Typography>
                            <Typography variant="h4">$10,000</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card style={{ backgroundColor: '#388e3c', color: 'white' }}>
                        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <PersonAddIcon style={{ fontSize: '3rem', marginBottom: '10px' }} />
                            <Typography variant="h6">New Users</Typography>
                            <Typography variant="h4">500</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card style={{ backgroundColor: '#fbc02d', color: 'white' }}>
                        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <ShoppingCartIcon style={{ fontSize: '3rem', marginBottom: '10px' }} />
                            <Typography variant="h6">Item Orders</Typography>
                            <Typography variant="h4">300</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card style={{ backgroundColor: '#d32f2f', color: 'white' }}>
                        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <AttachMoneyIcon style={{ fontSize: '3rem', marginBottom: '10px' }} />
                            <Typography variant="h6">Total Price</Typography>
                            <Typography variant="h4">$20,000</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <div style={{ marginTop: '40px' }}>
                <Card>
                    <CardContent>
                        <Typography variant="h6" style={{ marginBottom: '20px' }}>
                            {t('income_over_time')}
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
