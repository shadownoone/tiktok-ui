import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem, TextField, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';

import 'flag-icons/css/flag-icons.min.css';

import { useNavigate } from 'react-router-dom';

function Header() {
    const [langAnchorEl, setLangAnchorEl] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageClick = (event) => {
        setLangAnchorEl(event.currentTarget);
    };

    const handleLogout = () => {
        handleMenuClose();
        navigate('/login');
    };

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6" noWrap sx={{ flexGrow: 1, fontSize: '1.6rem' }}>
                    Dashboard
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        variant="outlined"
                        placeholder="search_placeholder"
                        size="small"
                        InputProps={{
                            endAdornment: (
                                <IconButton size="small">
                                    <SearchIcon />
                                </IconButton>
                            ),
                        }}
                        sx={{ marginRight: 2, backgroundColor: 'white', borderRadius: 1 }}
                    />
                    <IconButton onClick={handleLanguageClick}>
                        <LanguageIcon />
                    </IconButton>
                    <Menu anchorEl={langAnchorEl} open={Boolean(langAnchorEl)} onClose={() => setLangAnchorEl(null)}>
                        <MenuItem>
                            <span className="fi fi-vn" style={{ marginRight: 8 }}></span>
                            Tiếng Việt
                        </MenuItem>
                        <MenuItem>
                            <span className="fi fi-gb" style={{ marginRight: 8 }}></span>
                            English
                        </MenuItem>
                    </Menu>
                    <IconButton onClick={handleAvatarClick}>
                        <Avatar alt="Admin" src="/path-to-avatar.jpg" />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                        <MenuItem onClick={handleMenuClose}>help</MenuItem>
                        <MenuItem onClick={handleLogout}>logout'</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
