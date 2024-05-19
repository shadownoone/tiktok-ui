import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem, TextField, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import 'flag-icons/css/flag-icons.min.css';
import '~/i18n'; // Import cấu hình i18n

function Header() {
    const { t, i18n } = useTranslation();
    const [langAnchorEl, setLangAnchorEl] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageClick = (event) => {
        setLangAnchorEl(event.currentTarget);
    };

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        setLangAnchorEl(null);
    };

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6" noWrap sx={{ flexGrow: 1, fontSize: '1.6rem' }}>
                    {t('Dashboard')}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        variant="outlined"
                        placeholder={t('search_placeholder')}
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
                        <MenuItem onClick={() => handleLanguageChange('vi')}>
                            <span className="fi fi-vn" style={{ marginRight: 8 }}></span>
                            Tiếng Việt
                        </MenuItem>
                        <MenuItem onClick={() => handleLanguageChange('en')}>
                            <span className="fi fi-gb" style={{ marginRight: 8 }}></span>
                            English
                        </MenuItem>
                    </Menu>
                    <IconButton onClick={handleAvatarClick}>
                        <Avatar alt="Admin" src="/path-to-avatar.jpg" />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                        <MenuItem onClick={handleMenuClose}>{t('help')}</MenuItem>
                        <MenuItem onClick={handleMenuClose}>{t('logout')}</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
