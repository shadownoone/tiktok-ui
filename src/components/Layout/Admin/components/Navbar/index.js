import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Import thẻ Link từ react-router-dom
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ArticleIcon from '@mui/icons-material/Article';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';

function Navbar() {
    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin/dashboard' },
        { text: 'Profile', icon: <PersonIcon />, path: '/admin/profile' },
        { text: 'Product', icon: <LocalMallIcon />, path: '/admin/product' },
        { text: 'Order', icon: <ListAltIcon />, path: '/admin/order' },
        { text: 'User', icon: <GroupIcon />, path: '/admin/user' },
        { text: 'Blog', icon: <ArticleIcon />, path: '/blog' },
        { text: 'Mail', icon: <MailIcon />, path: '/mail' },
        { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
    ];

    return (
        <List sx={{ padding: 0 }}>
            {' '}
            {/* Thêm margin top để tránh bị đè lên bởi Header */}
            {menuItems.map((item) => (
                <ListItem button key={item.text} sx={{ padding: '10px 16px' }} component={RouterLink} to={item.path}>
                    {/* Sử dụng RouterLink thay vì ListItem để chuyển đường link */}
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={<Typography sx={{ fontSize: '1.6rem' }}>{item.text}</Typography>} />
                </ListItem>
            ))}
        </List>
    );
}

export default Navbar;
